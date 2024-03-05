import React, { useEffect, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Header from "../Header";
import SearchBar from "../SearchBar";
import JobCard from "../Job/JobCard";
import NewJobModel from "../Job/NewJobModel";
import { Box, CircularProgress } from "@material-ui/core";

function JobList({ jobs, setJobs, loading, setLoading }) {
  const BASE_URL =
    "https://job-posting-app-front-door-hyaufmbbe7hug4dk.z02.azurefd.net/api";

  const JOBS_API_URL = BASE_URL + "/get-jobs";

  useEffect(() => {
    fetch(JOBS_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false); // Set loading to false even in case of error
      });
  }, [JOBS_API_URL]);

  return (
    <ThemeProvider theme={theme}>
      <Header />

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

export default JobList;
