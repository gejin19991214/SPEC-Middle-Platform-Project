import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Filter",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: "Search",
        path: "/products",
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: "Graphs",
        path: "/graphs",
        icon: <BsIcons.BsFillFileEarmarkBarGraphFill />,
        cName: 'nav-text'
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]