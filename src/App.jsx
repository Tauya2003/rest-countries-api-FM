import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import { createContext, useMemo, useState } from "react";
import { getTheme } from "./utils/getThemes";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import SearchFeed from "./pages/SearchFeed";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  }));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />

        <Routes>
          <Route index exact element={<Feed />} />
          <Route path="/country/:name" element={<CountryDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
