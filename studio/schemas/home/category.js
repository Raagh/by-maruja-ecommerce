export default {
  name: "category",
  type: "document",
  title: "Categoria",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Imagen",
      name: "imageHero",
      type: "image",
    },
    {
      title: "Titulo",
      name: "heroTitle",
      type: "string",
    },
  ],
};
