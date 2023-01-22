import React from "react";
import { ListItem } from "./ListItem/ListItem";

const navItems = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "Посты",
    link: "/",
  },
  {
    name: "Статьи",
    link: "/",
  },
  {
    name: "Теги",
    link: "/",
  },
  {
    name: "Темы",
    link: "/",
  },
  {
    name: "Контакты",
    link: "/",
  },
];

export const NavList = () => {
  return (
    <ul className="nav__list">
      {navItems.map(({ name, link }) => (
        <ListItem name={name} link={link} />
      ))}
    </ul>
  );
};
