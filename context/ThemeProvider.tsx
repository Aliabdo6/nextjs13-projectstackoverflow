/*@__PURE__*/
"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState("");

  // const handleThemeChange = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.documentElement.classList.add(
  //       "light"
  //     );
  //   } else {
  //     setMode("dark");
  //     document.documentElement.classList.add(
  //       "dark"
  //     );
  //   }
  // };

  const handleThemeChange = () => {
    const htmlElement = document.documentElement;
    if (mode === "dark") {
      setMode("light");
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
    } else {
      setMode("dark");
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
    }
  };

  // useEffect(() => {
  //   "use client";
  //   handleThemeChange();
  // }, [mode]);
  useEffect(() => {
    if (mode !== "") {
      handleThemeChange();
    }
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{ mode, setMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// opthion 1
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useTheme must be used within a ThemeProvider"
    );
  }
  return context;
}

// // option 2
// const contextValue = useMemo(() => ({ mode, setMode }), [mode, setMode]);

// return (
//   <ThemeContext.Provider value={contextValue}>
//     {children}
//   </ThemeContext.Provider>
// );

// " use client ";
// import exp from "constants";
// import React, {
//   createContext,
//   useState,
//   useContext,
//   useEffect,
// } from "react";

// interface ThemeContextType {
//   mode: string;
//   setMode: (mode: string) => void;
// }

// const ThemeContext = createContext<
//   ThemeContextType | undefined
// >(undefined);

// export function ThemeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [mode, setMode] = useState("");

//   const handleThemeChange = () => {
//     if (mode === "dark") {
//       setMode("light");
//       document.documentElement.classList.add(
//         "light"
//       );
//     } else {
//       setMode("dark");
//       document.documentElement.classList.add(
//         "dark"
//       );
//     }
//   };

//   //   useEffect(() => {
//   //     handleThemeChange();
//   //   }, [mode]);

//   return (
//     <ThemeContext.Provider
//       value={{ mode, setMode }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error(
//       "useTheme must be used within a ThemeProvider"
//     );
//   }
//   return context;
// }
