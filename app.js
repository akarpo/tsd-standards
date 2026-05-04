// app.js — flips matrix tables to lead with MDE standards.
// Transforms: [Domain | Standards | Skills | NWEA Test | NWEA Area | RIT | Notes]
//        →   [Domain | Standards | Skills | Free Resources | NWEA Overlap | Notes]
// Also wires up sheet-tab indicators and the drill-down modal ("Sheet 2: Detail").

(function () {
  "use strict";

  // ---------- Subject detection ----------
  function pageSubject() {
    if (document.body.dataset.subject) return document.body.dataset.subject;
    if (location.pathname.indexOf("math") > -1) return "math";
    if (location.pathname.indexOf("ela") > -1) return "ela";
    return null;
  }

  // ---------- Domain abbreviation maps ----------
  var MATH_DOMAIN_TO_ABBREV = {
    "counting & cardinality": "CC",
    "operations & algebraic thinking": "OA",
    "number & operations in base ten": "NBT",
    "number & operations · fractions": "NF",
    "measurement & data": "MD",
    "geometry": "G",
    "ratios & proportional relationships": "RP",
    "the number system": "NS",
    "expressions & equations": "EE",
    "functions": "F",
    "statistics & probability": "SP",
    "number & quantity": "N",
    "algebra": "A",
    "congruence": "CO",
    "similarity, right triangles & trig": "SRT",
    "circles": "C",
    "expressing properties with equations": "GPE",
    "measurement & modeling": "GMD",
    "conditional probability (sometimes embedded)": "CP",
    // Pre-Calc / AP Precalc
    "polynomial & rational functions": "PR",
    "exponential & logarithmic": "EL",
    "trigonometric & polar functions": "TP",
    "functions as models": "FM",
    // AP Calc AB / BC
    "limits & continuity": "LIM",
    "differentiation: definition & properties": "DIFF",
    "applications of differentiation": "APD",
    "integration & accumulation": "INT",
    "all ap calc ab content": "AB",
    "parametric, polar, vector-valued functions": "PPV",
    "infinite sequences & series": "SER",
    // AP Statistics
    "exploring data (one variable)": "1D",
    "exploring data (two variables)": "2D",
    "sampling & experimentation": "SAMP",
    "probability, random variables & distributions": "PROB",
    "inference (means, proportions, regression)": "INF"
  };

  var ELA_STRAND_TO_ABBREV = {
    "rl": "RL", "ri": "RI", "rf": "RF",
    "w": "W", "sl": "SL", "l": "L"
  };

  function gradeKeyFromSectionId(sectionId) {
    if (!sectionId) return null;
    if (sectionId === "g-k") return "gK";
    var m = sectionId.match(/^g-(\d+|alg1|geom|alg2|precalc|calcab|calcbc|stats|aplang|aplit|910|1112)$/i);
    if (!m) return null;
    var raw = m[1].toLowerCase();
    if (raw === "alg1") return "gAlg1";
    if (raw === "geom") return "gGeom";
    if (raw === "alg2") return "gAlg2";
    if (raw === "precalc") return "gPreCalc";
    if (raw === "calcab") return "gCalcAB";
    if (raw === "calcbc") return "gCalcBC";
    if (raw === "stats") return "gStats";
    if (raw === "aplang") return "gAPLang";
    if (raw === "aplit") return "gAPLit";
    if (raw === "910") return "g910";
    if (raw === "1112") return "g1112";
    return "g" + raw;
  }

  function deriveCellId(row, subject) {
    var section = row.closest("section");
    if (!section) return null;
    var gradeKey = gradeKeyFromSectionId(section.id);
    if (!gradeKey) return null;

    var firstCell = row.querySelector("td");
    if (!firstCell) return null;

    var abbrev = null;
    if (subject === "math") {
      var text = firstCell.textContent.trim().toLowerCase();
      for (var key in MATH_DOMAIN_TO_ABBREV) {
        if (text.indexOf(key) === 0) { abbrev = MATH_DOMAIN_TO_ABBREV[key]; break; }
      }
    } else if (subject === "ela") {
      var badge = firstCell.querySelector(".badge");
      if (badge) {
        var strandText = badge.textContent.trim().toLowerCase();
        abbrev = ELA_STRAND_TO_ABBREV[strandText] || null;
      }
    }
    if (!abbrev) return null;
    return subject + ":" + gradeKey + "-" + abbrev;
  }

  // ---------- Sheet-tab indicator above each table ----------
  function injectSheetTabs(table) {
    var prev = table.previousElementSibling;
    if (prev && prev.classList && prev.classList.contains("sheet-tabs")) return;
    var tabsEl = document.createElement("div");
    tabsEl.className = "sheet-tabs";
    tabsEl.innerHTML =
      '<span class="sheet-tab active"><span class="icon">📊</span> Sheet 1: MDE Standards Matrix</span>' +
      '<span class="sheet-tab inactive">↪ Click any Skills cell for Sheet 2: Standard detail + full resource library</span>';
    table.parentNode.insertBefore(tabsEl, table);
  }

  // ---------- Type badge styles for resources ----------
  var TYPE_BADGE = {
    khan:         { label: "Khan",     color: "#1865f2", bg: "#e3edff" },
    video:        { label: "Video",    color: "#9333ea", bg: "#f3e8ff" },
    practice:     { label: "Practice", color: "#ea580c", bg: "#ffedd5" },
    tool:         { label: "Tool",     color: "#0d9488", bg: "#ccfbf1" },
    text:         { label: "Text",     color: "#2563eb", bg: "#dbeafe" },
    course:       { label: "Course",   color: "#7c2d12", bg: "#fed7aa" },
    foundational: { label: "K-3",      color: "#a16207", bg: "#fef3c7" },
    open:         { label: "Open",     color: "#059669", bg: "#d1fae5" },
    free:         { label: "Free",     color: "#374151", bg: "#e5e7eb" }
  };

  function badgeHtml(type) {
    var t = TYPE_BADGE[type] || TYPE_BADGE.free;
    return '<span style="display:inline-block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:' + t.color + ';background:' + t.bg + ';padding:1px 6px;border-radius:3px;margin-right:6px;vertical-align:middle;min-width:46px;text-align:center;">' + t.label + '</span>';
  }

  // ---------- Table transformation: collapse NWEA columns + add Resources ----------
  function transformTable(table, subject) {
    // Detect whether this table has the "Exam" column on math.html (an
    // exam-link cell with rowspan that visually fills the rightmost
    // column across multiple grade-domain rows). When present:
    //   - the rightmost header is "Exam" (not "Notes")
    //   - rows that LACK a 7th cell are NOT given a synthesized Notes cell
    //     (the rowspan from another row covers them)
    var hasExamColumn = !!table.querySelector("td.exam-cell");

    // 1. Update header row to new column structure.
    // ELA tables (and math HS Pre-Calc / Calc / Stats tables) have NO
    // Exam column and the Notes column was never populated — render
    // them as 6-column tables. Math K-Alg2 tables have an Exam column
    // (with rowspan) — render them as 7 columns ending in Exam.
    var thead = table.querySelector("thead");
    if (thead) {
      var headerHtml;
      if (hasExamColumn) {
        // 7-column layout with Exam on the right — give it a wider 15%
        // so the Form A / Form B exam-link buttons fit.
        var w = { strand: "10%", std: "11%", skill: "16%", res: "22%", troy: "13%", nwea: "13%", last: "15%" };
        headerHtml =
          '<tr>' +
            '<th style="width:' + w.strand + '">Domain / Strand</th>' +
            '<th style="width:' + w.std    + '">MDE Standards</th>' +
            '<th style="width:' + w.skill  + '">Skill / What students learn</th>' +
            '<th style="width:' + w.res    + '">Free Resources <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--ink-muted);font-size:10px;">(click Skills cell for full library)</span></th>' +
            '<th style="width:' + w.troy   + '">Troy SD Curriculum</th>' +
            '<th style="width:' + w.nwea   + '">NWEA Overlap</th>' +
            '<th style="width:' + w.last   + '">Exam</th>' +
          '</tr>';
      } else {
        // 6-column layout — Notes column removed (it was always empty).
        // The reclaimed 7% goes mostly to Free Resources.
        var w6 = subject === "ela"
          ? { strand: "5%",  std: "9%",  skill: "23%", res: "41%", troy: "8%",  nwea: "14%" }
          : { strand: "11%", std: "13%", skill: "19%", res: "29%", troy: "14%", nwea: "14%" };
        headerHtml =
          '<tr>' +
            '<th style="width:' + w6.strand + '">Domain / Strand</th>' +
            '<th style="width:' + w6.std    + '">MDE Standards</th>' +
            '<th style="width:' + w6.skill  + '">Skill / What students learn</th>' +
            '<th style="width:' + w6.res    + '">Free Resources <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--ink-muted);font-size:10px;">(click Skills cell for full library)</span></th>' +
            '<th style="width:' + w6.troy   + '">Troy SD Curriculum</th>' +
            '<th style="width:' + w6.nwea   + '">NWEA Overlap</th>' +
          '</tr>';
      }
      thead.innerHTML = headerHtml;
    }

    // 2. For each body row: collapse old columns, build new ones.
    // ELA tables (and Math HS Pre-Calc/Calc/Stats tables) ship with 6
    // body cells (no Notes column); K-8 + Algebra-track Math tables ship
    // with 7 cells, where the 7th may be:
    //   - a regular Notes cell (most cases), OR
    //   - an exam-cell rowspan="5" / "4" cell that visually covers the next
    //     few rows.
    // Rows that lack a 7th cell are either ELA rows (synthesize empty
    // Notes) or math rows visually covered by an Exam rowspan from a
    // sibling row (do NOT synthesize anything — the rowspan handles the
    // last column).
    var rows = table.querySelectorAll("tbody tr");
    rows.forEach(function (row) {
      var cells = row.querySelectorAll("td");
      if (cells.length < 6) return; // unexpected shape — skip
      // If the row already has the post-transform shape (Resources cell
      // injected at index 3 with data-label "Free Resources"), skip.
      if (cells[3] && cells[3].getAttribute("data-label") === "Free Resources") return;

      var domainCell      = cells[0];
      var standardsCell   = cells[1];
      var skillsCell      = cells[2];
      var nweaTestCell    = cells[3];
      var nweaAreaCell    = cells[4];
      var ritCell         = cells[5];
      var lastCell        = cells[6] || null; // Notes cell, Exam cell, or null

      var cellId = deriveCellId(row, subject);
      var hasData = cellId && window.DRILL_DATA && window.DRILL_DATA[cellId];

      // Build NWEA Overlap consolidated cell
      var nweaTest = nweaTestCell.textContent.trim();
      var nweaArea = nweaAreaCell.textContent.trim();
      var rit = ritCell.textContent.trim();
      var nweaCell = document.createElement("td");
      nweaCell.setAttribute("data-label", "NWEA Overlap");
      var isGap = nweaTest.toLowerCase().indexOf("not assessed") > -1 ||
                  nweaTest.toLowerCase().indexOf("not directly") > -1 ||
                  nweaArea === "—";
      if (isGap) {
        nweaCell.innerHTML = '<span class="gap-marker">No NWEA overlap</span><div class="note-text" style="margin-top:6px">' + escapeHtml(nweaTest) + '</div>';
      } else {
        nweaCell.innerHTML =
          '<div style="font-size:12px;font-weight:600;color:var(--ink);">' + escapeHtml(nweaTest) + '</div>' +
          '<div style="font-size:11.5px;color:var(--ink-soft);margin-top:2px;">' + escapeHtml(nweaArea) + '</div>' +
          '<div class="rit-band" style="margin-top:4px;">RIT ' + escapeHtml(rit) + '</div>';
      }

      // Build Free Resources cell — show top resources w/ type badges.
      // ELA gets a wider column, so we show more before truncating.
      var resourcesCell = document.createElement("td");
      resourcesCell.setAttribute("data-label", "Free Resources");
      resourcesCell.style.fontSize = "12.5px";
      var resources = cellId ? window.getResourcesForCell(cellId) : [];
      var resLimit = subject === "ela" ? 7 : 5;
      if (!resources.length) {
        resourcesCell.innerHTML = '<span class="note-text">—</span>';
      } else {
        var html = '<ul style="list-style:none;margin:0;padding:0;">';
        resources.slice(0, resLimit).forEach(function (r) {
          var noteHtml = r.note
            ? '<div style="font-size:10.5px;color:var(--ink-muted);margin-top:1px;line-height:1.35;">' + escapeHtml(r.note) + '</div>'
            : '';
          html += '<li style="margin-bottom:5px;line-height:1.4;display:flex;align-items:flex-start;">'
                + badgeHtml(r.type)
                + '<div style="flex:1;">'
                + '<a href="' + r.url + '" target="_blank" rel="noopener" '
                + 'style="color:var(--accent);text-decoration:none;font-weight:500;">'
                + escapeHtml(r.name) + '</a>'
                + noteHtml
                + '</div>'
                + '</li>';
        });
        if (resources.length > resLimit) {
          html += '<li style="margin-top:6px;font-size:11px;font-style:italic;color:var(--ink-muted);">+ ' + (resources.length - resLimit) + ' more — click Skills cell for full library →</li>';
        }
        html += '</ul>';
        resourcesCell.innerHTML = html;
      }

      // Mark Skills cell as drillable (visual cue only — actual click
      // handler is attached at the row level below).
      if (hasData) {
        skillsCell.classList.add("drillable");
        skillsCell.setAttribute("data-cell-id", cellId);
      }

      // Build Troy SD Curriculum cell — K-5 only
      var troyCell = document.createElement("td");
      troyCell.setAttribute("data-label", "Troy SD Curriculum");
      troyCell.style.fontSize = "12px";
      var troyEntries = (cellId && window.TROY_CURRICULUM) ? window.TROY_CURRICULUM[cellId] : null;
      if (troyEntries && troyEntries.length) {
        // Group by program for compact display
        var byProgram = {};
        troyEntries.forEach(function (e) {
          if (!byProgram[e.program]) byProgram[e.program] = [];
          byProgram[e.program].push(e);
        });
        var thtml = '<ul style="list-style:none;margin:0;padding:0;">';
        Object.keys(byProgram).forEach(function (prog) {
          var entries = byProgram[prog];
          var statusBadge = '';
          var firstStatus = entries[0].status || 'current';
          if (firstStatus === 'planned') {
            statusBadge = '<span style="display:inline-block;font-size:9px;font-weight:700;text-transform:uppercase;color:#b45309;background:#fef3c7;padding:1px 5px;border-radius:3px;margin-left:4px;">Piloting</span>';
          } else if (firstStatus === 'tier2') {
            statusBadge = '<span style="display:inline-block;font-size:9px;font-weight:700;text-transform:uppercase;color:#7c2d12;background:#fed7aa;padding:1px 5px;border-radius:3px;margin-left:4px;">Tier 2</span>';
          }
          thtml += '<li style="margin-bottom:5px;line-height:1.35;">';
          thtml += '<div style="font-weight:600;color:var(--ink);font-size:11.5px;">' + escapeHtml(prog) + statusBadge + '</div>';
          // Show first 2 unit citations compactly
          entries.slice(0, 2).forEach(function (e) {
            // Trim citation if too long
            var cite = e.citation;
            if (cite.length > 50) cite = cite.substring(0, 47) + '…';
            thtml += '<div style="font-size:11px;color:var(--ink-soft);margin-left:2px;">• ' + escapeHtml(cite) + '</div>';
          });
          if (entries.length > 2) {
            thtml += '<div style="font-size:10.5px;color:var(--ink-muted);margin-left:2px;font-style:italic;">+' + (entries.length - 2) + ' more</div>';
          }
          thtml += '</li>';
        });
        thtml += '</ul>';
        troyCell.innerHTML = thtml;
      } else {
        // Different fallbacks for ELA HS rows (no Troy data) vs K-12 Math
        var isElaHsRow = cellId && cellId.indexOf("ela:") === 0 && !isK5Cell(cellId);
        if (isElaHsRow) {
          troyCell.innerHTML = '<span class="note-text" style="font-size:10.5px;">K-5 ELA only</span>';
        } else {
          troyCell.innerHTML = '<span class="note-text">—</span>';
        }
      }

      // Replace row contents with new column order.
      // Source row: [domain, standards, skills, nweaTest, nweaArea, rit, notes/exam?]
      // After transform: 6 cells (no Exam column tables) or 7 cells (Exam column tables).
      //   (a) lastCell exists AND is the Exam cell — insert new cells BEFORE it
      //       (preserves the Exam cell as the rightmost column with rowspan intact)
      //   (b) lastCell exists AND is just a Notes cell — drop it (the 6-col
      //       header has no Notes), then append the new cells
      //   (c) lastCell is null AND table has Exam rowspan — append new cells
      //       (the rowspan from a sibling row covers the last column)
      //   (d) lastCell is null AND no Exam column — append new cells to match
      //       the 6-col header
      row.removeChild(nweaTestCell);
      row.removeChild(nweaAreaCell);
      row.removeChild(ritCell);
      if (lastCell && hasExamColumn) {
        row.insertBefore(resourcesCell, lastCell);
        row.insertBefore(troyCell, lastCell);
        row.insertBefore(nweaCell, lastCell);
      } else if (lastCell) {
        // Existing 7th cell is an empty Notes cell — drop it (header now
        // only has 6 columns).
        row.removeChild(lastCell);
        row.appendChild(resourcesCell);
        row.appendChild(troyCell);
        row.appendChild(nweaCell);
      } else {
        // No 7th cell at all — either rowspan-covered (math) or 6-col
        // ELA / math Pre-Calc-Stats. Just append.
        row.appendChild(resourcesCell);
        row.appendChild(troyCell);
        row.appendChild(nweaCell);
      }

      // Make the WHOLE row clickable to open the modal (not just Skills).
      // We still mark the Skills cell as drillable for the visual cue, but
      // attach the click handler to the <tr> so any cell triggers the modal.
      if (hasData) {
        row.classList.add("row-drillable");
        row.setAttribute("data-cell-id", cellId);
        row.setAttribute("title", "Click anywhere in this row for full standard detail + resource library");
        row.addEventListener("click", function (e) {
          // Allow internal links (in the resource cell) to work normally.
          if (e.target && e.target.closest && e.target.closest("a")) return;
          openModal(cellId);
        });
      }
    });
  }

  function isK5Cell(cellId) {
    if (!cellId) return false;
    var m = cellId.match(/^(math|ela):g(K|[1-5])-/);
    return !!m;
  }

  // ---------- Modal rendering ----------
  function openModal(cellId) {
    var data = window.DRILL_DATA[cellId];
    var modal = document.getElementById("drilldown-modal");
    var body = document.getElementById("modal-body");
    var breadcrumb = document.getElementById("modal-breadcrumb");
    var title = document.getElementById("modal-title");
    var subhead = document.getElementById("modal-subhead");
    var meta = document.getElementById("modal-meta");
    var tabLabel = document.getElementById("modal-tab-label");

    if (!data) {
      body.innerHTML = '<div class="no-data">No detail data for this cell.</div>';
      modal.removeAttribute("hidden");
      return;
    }

    breadcrumb.textContent = data.subject + " · " + data.grade + " · " + data.domain + " · MDE Standard Detail";
    if (tabLabel) tabLabel.textContent = data.grade + " · " + data.domain;
    title.textContent = data.domain;
    subhead.textContent = data.subject + " · " + data.grade;

    // Meta row — NWEA info now smaller, MDE-led
    var nweaSummary = '';
    if (data.nweaTest && data.nweaTest.toLowerCase().indexOf("not") === -1) {
      nweaSummary =
        '<span class="meta-item"><strong>NWEA Test:</strong> ' + escapeHtml(data.nweaTest) + '</span>' +
        '<span class="meta-item"><strong>NWEA Area:</strong> ' + escapeHtml(data.nweaArea) + '</span>' +
        '<span class="meta-item"><strong>Typical RIT:</strong> ' + escapeHtml(data.ritBand) + '</span>';
    } else {
      nweaSummary = '<span class="meta-item"><strong>NWEA:</strong> Not assessed (gap)</span>';
    }
    meta.innerHTML = nweaSummary;

    var html = '';
    if (data.summary) {
      html += '<div class="overlap-summary">' + escapeHtml(data.summary) + '</div>';
    }

    // ===== MDE STANDARDS — primary content =====
    html += '<h3 style="color:var(--ink)">MDE Standards in this domain</h3>';
    data.standards.forEach(function (std) {
      var qualClass = std.overlap || "partial";
      var qualLabel = qualClass === "full" ? "NWEA: full overlap"
                    : qualClass === "partial" ? "NWEA: partial"
                    : "NWEA: gap (not assessed)";
      html += '<div class="overlap-row">';
      html += '<div class="overlap-head">';
      html += '<span class="std-code">' + escapeHtml(std.code) + '</span>';
      html += '<span class="overlap-quality ' + qualClass + '">' + qualLabel + '</span>';
      html += '</div>';
      html += '<div class="std-text">' + escapeHtml(std.text) + '</div>';

      // Compact NWEA descriptors per standard (still useful, but secondary)
      if (std.nwea && std.nwea.length) {
        html += '<div class="nwea-block">';
        html += '<div class="nwea-label">NWEA Learning Continuum descriptors that align</div>';
        html += '<ul class="nwea-list">';
        std.nwea.forEach(function (n) {
          html += '<li><span class="rit-badge">RIT ' + escapeHtml(n.rit) + '</span><span>' + escapeHtml(n.text) + '</span></li>';
        });
        html += '</ul>';
        html += '</div>';
      }
      if (std.note) {
        html += '<div class="overlap-note">Note: ' + escapeHtml(std.note) + '</div>';
      }
      html += '</div>';
    });

    if (data.gaps && data.gaps.length) {
      html += '<div class="overlap-gaps"><strong>NWEA gaps to be aware of:</strong><ul>';
      data.gaps.forEach(function (g) { html += '<li>' + escapeHtml(g) + '</li>'; });
      html += '</ul></div>';
    }

    // ===== TROY SD CURRICULUM COVERAGE =====
    var troyEntries = window.TROY_CURRICULUM ? window.TROY_CURRICULUM[cellId] : null;
    if (troyEntries && troyEntries.length) {
      html += '<h3 style="color:var(--ink);margin-top:30px;">Troy School District curriculum coverage</h3>';
      html += '<p style="font-size:13px;color:var(--ink-soft);margin:0 0 12px;">Where this MDE domain is covered in Troy SD\'s adopted (Math) and planned (ELA) K-5 curricula. Citations include unit/lesson references and the specific standards each unit addresses.</p>';

      // Group by program
      var troyByProgram = {};
      troyEntries.forEach(function (e) {
        if (!troyByProgram[e.program]) troyByProgram[e.program] = [];
        troyByProgram[e.program].push(e);
      });

      Object.keys(troyByProgram).forEach(function (prog) {
        var entries = troyByProgram[prog];
        var firstStatus = entries[0].status || 'current';
        var statusLabel = firstStatus === 'planned' ? 'Currently piloting' :
                          firstStatus === 'tier2'   ? 'Tier 2 / supplemental (piloting)' :
                                                       'Currently adopted';
        var statusColor = firstStatus === 'planned' ? '#b45309' :
                          firstStatus === 'tier2'   ? '#7c2d12' :
                                                       '#15803d';
        var statusBg = firstStatus === 'planned' ? '#fef3c7' :
                       firstStatus === 'tier2'   ? '#fed7aa' :
                                                    '#dcfce7';

        html += '<div style="margin-bottom:18px;border:1px solid var(--line);border-radius:6px;overflow:hidden;">';
        html += '<div style="background:#f5f6f8;padding:10px 14px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:10px;">';
        html += '<span style="font-weight:600;color:var(--ink);">' + escapeHtml(prog) + '</span>';
        html += '<span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:' + statusColor + ';background:' + statusBg + ';padding:2px 8px;border-radius:3px;">' + escapeHtml(statusLabel) + '</span>';
        html += '</div>';
        html += '<ul style="list-style:none;margin:0;padding:0;">';
        entries.forEach(function (e) {
          html += '<li style="padding:10px 14px;border-bottom:1px solid var(--line);">';
          html += '<div style="font-size:13px;font-weight:600;color:var(--ink);margin-bottom:3px;">' + escapeHtml(e.citation) + '</div>';
          html += '<div style="font-size:12px;color:var(--ink-soft);"><strong style="color:var(--accent);font-family:ui-monospace,monospace;font-size:11.5px;">Standards:</strong> ' + escapeHtml(e.coverage) + '</div>';
          if (e.note) {
            html += '<div style="font-size:11.5px;color:var(--ink-muted);font-style:italic;margin-top:4px;">' + escapeHtml(e.note) + '</div>';
          }
          html += '</li>';
        });
        html += '</ul>';
        html += '</div>';
      });
    } else if (isK5Cell(cellId)) {
      // Render placeholder for K-5 cells without Troy data
      // (none expected; if any, fall through silently)
    }

    // ===== FREE RESOURCES — comprehensive library =====
    var resources = window.getResourcesForCell(cellId);
    if (resources.length) {
      html += '<h3 style="color:var(--ink);margin-top:30px;">Free skill-building resources for this domain</h3>';
      html += '<p style="font-size:13px;color:var(--ink-soft);margin:0 0 12px;">A curated library of free or open resources that align with the MDE standards above. All links are free or have a substantial free tier.</p>';

      // Group by type
      var grouped = {};
      resources.forEach(function (r) {
        var key = r.type || "free";
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(r);
      });

      var typeOrder = ["khan", "course", "video", "practice", "tool", "text", "foundational", "open", "free"];
      var typeNames = {
        khan: "Khan Academy",
        course: "Open courseware & textbooks",
        video: "Video lessons",
        practice: "Problems & tasks",
        tool: "Interactive tools & manipulatives",
        text: "Texts, libraries & passages",
        foundational: "Foundational reading (K-3)",
        open: "Open educational resources",
        free: "Other free resources"
      };

      typeOrder.forEach(function (type) {
        if (!grouped[type] || !grouped[type].length) return;
        html += '<div style="margin-bottom:18px;">';
        html += '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--ink-muted);margin-bottom:8px;">' + escapeHtml(typeNames[type] || type) + '</div>';
        html += '<ul style="list-style:none;margin:0;padding:0;">';
        grouped[type].forEach(function (r) {
          html += '<li style="padding:8px 12px;border-left:2px solid var(--line);margin-bottom:4px;background:#fafbfc;border-radius:0 4px 4px 0;">';
          html += badgeHtml(r.type);
          html += '<a href="' + r.url + '" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;font-weight:600;">' + escapeHtml(r.name) + '</a>';
          if (r.note) {
            html += '<div style="font-size:12px;color:var(--ink-muted);margin-top:3px;margin-left:54px;">' + escapeHtml(r.note) + '</div>';
          }
          html += '</li>';
        });
        html += '</ul>';
        html += '</div>';
      });
    }

    body.innerHTML = html;
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    var modal = document.getElementById("drilldown-modal");
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------- Modal HTML scaffold ----------
  function injectModalScaffold() {
    if (document.getElementById("drilldown-modal")) return;
    var modal = document.createElement("div");
    modal.id = "drilldown-modal";
    modal.className = "modal-backdrop";
    modal.setAttribute("hidden", "");
    modal.innerHTML =
      '<div class="modal-panel" role="dialog" aria-modal="true">' +
        '<div class="modal-tabs">' +
          '<a class="sheet-tab" href="#" data-action="back"><span class="icon">📊</span> Sheet 1: MDE Standards Matrix</a>' +
          '<span class="sheet-tab active"><span class="icon">📋</span> Sheet 2: <span id="modal-tab-label">Detail</span></span>' +
          '<button class="modal-close" aria-label="Close" data-action="close">×</button>' +
        '</div>' +
        '<div class="modal-header">' +
          '<div class="breadcrumb" id="modal-breadcrumb"></div>' +
          '<h2 id="modal-title">Detail</h2>' +
          '<div class="subhead" id="modal-subhead"></div>' +
          '<div class="meta-row" id="modal-meta"></div>' +
        '</div>' +
        '<div class="modal-body" id="modal-body"></div>' +
      '</div>';
    document.body.appendChild(modal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
      var action = e.target.getAttribute("data-action");
      if (action === "close" || action === "back") {
        e.preventDefault();
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", function () {
    var subject = pageSubject();
    if (!subject) return;

    injectModalScaffold();

    var tables = document.querySelectorAll("table.filterable");
    tables.forEach(function (t) {
      injectSheetTabs(t);
      transformTable(t, subject);
    });
  });

})();
