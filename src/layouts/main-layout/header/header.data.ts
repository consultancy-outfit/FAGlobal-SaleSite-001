import { APP_ROUTES } from "@/constants/routes";

export const navLinksData = [
  {
    title: "Home",
    path: APP_ROUTES.HOME,
  },
  {
    title: "About Us",
    path: APP_ROUTES.ABOUT_US,
  },
  {
    title: "Products",
    path: APP_ROUTES.SERVICES,
    children: [
      {
        title: "Product 1",
        path: APP_ROUTES.PRODUCT_1,
      },
      {
        title: "Product 2",
        path: APP_ROUTES.PRODUCT_2,
      },
      {
        title: "Product 3",
        path: APP_ROUTES.PRODUCT_3,
      },
    ],
  },
  {
    title: "Use Cases",
    path: APP_ROUTES.PRICING,
  },
  {
    title: "Contact Us",
    path: APP_ROUTES.CONTACT_US,
  },
];
