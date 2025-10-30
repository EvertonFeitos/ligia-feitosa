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

  function variantClass(variant) {
    switch ((variant || "").toLowerCase()) {
      case "primary": return "link-variant-primary";
      case "danger": return "link-variant-danger";
      case "outline": return "link-variant-outline";
      default: return "link-variant-outline";
    }
  }

  function createLinkItem(link) {
    const a = document.createElement("a");
    const variant = variantClass(link.variant);
    a.className = `link-item ${variant}`;
    a.href = link.href || "#";
    if (!a.href.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noopener";
    }

    const inner = document.createElement("div");
    inner.className = "d-flex align-items-center";

    const icon = document.createElement("i");
    icon.className = `${link.iconClass || "fa fa-link"} fa-fw me-3`;
    inner.appendChild(icon);

    const txt = document.createElement("div");
    txt.className = "text-start";

    const title = document.createElement("div");
    title.className = "fw-bold";
    title.textContent = link.title || "Sem título";
    const subtitle = document.createElement("small");
    subtitle.textContent = link.subtitle || "";
    txt.appendChild(title);
    txt.appendChild(subtitle);
    inner.appendChild(txt);

    a.appendChild(inner);
    return a;
  }

  // Preenche o container
  linksContainer.innerHTML = "";
  list.forEach(item => {
    try {
      linksContainer.appendChild(createLinkItem(item));
    } catch (err) {
      console.error("Erro ao criar link:", err, item);
    }
  });

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