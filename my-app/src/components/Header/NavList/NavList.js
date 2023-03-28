import React from "react";
import { ListItem } from "./ListItem/ListItem";

const navItems = [
  {
    id: 1,
    name: "Главная",
    link: "/",
  },
  {
    id: 2,
    name: "Посты",
    link: "/",
  },
  {
    id: 3,
    name: "Статьи",
    link: "/",
  },
  {
    id: 4,
    name: "Теги",
    link: "/",
  },
  {
    id: 5,
    name: "Темы",
    link: "/",
  },
  {
    id: 6,
    name: "Контакты",
    link: "/",
  },
];

export const NavList = ({ isFromSidebar }) => {
  const classes = ` ${isFromSidebar && "nav__list__from__sidebar"}`;
  return (
    <div className={classes}>
      <ul className="nav__list">
        {navItems.map(({ name, link, id }) => (
          <ListItem name={name} link={link} key={id} />
        ))}
      </ul>
    </div>
  );
};
