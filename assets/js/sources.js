/* ═══════════════════════════════════
   sources.js — Learning Sources
   ═══════════════════════════════════ */

function renderSources() {
  const container = document.getElementById('sourcesContent');
  if (!container) return;

  container.innerHTML = Object.entries(SOURCES_DATA).map(([category, items]) => `
    <div class="sources-category">
      <div class="sources-category-title">
        ${getCategoryIcon(category)} ${category}
      </div>
      <div class="sources-list">
        ${items.map(src => `
          <div class="source-item">
            <span class="source-icon">${src.icon}</span>
            <div>
              <div class="source-name">${src.name}</div>
              <div class="source-desc">${src.desc}</div>
              <a class="source-link" href="${src.url}" target="_blank">Visit ↗</a>
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

function getCategoryIcon(cat) {
  const icons = {
    "Standards & Technical Bodies": "📐",
    "OEM & Supplier Tech Blogs": "🏭",
    "EV & Automotive Publications": "📰",
    "Learning Platforms": "🎓",
    "German-Specific Resources": "🇩🇪"
  };
  return icons[cat] || "🔗";
}
