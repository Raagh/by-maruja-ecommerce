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
      title: "Descripcion",
      name: "description",
      type: "string",
    },
    {
      title: "Precio",
      name: "price",
      type: "number",
    },
    {
      title: "Precio descuento",
      name: "discountPrice",
      type: "number",
    },
    {
      title: "Stock talle único",
      description:
        "En caso de ser un producto que tiene talle único, usar este campo para espificar el stock",
      name: "stock",
      type: "number",
    },
    {
      title: "Stock por talle",
      description:
        "En caso de ser un producto que tiene varios talles, usar esta tabla para especificar el stock por cada talle",
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
      title: "Fotos",
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
      title: "Categoría",
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
    {
      title: "Reseña",
      name: "userReviews",
      type: "userReviews",
    },
  ],
};
