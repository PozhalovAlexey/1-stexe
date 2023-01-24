import React from "react";
import { Trends } from "./Trends";

const trendsList = [
  {
    id: 1,
    title: "Сейчас в тренде: сад на подоконнике",
    tags: [
      {
        id: 1,
        name: "lifestyle",
        link: "",
      },
      {
        id: 2,
        name: "Interior",
        link: "",
      },
    ],
    cssClass: "trends__interior",
  },
  {
    id: 2,
    title: "Cыры на красивых картинках из интернета: какие они на вкус?",
    tags: [
      {
        id: 1,

        name: "food",
        link: "",
      },
    ],
    cssClass: "trends__food",
  },
  {
    id: 3,
    title: "Собираемся в первый поход в горы",
    tags: [
      {
        id: 1,
        name: "Lifestyle",
        link: "",
      },
      {
        id: 2,
        name: "Travel",
        link: "",
      },
    ],
    cssClass: "trends__travel",
  },
  {
    id: 4,
    title: "Сейчас в тренде: сколько витамина в лимонах?",
    tags: [
      {
        id: 1,
        name: "Food",
        link: "",
      },
      {
        id: 2,
        name: "Health",
        link: "",
      },
    ],
    cssClass: "trends__health",
  },
];

export const TrendsList = () => {
  return (
    <>
      {trendsList.map((trends) => (
        <Trends key={trends.id} item={trends} />
      ))}
    </>
  );
};
