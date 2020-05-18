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
  ],
};
