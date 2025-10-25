---
layout: default
title: Estoniyada Yaşamaq Bələdçisi
---
{% include theme-toggle.html %}

<style>
/* 🌙 Dark mode default */
:root {
  --bg-color: #0d1117;
  --text-color: #e6edf3;
  --link-color: #58a6ff;
}
[data-theme='light'] {
  --bg-color: #ffffff;
  --text-color: #24292f;
  --link-color: #0969da;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}
a {
  color: var(--link-color);
}
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: 1px solid var(--link-color);
  border-radius: 8px;
  padding: 4px 8px;
  color: var(--link-color);
  cursor: pointer;
  font-size: 1rem;
}
.theme-toggle:hover {
  opacity: 0.8;
}
h1, h2, h3 {
  color: var(--text-color);
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1rem;
  transition: background 0.3s ease, transform 0.2s;
}
[data-theme='light'] .card {
  background: #f7f7f7;
  border-color: #ddd;
}
.card:hover {
  transform: scale(1.02);
}
</style>

<button class="theme-toggle" onclick="toggleTheme()">🌙</button>
<script>
  const root = document.documentElement;
  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    if (current === 'light') {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      document.querySelector('.theme-toggle').textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      document.querySelector('.theme-toggle').textContent = '☀️';
    }
  }
  // Default dark mode
  if (localStorage.getItem('theme') === 'light') {
    root.setAttribute('data-theme', 'light');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
</script>

# 🇪🇪 Estoniyada Yaşamaq Bələdçisi

> Azərbaycanlı icması üçün Estoniyada həyat, alış-veriş, gəzinti və gündəlik faydalı məlumatlar.

---

## 📘 Bölmələr

<div class="card-grid">
  <div class="card">
    <h3>🛒 <a href="./marketler.html">Marketlər və Mağazalar</a></h3>
    <p>Fiziki və onlayn alış-veriş, türk məhsulları, elektronika və ərzaq linkləri.</p>
  </div>

  <div class="card">
    <h3>🌿 <a href="./gezinti.html">Gəziləcək və Görüləcək Yerlər</a></h3>
    <p>Ailəvi istirahət, muzeylər, restoranlar, parklar və bölgə səfərləri üçün təlimat.</p>
  </div>

  <div class="card">
    <h3>📄 <a href="./qanunlar.html">Qanunlar və Yaşayış</a></h3>
    <p>Viza, oturum icazəsi, səhiyyə və gündəlik həyat qaydaları barədə məlumatlar.</p>
  </div>

  <div class="card">
    <h3>📬 Əlaqə və Tövhə</h3>
    <p>Yeni məlumat və ya təklif əlavə etmək istəyirsənsə, <a href="https://github.com/sabuhis/estonia-guide/issues">buradan</a> paylaş.</p>
  </div>
</div>

---


### 💬 Haqqında

Bu sayt Estoniyaya yeni köçən azərbaycanlılar üçün təcrübə, məlumat və faydalı linklərin toplandığı könüllü layihədir.  

