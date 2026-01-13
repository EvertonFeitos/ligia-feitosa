// script.js - renderiza a lista de links usando window.LINKS
document.addEventListener("DOMContentLoaded", function () {
  const linksContainer = document.getElementById("linksList");
  if (!linksContainer) {
    console.error("Elemento #linksList não encontrado no DOM.");
    return;
  }

  const list = window.LINKS || [];
  if (!list.length) {
    console.warn("window.LINKS não está definido ou está vazio. Verifique js/links.js foi carregado.");
  }

  // Preenche o container
  linksContainer.innerHTML = "";
  list.forEach(item => {
    try {
      linksContainer.appendChild(window.createLinkItem(item));
    } catch (err) {
      console.error("Erro ao criar link:", err, item);
    }
  });

  // Assegura semântica de navegação
  if (!linksContainer.getAttribute("role")) {
    linksContainer.setAttribute("role", "navigation");
    linksContainer.setAttribute("aria-label", "Principais links");
  }

  // Copiar link do perfil
  const copyBtn = document.getElementById("copyProfile");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyBtn.innerHTML = '<i class="fa fa-check me-1"></i> Copiado';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa fa-link me-1"></i> Copiar link';
        }, 2000);
      } catch (err) {
        console.error("Falha ao copiar:", err);
      }
    });
  }

  // Theme toggle (apenas demonstração)
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("alt-theme");
      const icon = themeToggle.querySelector("i");
      if (icon) icon.classList.toggle("fa-sun");
    });
  }
});