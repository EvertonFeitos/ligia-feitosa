// render-products.js - renderiza seção do ebook, carrossel de produtos e links de e-mail
(function () {
  // Renderiza a seção do ebook em destaque
  function renderEbookSection() {
    const ebookContainer = document.getElementById('ebookSection');
    if (!ebookContainer || !window.EBOOK) return;

    const ebook = window.EBOOK;
    const section = document.createElement('div');
    section.className = 'ebook-section';

    const a = document.createElement('a');
    a.className = 'ebook-link';
    a.href = ebook.href || '#';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', `${ebook.title} — ${ebook.description}`);

    const content = document.createElement('div');
    content.className = 'ebook-content';

    const icon = document.createElement('i');
    icon.className = `${ebook.iconClass || 'fa fa-book'} ebook-icon`;
    icon.setAttribute('aria-hidden', 'true');

    const textWrapper = document.createElement('div');
    textWrapper.className = 'ebook-text';

    const title = document.createElement('div');
    title.className = 'ebook-title';
    title.textContent = ebook.title || '';

    const subtitle = document.createElement('div');
    subtitle.className = 'ebook-subtitle';
    subtitle.textContent = ebook.subtitle || '';

    const description = document.createElement('div');
    description.className = 'ebook-description';
    description.textContent = ebook.description || '';

    textWrapper.appendChild(title);
    textWrapper.appendChild(subtitle);
    textWrapper.appendChild(description);

    content.appendChild(icon);
    content.appendChild(textWrapper);
    a.appendChild(content);
    section.appendChild(a);

    ebookContainer.appendChild(section);
  }

  // Cria um card de produto para o carrossel
  function createProductCard(p) {
    const art = document.createElement('article');
    art.className = 'carousel-product-card';

    // Imagem
    const imgWrap = document.createElement('div');
    imgWrap.className = 'carousel-product-image';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = p.title || 'Produto';
    img.src = p.image || 'img/produtos/placeholder.jpg';
    imgWrap.appendChild(img);

    // Conteúdo
    const content = document.createElement('div');
    content.className = 'carousel-product-content';

    const h3 = document.createElement('h3');
    h3.className = 'carousel-product-title';
    h3.textContent = p.title || 'Produto';

    const desc = document.createElement('p');
    desc.className = 'carousel-product-desc';
    desc.textContent = p.description || '';

    const pitch = document.createElement('div');
    pitch.className = 'carousel-product-pitch';
    pitch.textContent = p.pitch || '';

    // Botão
    const btn = document.createElement('a');
    btn.className = 'btn btn-sm btn-light carousel-product-btn';
    btn.href = p.affiliateUrl || '#';
    if (!btn.href.startsWith('mailto:')) {
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    }
    const mkName = (p.marketplace && p.marketplace.name) ? ` no ${p.marketplace.name}` : '';
    btn.setAttribute('aria-label', `Ver na loja — ${p.title || 'Produto'}${mkName}`);
    btn.innerHTML = '<i class="fa fa-cart-shopping me-1" aria-hidden="true"></i> Ver na loja';

    content.appendChild(h3);
    content.appendChild(desc);
    if (p.pitch) content.appendChild(pitch);
    content.appendChild(btn);

    art.appendChild(imgWrap);
    art.appendChild(content);
    return art;
  }

  // Renderiza o carrossel de produtos (4 produtos)
  function renderProductsCarousel() {
    const carouselContainer = document.getElementById('productsCarousel');
    if (!carouselContainer) return;

    const data = (window.PRODUCTS_BY_CATEGORY && window.PRODUCTS_BY_CATEGORY.destaque) || [];
    const products = data.slice(0, 4); // 4 produtos no carrossel
    if (!products.length) return;

    const section = document.createElement('section');
    section.className = 'carousel-section';
    section.setAttribute('role', 'region');

    const title = document.createElement('h2');
    title.className = 'carousel-section-title';
    title.id = 'productsCarouselTitle';
    title.innerHTML = '<i class="fa fa-star me-2" aria-hidden="true"></i>Produtos Afiliados';
    section.setAttribute('aria-labelledby', title.id);

    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';

    const carousel = document.createElement('div');
    carousel.className = 'carousel-container';
    carousel.setAttribute('role', 'list');

    products.forEach(p => carousel.appendChild(createProductCard(p)));

    carouselWrapper.appendChild(carousel);
    section.appendChild(title);
    section.appendChild(carouselWrapper);

    carouselContainer.appendChild(section);
  }

  // Renderiza os links de e-mail
  function renderEmailLinks() {
    const emailContainer = document.getElementById('emailLinks');
    if (!emailContainer || !window.EMAIL_LINKS) return;

    const emails = window.EMAIL_LINKS;
    
    function variantClass(variant) {
      switch ((variant || "").toLowerCase()) {
        case "primary": return "link-variant-primary";
        case "danger": return "link-variant-danger";
        case "outline": return "link-variant-outline";
        default: return "link-variant-outline";
      }
    }

    function createEmailLink(link) {
      const a = document.createElement("a");
      const variant = variantClass(link.variant);
      a.className = `link-item ${variant}`;
      a.href = link.href || "#";
      if (!a.href.startsWith("mailto:")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
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
    }

    emails.forEach(email => emailContainer.appendChild(createEmailLink(email)));
  }

  // Executa após carregamento
  try {
    renderEbookSection();
    renderProductsCarousel();
    renderEmailLinks();
  } catch (err) {
    console.error('Falha ao renderizar componentes:', err);
  }
})();
