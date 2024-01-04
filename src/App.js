import React, { useEffect, useState } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/Job/JobCard";
import NewJobModel from "./Components/Job/NewJobModel";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebase/config";
import { Box, CircularProgress } from "@material-ui/core";
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const req = await getDocs(collection(db, "jobs"));
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(tempJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
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
