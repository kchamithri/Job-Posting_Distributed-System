import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
