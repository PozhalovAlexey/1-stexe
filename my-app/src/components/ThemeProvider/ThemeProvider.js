// import React, { useContext, useState } from "react";
//import { createTheme } from "@material-ui/core";

// import(createTheme(useContext(primary, secondary)));
// import { Header } from "../Header";
//
// const ThemeContext = createTheme({ type: "Light" });
//
// export const ThemeProvider = ({ children }) => {
//   const [type, setType] = useState("Light");
//   return (
//     <ThemeContext.Provider value={{ type, setType }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className={"dark__mode"}>
      <input
        className={"dark__mode__input"}
        type={"checkbox"}
        id={"darkmode__toggle"}
        onChange={toggleTheme}
      />
      <label
        className={"dark__mode__label"} /* for={"darkmode__toggle"} */
      ></label>
    </div>
  );
};
//по useEffect useState useContext задать вопросы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const theme = () => {
//   createTheme({
//     palette: {
//       primary: {
//         backgroundColor: "#fff",
//       },
//       secondary: {
//         backgroundColor: "#222",
//       },
//     },
//   });
// };
// export default theme;
