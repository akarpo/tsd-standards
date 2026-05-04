// static-modal.js — Lightweight row-click modal for static-table pages
// (science.html, economics.html, computer-science.html).
//
// These pages ship pre-rendered tables (no app.js transform) but still
// want the same "click anywhere in the row → see expanded standard
// detail + full resource library" UX as math/ELA. This script:
//
//   1. Injects a modal scaffold (uses the same .modal-backdrop CSS that
//      math/ELA already use, so visual styling is consistent).
//   2. Walks every <tr> in <table> elements, marks those that have a
//      first-cell .domain-cell as drillable, attaches a row-level click
//      handler that lifts the row's contents into the modal.
//
// No external data — the modal content is derived directly from the
// row's existing cells, presented in an expanded form.

(function () {
  "use strict";

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function injectModal() {
    if (document.getElementById("static-modal")) return;
    var modal = document.createElement("div");
    modal.id = "static-modal";
    modal.className = "modal-backdrop";
    modal.setAttribute("hidden", "");
    modal.innerHTML =
      '<div class="modal-panel" role="dialog" aria-modal="true">' +
        '<div class="modal-tabs">' +
          '<a class="sheet-tab" href="#" data-action="back"><span class="icon">📊</span> Back to matrix</a>' +
          '<span class="sheet-tab active"><span class="icon">📋</span> Standard detail · expanded view</span>' +
          '<button class="modal-close" aria-label="Close" data-action="close">×</button>' +
        '</div>' +
        '<div class="modal-header">' +
          '<div class="breadcrumb" id="sm-breadcrumb"></div>' +
          '<h2 id="sm-title">Detail</h2>' +
          '<div class="subhead" id="sm-subhead"></div>' +
        '</div>' +
        '<div class="modal-body" id="sm-body"></div>' +
      '</div>';
    document.body.appendChild(modal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) close();
      var action = e.target.getAttribute && e.target.getAttribute("data-action");
      if (action === "close" || action === "back") {
        e.preventDefault();
        close();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function close() {
    var modal = document.getElementById("static-modal");
    if (modal) {
      modal.setAttribute("hidden", "");
      document.body.style.overflow = "";
    }
  }

  function openFromRow(row, sectionTitle) {
    var modal = document.getElementById("static-modal");
    if (!modal) return;
    var body = document.getElementById("sm-body");
    var title = document.getElementById("sm-title");
    var subhead = document.getElementById("sm-subhead");
    var breadcrumb = document.getElementById("sm-breadcrumb");

    var cells = row.querySelectorAll("td");
    if (cells.length < 4) return;

    var domainCell    = cells[0];
    var standardsCell = cells[1];
    var skillsCell    = cells[2];
    var resourcesCell = cells[3];
    var troyCell      = cells[4];
    var apCell        = cells[5];

    // Pull a clean title from the domain cell (strip <small>)
    var titleClone = domainCell.cloneNode(true);
    var smallEl = titleClone.querySelector("small");
    var subText = "";
    if (smallEl) {
      subText = smallEl.textContent.trim();
      smallEl.remove();
    }
    var domainText = titleClone.textContent.trim();

    breadcrumb.textContent = sectionTitle + " · " + domainText + (subText ? " — " + subText : "");
    title.textContent = domainText + (subText ? " — " + subText : "");
    subhead.textContent = sectionTitle;

    var html = '';

    // ----- MDE Standards -----
    html += '<h3 style="color:var(--ink);margin-top:8px;">MDE Standards in this domain</h3>';
    html += '<div class="overlap-row"><div class="std-text">' +
            standardsCell.innerHTML + '</div></div>';

    // ----- Skills (expanded) -----
    html += '<h3 style="color:var(--ink);margin-top:24px;">Skills · what students learn</h3>';
    html += '<div style="font-size:14px;line-height:1.6;color:var(--ink);padding:14px 16px;background:#fafbfc;border-left:3px solid var(--accent);border-radius:0 6px 6px 0;">' +
            skillsCell.innerHTML + '</div>';

    // ----- Free Resources (full library, regrouped if possible) -----
    html += '<h3 style="color:var(--ink);margin-top:24px;">Free skill-building resources for this domain</h3>';
    html += '<p style="font-size:13px;color:var(--ink-soft);margin:0 0 12px;">Curated free or open resources aligned to the MDE standards above. Includes the AP Course & Exam Description, Pre-AP framework, free open textbooks, and self-directed-learning workbooks.</p>';
    html += renderResources(resourcesCell);

    // ----- Troy SD Curriculum -----
    if (troyCell) {
      html += '<h3 style="color:var(--ink);margin-top:24px;">Troy SD curriculum</h3>';
      html += '<div style="font-size:13px;color:var(--ink-soft);padding:10px 14px;background:#f5f6f8;border:1px solid var(--line);border-radius:6px;">' +
              troyCell.innerHTML + '</div>';
    }

    // ----- AP Coverage -----
    if (apCell) {
      html += '<h3 style="color:var(--ink);margin-top:24px;">AP coverage</h3>';
      html += '<div style="font-size:13.5px;color:var(--ink);padding:10px 14px;background:#fff8eb;border:1px solid #fde68a;border-radius:6px;">' +
              apCell.innerHTML + '</div>';
    }

    body.innerHTML = html;
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  // Re-render a resource list, grouped by badge type (★Top, Khan, Course,
  // Video, Practice, Tool, Text, Data, OCW). Each <li> is preserved.
  function renderResources(resourcesCell) {
    var lis = resourcesCell.querySelectorAll("li");
    if (!lis.length) {
      return '<div class="note-text">No resources listed for this row.</div>';
    }
    var groups = {};
    var groupOrder = [];
    var GROUP_LABEL = {
      "★Top": "Top picks",
      "khan": "Khan Academy",
      "video": "Video lessons",
      "course": "Open courseware & textbooks",
      "ocw": "Open courseware & textbooks",
      "practice": "Problems & practice",
      "tool": "Interactive tools",
      "text": "Texts & libraries",
      "data": "Datasets",
      "free": "Other free resources"
    };
    Array.prototype.forEach.call(lis, function (li) {
      var badge = li.querySelector(".rb");
      var key = "free";
      if (badge) {
        var cls = badge.className || "";
        var labelText = badge.textContent.trim();
        if (labelText === "★Top") key = "★Top";
        else if (cls.indexOf("rb-khan") > -1) key = "khan";
        else if (cls.indexOf("rb-video") > -1) key = "video";
        else if (cls.indexOf("rb-course") > -1) key = "course";
        else if (cls.indexOf("rb-ocw") > -1) key = "ocw";
        else if (cls.indexOf("rb-prac") > -1) key = "practice";
        else if (cls.indexOf("rb-tool") > -1) key = "tool";
        else if (cls.indexOf("rb-text") > -1) key = "text";
        else if (cls.indexOf("rb-data") > -1) key = "data";
      }
      if (!groups[key]) {
        groups[key] = [];
        groupOrder.push(key);
      }
      groups[key].push(li);
    });

    // Order groups: ★Top first, then Course/OCW, Khan, Video, Practice,
    // Tool, Text, Data, Free.
    var preferredOrder = ["★Top", "course", "ocw", "khan", "video", "practice", "tool", "text", "data", "free"];
    groupOrder.sort(function (a, b) {
      return preferredOrder.indexOf(a) - preferredOrder.indexOf(b);
    });

    var html = '';
    groupOrder.forEach(function (key) {
      var label = GROUP_LABEL[key] || "Resources";
      var members = groups[key];
      html += '<div style="margin-bottom:18px;">';
      html += '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--ink-muted);margin-bottom:8px;">' + escapeHtml(label) + ' (' + members.length + ')</div>';
      html += '<ul style="list-style:none;margin:0;padding:0;">';
      members.forEach(function (li) {
        html += '<li style="padding:9px 12px;border-left:2px solid var(--line);margin-bottom:5px;background:#fafbfc;border-radius:0 4px 4px 0;font-size:13px;line-height:1.5;">' + li.innerHTML + '</li>';
      });
      html += '</ul>';
      html += '</div>';
    });
    return html;
  }

  // Wire up — find every table row whose first cell has class
  // "domain-cell" and make the row clickable.
  function init() {
    injectModal();
    var rows = document.querySelectorAll("table tbody tr");
    rows.forEach(function (row) {
      var first = row.querySelector("td");
      if (!first || !first.classList || !first.classList.contains("domain-cell")) return;
      // Don't double-wire rows that already use the math/ELA app.js handler.
      if (row.classList.contains("row-drillable")) return;

      // Determine section title from the enclosing <section> (or fall back).
      var section = row.closest("section");
      var sectionTitle = "Detail";
      if (section) {
        var h = section.querySelector("h2");
        if (h) sectionTitle = h.textContent.trim();
      }

      row.classList.add("row-drillable");
      row.setAttribute("title", "Click anywhere in this row for the expanded standard detail + full resource library");
      row.addEventListener("click", function (e) {
        // Allow link clicks inside the resources cell to navigate normally.
        if (e.target && e.target.closest && e.target.closest("a")) return;
        openFromRow(row, sectionTitle);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
