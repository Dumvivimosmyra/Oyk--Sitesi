// script.js

// Aydınlık ve karanlık modu ayarlamak için butonu seçiyoruz
const themeToggle = document.getElementById('theme-toggle');

// Sayfanın body öğesi
const body = document.body;

// Kullanıcının tercihini kontrol etmek için bir işlev
function toggleTheme() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
}

// Kullanıcının daha önceki temasını kontrol edelim
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Butona tıklandığında tema değiştir
themeToggle.addEventListener('click', toggleTheme);

