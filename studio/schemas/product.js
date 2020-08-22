import { BsBag } from "react-icons/bs";

export default {
  title: "Producto",
  icon: BsBag,
  name: "product",
  type: "document",
  fields: [
    {
      title: "Nombre",
      name: "name",
      type: "string",
    },
    {
      title: "Precio",
      name: "price",
      type: "number",
    },
    {
      title: "Stock",
      name: "stock",
      type: "number",
    },
    {
      title: "Imagen",
      name: "image",
      type: "image",
      options: {
        metadata: ["lqip"],
      },
    },
    {
      title: "Categoria",
      name: "category",
      type: "array",
      _ref: "category",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: "Tag",
      name: "tag",
      type: "string",
      options: {
        list: [
          { title: "Favorito", value: "Favorito" },
          { title: "Acero quirúrgico", value: "Acero quirúrgico" },
          { title: "Descuento", value: "Descuento" },
          { title: "Normal", value: "Normal" },
        ],
        layout: "radio",
      },
    },
  ],
};
