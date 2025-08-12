import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "Мэдээ",
    path: "/blog",
    newTab: false,
  },
  {
    id: 8,
    title: "Бидний тухай",
    path: "/about",
    newTab: false,
  },
  {
    id: 1,
    title: "Нүүр хуудас",
    path: "/",
    newTab: false,
  },

  // {
  //   id: 3,
  //   title: "Support",
  //   path: "/support",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Үйлчилгээ",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "IT Support",
        path: "/support",
        newTab: false,
      },
      {
        id: 42,
        title: "Software",
        path: "/software",
        newTab: false,
      },

      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 8,
    title: "Ажлын байр",
    path: "/jobs",
    newTab: false,
    // submenu: [
    //   {
    //     id: 41,
    //     title: "IT Support",
    //     path: "/software",
    //     newTab: false,
    //   },
    // ],
  },
];
export default menuData;
