import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

const sidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About Us",
    path: "/about",
    icon: <BsIcons.BsPersonBoundingBox />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <AiIcons.AiFillContacts />,
  },
  {
    title: "News Feed",
    path: "/",
    icon: <BiIcons.BiNews />,
  },
];

export default sidebarData;
