// Minimal JS for StripTKS hub - sticky bar dismissal + accessibility
(function() {
  var STORAGE_KEY = 'striptks_sticky_dismissed_v1';
  var bar = document.getElementById('stickyBar');
  var closeBtn = document.getElementById('stickyClose');

  function hideBar() {
    if (!bar) return;
    bar.classList.add('hidden');
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch(e) {}
  }

  function shouldHide() {
    try { return localStorage.getItem(STORAGE_KEY) === '1'; } catch(e) { return false; }
  }

  if (bar) {
    if (shouldHide()) {
      bar.classList.add('hidden');
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', hideBar);
    }
    // Allow ESC to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && bar && !bar.classList.contains('hidden')) {
        hideBar();
        if (closeBtn) closeBtn.focus();
      }
    });
  }

  // External links safety: ensure sponsored links have proper rel (progressive enhancement)
  var sponsored = document.querySelectorAll('a[href*="striptks.live"], a[href*="striptokens.live"], a[href*="stripfreetokens.com"]');
  sponsored.forEach(function(a) {
    var rel = (a.getAttribute('rel') || '').toLowerCase();
    if (!rel.includes('nofollow') || !rel.includes('sponsored')) {
      // Do not override if already set correctly, but ensure noopener
      var parts = rel.split(' ').filter(Boolean);
      if (!parts.includes('nofollow')) parts.push('nofollow');
      if (!parts.includes('sponsored')) parts.push('sponsored');
      if (!parts.includes('noopener')) parts.push('noopener');
      a.setAttribute('rel', parts.join(' '));
    }
    // If link is to external domain, open in new tab only if marked commercial
    if (a.classList.contains('sticky-link')) {
      a.setAttribute('target', '_blank');
    }
  });
})();
