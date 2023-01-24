import React from "react";
import imagePost1 from "../../../../image/2.jpg";
import imagePost2 from "../../../../image/151.jpg";
import imagePost3 from "../../../../image/45.jpg";
import imagePost4 from "../../../../image/501.jpg";
import imagePost5 from "../../../../image/7.jpg";
import { SideSection } from "./SideSections";

const sideSectionPosts = [
  {
    id: 1,
    image: imagePost1,
    imageAlt: "Силуэт на пляже",
    createDate: "14 июня 2019",
    title: "10 мест, ради которых стоит проснуться",
    link: "",
  },
  {
    id: 2,
    image: imagePost2,
    imageAlt: "Девушка занимается йогой",
    createDate: "14 июня 2019",
    title: "Йога для домашних",
    link: "",
  },
  {
    id: 3,
    image: imagePost3,
    imageAlt: "Красивый интерьер балкона",
    createDate: "14 июня 2019",
    title: "Как мы превратили классное место в балкон",
    link: "",
  },
  {
    id: 4,
    image: imagePost4,
    imageAlt: "Красивые блюда",
    createDate: "14 июня 2019",
    title: "Кулинарный подход к науке",
    link: "",
  },
  {
    id: 5,
    image: imagePost5,
    imageAlt: "Прически девушек",
    createDate: "14 июня 2019",
    title: "Лучшие прически для распущенных волос",
    link: "",
  },
];

export const SideSectionPosts = () => {
  return (
    <>
      {sideSectionPosts.map((sidesection) => (
        <SideSection key={sidesection.id} item={sidesection} />
      ))}
    </>
  );
};
