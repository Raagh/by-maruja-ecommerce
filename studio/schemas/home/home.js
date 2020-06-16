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
      of: [{ type: "category" }],
    },
    {
      title: "Recomendados",
      name: "recommended",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  initialValue: () => ({
    homePageTitle: "Configuración Home",
  }),
};
