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
      title: "Descripcion",
      name: "description",
      type: "string",
    },
    {
      title: "Precio Descuento",
      name: "discountPrice",
      type: "number",
    },
    {
      title: "Stock sin talles",
      description:
        "En caso de ser un producto que no tiene talles, usar este campo para espificar el stock",
      name: "stock",
      type: "number",
    },
    {
      title: "Stock por talle",
      description:
        "En caso de ser un producto que tiene talles, usar esta tabla para especificar el stock por cada talle",
      name: "sizeChart",
      type: "array",
      of: [
        {
          title: "Producto con Talle y Stock",
          name: "sizeChartRow",
          type: "object",
          fields: [
            { name: "size", type: "string", title: "Talle" },
            { name: "stock", type: "number", title: "Stock" },
          ],
        },
      ],
    },
    {
      title: "Imagenes",
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            metadata: ["lqip"],
          },
        },
      ],
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
