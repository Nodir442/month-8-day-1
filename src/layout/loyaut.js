import { ProductOutlined, UserOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";
export const data = [
  {
    key: nanoid(),
    icon: ProductOutlined,
    label: "Products",
    children: [
      {
        key: nanoid(),
        label: `All Products`,
        path: "/",
      },
      {
        key: nanoid(),
        label: `Create Product`,
        path: "/createProduct",
      },
      {
        key: nanoid(),
        label: `Edit Product`,
        path: "/editProduct",
      },
    ],
  },
];
