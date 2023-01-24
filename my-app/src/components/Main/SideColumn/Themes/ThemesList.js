import React from "react";
import { Themes } from "./Themes";

const themesList = [
  {
    id: 1,
    title: "Красота",
    sup: "12",
    link: "/",
  },
  {
    id: 2,
    title: "Здоровье",
    sup: "4",
    link: "/",
  },
  {
    id: 3,
    title: "Образ жизни",
    sup: "145",
    link: "/",
  },
  {
    id: 4,
    title: "Музыка",
    sup: "28",
    link: "/",
  },
  {
    id: 5,
    title: "Спорт",
    sup: "62",
    link: "/",
  },
  {
    id: 6,
    title: "Йога",
    sup: "8",
    link: "/",
  },
];

export const ThemesList = () => {
  return (
    <>
      {themesList.map((themes) => (
        <Themes key={themes.id} item={themes} />
      ))}
    </>
  );
};
