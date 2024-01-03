import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />
          <JobCard />
          <JobCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
