// utils.js - Funções utilitárias compartilhadas

// Retorna a classe CSS apropriada para a variante de link
window.variantClass = function(variant) {
  switch ((variant || "").toLowerCase()) {
    case "primary": return "link-variant-primary";
    case "danger": return "link-variant-danger";
    case "outline": return "link-variant-outline";
    default: return "link-variant-outline";
  }
};

// Cria um elemento de link com ícone, título e subtítulo
window.createLinkItem = function(link) {
  const a = document.createElement("a");
  const variant = window.variantClass(link.variant);
  a.className = `link-item ${variant}`;
  a.href = link.href || "#";
  if (!a.href.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  // Nome acessível do link
  const labelTitle = link.title || "Sem título";
  const labelSub = link.subtitle ? ` — ${link.subtitle}` : "";
  a.setAttribute("aria-label", `${labelTitle}${labelSub}`);

  const inner = document.createElement("div");
  inner.className = "d-flex align-items-center";

  const icon = document.createElement("i");
  icon.className = `${link.iconClass || "fa fa-link"} fa-fw me-3`;
  icon.setAttribute("aria-hidden", "true");
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
};
