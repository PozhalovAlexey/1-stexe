import React from "react";
import { Trends } from "./Trends";

const trendsList = [
  {
    id: 1,
    title: "Сейчас в тренде: сад на подоконнике",
    tags: [
      {
        name: "lifestyle",
        link: "",
      },
      {
        name: "Interior",
        link: "",
      },
    ],
  },
  {
    id: 2,
    title: "Cыры на красивых картинках из интернета: какие они на вкус?",
    tags: [
      {
        name: "food",
        link: "",
      },
    ],
  },
  {
    id: 3,
    title: "Собираемся в первый поход в горы",
    tags: [
      {
        name: "Lifestyle",
        link: "",
      },
      {
        name: "Travel",
        link: "",
      },
    ],
  },
  {
    id: 4,
    title: "Сейчас в тренде: сколько витамина в лимонах?",
    tags: [
      {
        name: "Food",
        link: "",
      },
      {
        name: "Health",
        link: "",
      },
    ],
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
