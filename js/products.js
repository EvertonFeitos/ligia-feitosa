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
  // Categoria que vamos usar na home (acima do link ACHADINHOS)
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
    }
  ],

  // Exemplos de categorias futuras (não utilizadas agora)
  cozinha: [],
  casa: [],
  organizacao: []
};
