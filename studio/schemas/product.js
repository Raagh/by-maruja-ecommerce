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
        metadata: ["lqip", "palette"],
      },
    },
  ],
};
