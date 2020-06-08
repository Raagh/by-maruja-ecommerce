export default {
  name: "category",
  type: "document",
  title: "Categoria",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Imagen",
      name: "image",
      type: "image",
      options: {
        metadata: ["lqip", "palette"],
      },
    },
    {
      title: "Nombre",
      name: "name",
      type: "string",
    },
  ],
};
