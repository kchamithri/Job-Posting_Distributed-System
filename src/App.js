import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header from "./Components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
