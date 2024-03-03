import React, { useState, useRef, useMemo } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  MenuItem,
  Select,
  Typography,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#ffffff",
    },
  },
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
  },
}));

const NewJobModel = (props) => {
  const [loading, setLoading] = useState(false);
  const dateRef = useRef("");
  const initState = useMemo(
    () => ({
      companyName: "",
      companyUrl: "",
      link: "",
      location: "",
      postedOn: dateRef.current,
      skills: [],
      title: "",
      type: "",
      description: "",
    }),
    []
  );

  const [jobDetails, setJobDetails] = useState(initState);
  const classes = useStyles();
  const skills = [
    "Javascript",
    "React js",
    "Node js",
    "Vue js",
    "Firebase",
    "MongoDB",
    "SQL",
  ];

  const BASE_URL =
    "https://job-posting-app-front-door-hyaufmbbe7hug4dk.z02.azurefd.net/api";
  const JOB_API_URL = BASE_URL + "/add-job";

  const closeModalCallback = () => {
    setJobDetails(initState);
    setLoading(false);
    props.closeModal();
  };

  const handleChange = (e) => {
    e.persist();
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) =>
    setJobDetails((oldState) => ({
      ...oldState,
      skills: oldState.skills.includes(skill)
        ? oldState.skills.filter((s) => s !== skill)
        : oldState.skills.concat(skill),
    }));

  const postJob = async () => {
    try {
      setLoading(true);
      const response = await fetch(JOB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobDetails),
      });

      if (response.ok) {
        console.log("Job posted successfully");
      } else {
        const errorMessage = await response.text();
        console.error("Failed to post job:", errorMessage);
      }
    } catch (error) {
      console.error("Error posting job:", error);
    } finally {
      closeModalCallback();
      setLoading(false);
    }
  };

  return (
    <Dialog open={props.newJobModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton onClick={props.closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Job details inputs */}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          color="red"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">*Required Fields</Typography>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            onClick={postJob} // Call postJob directly on button click
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="secondary" size={22} />
            ) : (
              "Post Job"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModel;
