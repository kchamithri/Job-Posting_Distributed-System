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

  const [newJobModal, setNewJobModal] = useState(false);

  const BASE_URL = "https://jobsforyou.azurewebsites.net";

  //const JOBS_API_URL = BASE_URL + "/jobs";
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
  }, [JOBS_API_URL]);


  const handleNewJobPosted = () => {
    // Close the modal and trigger a refresh of job data
    setNewJobModal(false);
    // You can also set loading to true here if you want to show a loading spinner during data refresh
    // setLoading(true);
    // Fetch updated job data after posting a new job
    fetch(JOBS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error fetching:", error);
        // Handle error if needed
        setLoading(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header openNewJobModal={() => setNewJobModal(true)} />
      <NewJobModel closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} onNewJobPosted={handleNewJobPosted}/>
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
