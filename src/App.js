import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModel from "./Components/Job/NewJobModel";
import "../src/dummyData";
import dummyData from "../src/dummyData";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewJobModel />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          {dummyData.map((data) => {
            return <JobCard key={data.id} {...data} />;
          })}

          {/* <JobCard />
          <JobCard /> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
