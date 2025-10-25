(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.setAttribute('data-theme', 'light');

  function setIcon() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.textContent = root.getAttribute('data-theme') === 'light' ? '☀️' : '🌙';
  }

  window.toggleTheme = function() {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    setIcon();
  }

  document.addEventListener('DOMContentLoaded', setIcon);
})();
