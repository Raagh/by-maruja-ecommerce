export default {
  name: "userReviews",
  type: "document",
  title: "Historias Felices",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Imagen",
      name: "image",
      type: "image",
      options: {
        metadata: ["lqip"],
      },
    },
    {
      title: "Texto",
      name: "text",
      type: "string",
    },
    {
      title: "Tag de Instagram",
      name: "instagramTag",
      type: "string",
    },
  ],
};
