" use clinet ";
import exp from "constants";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

interface ThemeContextType {
  mode: string;
  setMode: React.Dispatch<
    React.SetStateAction<string>
  >;
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

  const handleThemeChange = () => {
    if (localStorage.theme === "dark") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{ mode, setMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useTheme must be used within a ThemeProvider"
    );
  }
  return context;
}
