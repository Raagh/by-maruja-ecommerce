export default {
  name: "hero",
  type: "document",
  title: "Hero",
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
      title: "Titulo",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitulo",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Texto del boton",
      name: "buttonText",
      type: "string",
    },
    {
      title: "Url del boton",
      name: "buttonURL",
      type: "string",
    },
  ],
};
