export default {
  name: "homeSettings",
  type: "document",
  title: "Home sections",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "TituloPagina",
      name: "homePageTitle",
      type: "string",
      readOnly: true,
      hidden: true,
    },
    {
      title: "Hero",
      name: "hero",
      type: "hero",
    },
    {
      title: "Categorias",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: "Recomendados",
      name: "recommended",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
          options: {
            filter: "tag == $tag && stock > 0",
            filterParams: { tag: "Favorito" },
          },
        },
      ],
    },
    {
      title: "Historias Felices",
      name: "userReviews",
      type: "userReviews",
    },
  ],
  initialValue: () => ({
    homePageTitle: "Configuración Home",
  }),
};
