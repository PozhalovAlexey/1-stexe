import React from "react";
import { Tags } from "./Tags";

const tagsList = [
  {
    id: 1,
    title: "Fashion",
    link: "",
  },
  {
    id: 2,
    title: "Music",
    link: "",
  },
  {
    id: 3,
    title: "Lifestyle",
    link: "",
  },
  {
    id: 4,
    title: "Art",
    link: "",
  },
  {
    id: 5,
    title: "Interior",
    link: "",
  },
  {
    id: 6,
    title: "Travel",
    link: "",
  },
  {
    id: 7,
    title: "Food",
    link: "",
  },
  {
    id: 8,
    title: "Health",
    link: "",
  },
];

export const TagsList = () => {
  return (
    <>
      {tagsList.map((tags) => (
        <Tags key={tags.id} item={tags} />
      ))}
    </>
  );
};
