import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";

const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem("theme");
  return storedTheme || "dark";
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} setTheme={setTheme} />}
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
