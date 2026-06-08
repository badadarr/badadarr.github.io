/**
 * dev-log.js
 * Fetches data/dev-log.json and renders the Dev Journal section.
 */

(function () {
  const BASE_PATH = (() => {
    // Determine base URL regardless of deploy path
    const scripts = document.querySelectorAll('script[src]');
    for (const s of scripts) {
      const src = s.getAttribute('src') || '';
      if (src.includes('dev-log.js')) {
        return src.replace(/script\/dev-log\.js.*$/, '');
      }
    }
    return '';
  })();

  const MAX_ENTRIES = 7; // how many to show in the timeline

  // Tag colour map — maps tag names to accent colours
  const TAG_COLORS = {
    Setup:         { color: '#58a6ff', bg: 'rgba(88,166,255,0.12)'  },
    Learning:      { color: '#d2a8ff', bg: 'rgba(210,168,255,0.12)' },
    Git:           { color: '#ffa657', bg: 'rgba(255,166,87,0.12)'  },
    Backend:       { color: '#79c0ff', bg: 'rgba(121,192,255,0.12)' },
    Frontend:      { color: '#56d364', bg: 'rgba(86,211,100,0.12)'  },
    Database:      { color: '#e3b341', bg: 'rgba(227,179,65,0.12)'  },
    DevOps:        { color: '#ff7b72', bg: 'rgba(255,123,114,0.12)' },
    Architecture:  { color: '#d2a8ff', bg: 'rgba(210,168,255,0.12)' },
    Testing:       { color: '#56d364', bg: 'rgba(86,211,100,0.12)'  },
    Security:      { color: '#ff7b72', bg: 'rgba(255,123,114,0.12)' },
    Performance:   { color: '#e3b341', bg: 'rgba(227,179,65,0.12)'  },
    DSA:           { color: '#79c0ff', bg: 'rgba(121,192,255,0.12)' },
    Mindset:       { color: '#ffa657', bg: 'rgba(255,166,87,0.12)'  },
    Reflection:    { color: '#d2a8ff', bg: 'rgba(210,168,255,0.12)' },
    'Best Practices': { color: '#56d364', bg: 'rgba(86,211,100,0.12)' },
    // Additional tags used in the journal
    UI:            { color: '#79c0ff', bg: 'rgba(121,192,255,0.12)' },
    Node:          { color: '#56d364', bg: 'rgba(86,211,100,0.12)'  },
    Bugfix:        { color: '#ff7b72', bg: 'rgba(255,123,114,0.12)' },
    Refactor:      { color: '#ffa657', bg: 'rgba(255,166,87,0.12)'  },
    Maintenance:   { color: '#8b949e', bg: 'rgba(139,148,158,0.12)' },
    Documentation: { color: '#e3b341', bg: 'rgba(227,179,65,0.12)'  },
    'Clean Code':  { color: '#56d364', bg: 'rgba(86,211,100,0.12)'  },
    Productivity:  { color: '#58a6ff', bg: 'rgba(88,166,255,0.12)'  },
    Planning:      { color: '#d2a8ff', bg: 'rgba(210,168,255,0.12)' },
    Flutter:       { color: '#79c0ff', bg: 'rgba(121,192,255,0.12)' },
    Laravel:       { color: '#ff7b72', bg: 'rgba(255,123,114,0.12)' },
    AI:            { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  };

  function formatDate(dateStr) {
    // dateStr is 'YYYY-MM-DD'
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function buildEntryHTML(entry, isLatest) {
    const tagStyle = TAG_COLORS[entry.tag] || { color: 'rgba(255,255,255,0.5)', bg: 'rgba(255,255,255,0.06)' };
    const latestClass = isLatest ? ' dj-latest' : '';

    const typeIcon = entry.type === 'manual' ? 'fa-user-edit' : 'fa-robot';
    const typeLabel = entry.type === 'manual' ? 'Manual' : 'System';
    const duration = entry.duration || 'N/A';
    const sourceIcon = entry.source === 'github-actions' ? 'fab fa-github' : 'fas fa-laptop-code';

    return `
      <div class="dj-entry${latestClass}" data-aos="fade-left" data-aos-delay="${isLatest ? 0 : 50}">
        <div class="dj-entry-header">
          <span class="dj-day-badge">Day ${entry.day}</span>
          <span class="dj-date">${formatDate(entry.date)}</span>
          <div class="dj-meta-badges">
            <span class="dj-meta-badge"><i class="fas fa-clock"></i> ${duration}</span>
            <span class="dj-meta-badge"><i class="fas ${typeIcon}"></i> ${typeLabel}</span>
            <span class="dj-meta-badge"><i class="${sourceIcon}"></i></span>
            <span class="dj-tag" style="color:${tagStyle.color};background:${tagStyle.bg};border-color:${tagStyle.color}40">${entry.tag}</span>
          </div>
        </div>
        <p class="dj-note">${entry.note}</p>
      </div>
    `;
  }

  function renderInsights(logs) {
    const tagCounts = {};
    const typeCounts = { auto: 0, manual: 0 };

    logs.forEach(log => {
      // Tags
      if (log.tag) {
        tagCounts[log.tag] = (tagCounts[log.tag] || 0) + 1;
      }
      // Types
      if (log.type === 'manual') typeCounts.manual++;
      else typeCounts.auto++;
    });

    // Sort top tags
    const sortedTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5); // top 5

    // Render type stats
    const typeStatsContainer = document.getElementById('dj-type-stats');
    if (typeStatsContainer) {
      const autoPercent = Math.round((typeCounts.auto / logs.length) * 100) || 0;
      const manualPercent = Math.round((typeCounts.manual / logs.length) * 100) || 0;

      typeStatsContainer.innerHTML = `
        <div class="dj-type-stat">
          <span><i class="fas fa-robot" style="color: #58a6ff"></i> Automated</span>
          <span>${autoPercent}% (${typeCounts.auto})</span>
        </div>
        <div class="dj-type-stat">
          <span><i class="fas fa-user-edit" style="color: #3fb950"></i> Manual Log</span>
          <span>${manualPercent}% (${typeCounts.manual})</span>
        </div>
      `;
    }

    // Render top tags
    const topTagsContainer = document.getElementById('dj-top-tags');
    if (topTagsContainer) {
      topTagsContainer.innerHTML = sortedTags.map(([tag, count]) => {
        const style = TAG_COLORS[tag] || { color: '#8b949e' };
        return `
          <li class="dj-tag-stat">
            <span style="color: ${style.color}; display: flex; align-items: center; gap: 8px;">
              <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${style.color}"></span>
              ${tag}
            </span>
            <span class="dj-tag-count">${count}</span>
          </li>
        `;
      }).join('');
    }
  }

  async function initDevJournal() {
    const timeline  = document.getElementById('dj-timeline');
    const totalEl   = document.getElementById('dj-total-days');
    const updatedEl = document.getElementById('dj-last-updated');

    if (!timeline) return; // section not on this page

    try {
      const res = await fetch(`${BASE_PATH}data/dev-log.json?v=${Date.now()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const allLogs = data.logs || [];
      const logsDesc = allLogs.slice().reverse(); // newest first
      const shown = logsDesc.slice(0, MAX_ENTRIES);

      // Update stats
      if (totalEl) totalEl.textContent = data.total_days ?? allLogs.length;
      if (updatedEl && data.last_updated) updatedEl.textContent = formatDate(data.last_updated);

      // Render timeline
      timeline.innerHTML = shown
        .map((entry, i) => buildEntryHTML(entry, i === 0))
        .join('');

      // Render Insights
      renderInsights(allLogs);

      // Re-init AOS on new elements (in case AOS already ran)
      if (typeof AOS !== 'undefined') AOS.refreshHard();

    } catch (err) {
      console.warn('[dev-log.js] Could not load dev log:', err);
      timeline.innerHTML = `
        <div class="dj-loading" style="color:rgba(255,123,114,0.7)">
          <i class="fas fa-exclamation-circle" style="font-size:1rem"></i>
          <span>Could not load journal data.</span>
        </div>`;
    }
  }

  // Run after sections are injected by page-loader
  document.addEventListener('sectionsLoaded', initDevJournal);
  // Fallback: if section is already present in DOM
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('dj-timeline')) initDevJournal();
  });
})();
