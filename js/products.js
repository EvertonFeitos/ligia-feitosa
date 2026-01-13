// Estrutura de produtos por categoria (pode ser reaproveitada futuramente para a página de Achadinhos)
// Edite este arquivo para adicionar/alterar produtos. Não é necessário mexer no HTML.
// Cada produto:
// {
//   id: string,
//   title: string,
//   description: string,
//   pitch: string,                // frase de destaque
//   image: string,                // caminho da imagem (ex.: 'img/produtos/airfryer.jpg')
//   marketplace: { name: string, icon?: string }, // nome + opcional ícone do marketplace
//   affiliateUrl: string          // link de afiliado para a loja
// }

window.PRODUCTS_BY_CATEGORY = {
  // Categoria que vamos usar na home (carrossel com 4 produtos)
  destaque: [
    {
      id: "p1",
      title: "Air Fryer 4L Inox",
      description: "Frita sem óleo, fácil de limpar e perfeita para receitas rápidas e saudáveis.",
      pitch: "Oferta de hoje com frete rápido!",
      image: "img/produtos/airfryer.jpg", // ajuste o caminho conforme suas imagens
      marketplace: { name: "Mercado Livre", icon: "img/marketplaces/mercado-livre.svg" },
      affiliateUrl: "https://seu-link-de-afiliado-exemplo-1"
    },
    {
      id: "p2",
      title: "Liquidificador Turbo 900W",
      description: "Potente, silencioso e ideal para vitaminas, molhos e receitas do dia a dia.",
      pitch: "Super custo-benefício!",
      image: "img/produtos/liquidificador.jpg",
      marketplace: { name: "Shopee", icon: "img/marketplaces/shopee.svg" },
      affiliateUrl: "https://seu-link-de-afiliado-exemplo-2"
    },
    {
      id: "p3",
      title: "Panela de Pressão Elétrica",
      description: "Cozinha rápido e seguro, ideal para feijão, arroz e carnes.",
      pitch: "Economize tempo na cozinha!",
      image: "img/produtos/panela.jpg",
      marketplace: { name: "Amazon", icon: "img/marketplaces/amazon.svg" },
      affiliateUrl: "https://seu-link-de-afiliado-exemplo-3"
    },
    {
      id: "p4",
      title: "Mixer Portátil 500W",
      description: "Prático e versátil para sopas, shakes e muito mais.",
      pitch: "Compacto e potente!",
      image: "img/produtos/mixer.jpg",
      marketplace: { name: "Mercado Livre", icon: "img/marketplaces/mercado-livre.svg" },
      affiliateUrl: "https://seu-link-de-afiliado-exemplo-4"
    }
  ],

  // Exemplos de categorias futuras (não utilizadas agora)
  cozinha: [],
  casa: [],
  organizacao: []
};
