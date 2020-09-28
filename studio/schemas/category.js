import { BsArchive } from "react-icons/bs";

export default {
  name: "category",
  icon: BsArchive,
  type: "document",
  title: "Categoria",
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
      title: "Nombre",
      name: "name",
      type: "string",
    },
    {
      title: "URL",
      name: "searchName",
      type: "string",
    },
  ],
};
