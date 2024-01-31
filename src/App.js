import React, { useEffect, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModel from "./Components/Job/NewJobModel";
import { Box, CircularProgress } from "@material-ui/core";
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://jobsforyou.azurewebsites.net";

  // const JOBS_API_URL = BASE_URL + "/jobs";
  const JOBS_API_URL = BASE_URL;

  useEffect(() => {
    fetch(JOBS_API_URL, {
      method: "GET",
      content: "application/json",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error fetching:", error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewJobModel />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((data) => {
              return <JobCard key={data.id} {...data} />;
            })
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
