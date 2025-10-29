// script.js - interações simples:
// - Copiar link do perfil
// - Alternar tema (localStorage)
// - Contabilizar clicks em cada link (localStorage) e mostrar contadores

document.addEventListener('DOMContentLoaded', () => {
  const profileUrl = 'https://www.instagram.com/ligia.feitos/';
  const copyBtn = document.getElementById('copyProfile');
  const igBtn = document.getElementById('igBtn');
  const themeToggle = document.getElementById('themeToggle');
  const clickBadges = document.querySelectorAll('.click-count');

  // Inicializar contadores a partir do localStorage
  clickBadges.forEach(b => {
    const key = 'linkClicks:' + b.dataset.key;
    const count = parseInt(localStorage.getItem(key) || '0', 10);
    b.textContent = count;
  });

  // Ao clicar em qualquer link .link-item incrementar contador
  document.querySelectorAll('.link-item').forEach(el => {
    el.addEventListener('click', (e) => {
      // registra apenas quando o usuário abre o link (clicou no elemento). Se preferir, pode detectar target="_blank" etc.
      const badge = el.querySelector('.click-count');
      if (!badge) return;
      const key = 'linkClicks:' + badge.dataset.key;
      const prev = parseInt(localStorage.getItem(key) || '0', 10);
      const next = prev + 1;
      localStorage.setItem(key, String(next));
      badge.textContent = next;
      // deixa que o link abra normalmente
    });
  });

  // Copiar link do perfil
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      copyBtn.innerHTML = '<i class="fa fa-check"></i> Copiado';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa fa-link me-1"></i> Copiar link';
      }, 1500);
    } catch (err) {
      // fallback
      const input = document.createElement('input');
      input.value = profileUrl;
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand('copy');
        copyBtn.innerHTML = '<i class="fa fa-check"></i> Copiado';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa fa-link me-1"></i> Copiar link';
        }, 1500);
      } finally {
        document.body.removeChild(input);
      }
    }
  });

  // Tema (light / dark)
  const savedTheme = localStorage.getItem('siteTheme');
  if (savedTheme === 'dark') document.body.classList.add('dark');

  function updateThemeIcon() {
    if (document.body.classList.contains('dark')) {
      themeToggle.innerHTML = '<i class="fa fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fa fa-moon"></i>';
    }
  }
  updateThemeIcon();

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('siteTheme', isDark ? 'dark' : 'light');
    updateThemeIcon();
  });

  // Se desejar, você pode alterar o avatar dinamicamente:
  // document.getElementById('avatar').src = 'https://instagram.faru5-1.fna.fbcdn.net/v/t51.2885-19/541267834_18527714665014623_9085116952968531976_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.faru5-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QFMUv7ttIKVy5q6IFX11CEVroVjwTI4h1gVKtlp05YCOX4wenp3V0Z492GpiiGzOnc&_nc_ohc=0REVR-sLySIQ7kNvwHUvD0h&_nc_gid=1xF14UmwPD7qsNvh8cp7EQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afd5aAmv4LjqwOLLRpTCGFn4l8U5gDjtSxTXTqQJZDE73w&oe=69080D48&_nc_sid=8b3546';
});