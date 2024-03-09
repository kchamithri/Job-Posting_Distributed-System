import React, { useEffect, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Header from "../Header";
import SearchBar from "../SearchBar";
import JobCard from "../Job/JobCard";
import { Box, CircularProgress } from "@material-ui/core";
import ViewJobModal from "./VIewJobModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JobList({ jobs, setJobs, loading, setLoading }) {
  const BASE_URL =
    "https://job-posting-app-front-door-hyaufmbbe7hug4dk.z02.azurefd.net/api";

  const JOBS_API_URL = BASE_URL + "/get-jobs";

  const [viewJob, setViewJob] = useState({});

  const [jobSearch, setJobSearch] = useState({
    type: "Full time",
    location: "Remote",
  });

  // useEffect(() => {
  //   fetch(JOBS_API_URL)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setJobs(data);
  //       console.log(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching jobs:", error);
  //       setLoading(false); // Set loading to false even in case of error
  //     });
  // }, [JOBS_API_URL, setJobs, setLoading]);

  useEffect(() => {
    fetch(JOBS_API_URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          toast.error("Server down. Please try again later.");
          throw new Error("Network error");
        }
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false); // Set loading to false even in case of error
      });
  }, [JOBS_API_URL, setJobs, setLoading]);

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const jobSearchhandler = (type, location) => {
    console.log("searching");
    //filter jobs based on type and location from  fetch jobs_api_url
    console.log("searching for jobs");
    fetch(JOBS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const filteredJobs = data.filter(
          (job) =>
            job.type.toLowerCase().includes(type.toLowerCase()) &&
            job.location.toLowerCase().includes(location.toLowerCase())
        );
        setJobs(filteredJobs);
      })
      .catch((error) => {
        console.log("error fetching:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ViewJobModal job={viewJob} closeModal={() => setViewJob({})} />
      <ToastContainer />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar
            onclick={() => jobSearchhandler(jobSearch.type, jobSearch.location)}
            handleChange={handleChange}
            jobSearch={jobSearch}
          />
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((data) => {
              return (
                <JobCard
                  open={() => setViewJob(data)}
                  key={data.id}
                  {...data}
                />
              );
            })
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default JobList;
