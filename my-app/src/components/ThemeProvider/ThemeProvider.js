import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  dark: {
    textColor: "white",
    background: "black",
  },
  light: {
    textColor: "black",
    background: "white",
  },
};
const Button = styled.button`
  background: ${(props) =>
    props.isDarkmode ? theme.dark.background : theme.light.background};
  color: ${(props) =>
    props.isDarkmode ? theme.dark.textColor : theme.light.textColor};

  height: 150px;
`;
export const App = () => {
  const [isDarkmode, setIsDarkMode] = useState(false);
  return (
    <>
      <Button isDarkmode={isDarkmode}>12312312</Button>
      <button
        onClick={() => {
          setIsDarkMode(!isDarkmode);
        }}
      >
        Сменить тему
      </button>
    </>
  );
};
