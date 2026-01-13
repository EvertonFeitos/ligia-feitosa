// NOTA: Este arquivo não está sendo usado no layout atual (2026-01-13)
// O layout atual não renderiza produtos dinamicamente.
//
// render-products.js - insere uma seção de "Produtos em destaque" acima do link ACHADINHOS
(function () {
  function createProductCard(p) {
    const art = document.createElement('article');
    art.className = 'product-card';

    // Imagem
    const imgWrap = document.createElement('div');
    imgWrap.className = 'product-image';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = p.title || 'Produto';
    img.src = p.image || 'img/produtos/placeholder.jpg';
    imgWrap.appendChild(img);

    // Conteúdo
    const content = document.createElement('div');
    content.className = 'product-content';

    const h3 = document.createElement('h3');
    h3.className = 'product-title';
    h3.textContent = p.title || 'Produto';

    const desc = document.createElement('p');
    desc.className = 'product-desc';
    desc.textContent = p.description || '';

    const pitch = document.createElement('div');
    pitch.className = 'product-pitch';
    pitch.textContent = p.pitch || '';

    // Marketplace + botão
    const actions = document.createElement('div');
    actions.className = 'product-actions';

    const market = document.createElement('div');
    market.className = 'product-market';
    if (p.marketplace && (p.marketplace.icon || p.marketplace.name)) {
      if (p.marketplace.icon) {
        const mkImg = document.createElement('img');
        mkImg.src = p.marketplace.icon;
        mkImg.alt = p.marketplace.name || 'Marketplace';
        mkImg.className = 'market-icon';
        market.appendChild(mkImg);
      }
      if (p.marketplace.name) {
        const mkName = document.createElement('span');
        mkName.textContent = p.marketplace.name;
        market.appendChild(mkName);
      }
    }

    const btn = document.createElement('a');
    btn.className = 'btn btn-sm btn-light product-btn';
    btn.href = p.affiliateUrl || '#';
    if (!btn.href.startsWith('mailto:')) {
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    }
    const mkName = (p.marketplace && p.marketplace.name) ? ` no ${p.marketplace.name}` : '';
    btn.setAttribute('aria-label', `Ver na loja — ${p.title || 'Produto'}${mkName}`);
    btn.innerHTML = '<i class="fa fa-cart-shopping me-1" aria-hidden="true"></i> Ver na loja';

    actions.appendChild(market);
    actions.appendChild(btn);

    content.appendChild(h3);
    content.appendChild(desc);
    if (p.pitch) content.appendChild(pitch);
    content.appendChild(actions);

    art.appendChild(imgWrap);
    art.appendChild(content);
    art.setAttribute('role', 'listitem');
    return art;
  }

  function renderFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    const linksContainer = document.getElementById('linksList');
    if (!featuredContainer && !linksContainer) return;

    const data = (window.PRODUCTS_BY_CATEGORY && window.PRODUCTS_BY_CATEGORY.destaque) || [];
    const products = data.slice(0, 2); // apenas dois produtos na home
    if (!products.length) return; // nada para renderizar

  const section = document.createElement('section');
  section.className = 'product-section';
  section.setAttribute('role', 'region');

  const title = document.createElement('h2');
  title.className = 'product-section-title';
  title.id = 'featuredProductsTitle';
  title.innerHTML = '<i class="fa fa-star me-2" aria-hidden="true"></i>Produtos em destaque';
  section.setAttribute('aria-labelledby', title.id);

  const grid = document.createElement('div');
  grid.className = 'product-grid';
  grid.setAttribute('role', 'list');

    products.forEach(p => grid.appendChild(createProductCard(p)));

    section.appendChild(title);
    section.appendChild(grid);

    // Inserir no espaço dedicado acima da lista; fallback: topo de links
    if (featuredContainer) {
      featuredContainer.innerHTML = '';
      featuredContainer.appendChild(section);
    } else if (linksContainer) {
      linksContainer.prepend(section);
    }
  }

  // Aguardar o carregamento da lista de links (script.js) finalizar o DOMContentLoaded
  // Como este arquivo é incluído DEPOIS de js/script.js no HTML, basta chamar diretamente.
  try {
    renderFeaturedProducts();
  } catch (err) {
    console.error('Falha ao renderizar produtos:', err);
  }
})();
