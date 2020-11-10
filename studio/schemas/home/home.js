export default {
  name: "homeSettings",
  type: "document",
  title: "Home sections",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Título de la página",
      name: "homePageTitle",
      type: "string",
      readOnly: true,
      hidden: true,
    },
    {
      title: "Foto descatada",
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
      title: "Favoritos del mes",
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
