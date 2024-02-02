import React, { useState, useEffect, useCallback } from 'react';
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
} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';

const useStyle = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: '14.5px',
    borderRadius: '5px',
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#ffffff',
    },
  },
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: '#ffffff',
  },
}));

const initState = { 
companyName: '',
companyUrl: '',
link: '',
location: '',
// postedOn: "",
skills: [],
title: '',
type: '',
description: '',}

const NewJobModel = (props) => {
  const [loading, setLoading] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);

  const [jobDetails, setJobDetails] = useState(initState);

  const handleChange = (e) => {
    e.persist();
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) =>
    jobDetails.skills.includes(skill)
      ? setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s !== skill),
        }))
      : setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));
  const classes = useStyle();
  const skills = [
    'Javascript',
    'React js',
    'Node js',
    'Vue js',
    'Firebase',
    'MongoDB',
    'SQL',
  ];
  console.log(jobDetails);

  const BASE_URL = 'https://jobsforyou.azurewebsites.net';
   const JOBS_API_URL = BASE_URL + '/addJob';

  // const handlePostJob = async () => {
  //   try {
  //     const response = await fetch(JOBS_API_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(jobDetails),
  //     });

  //     if (response.ok) {
  //       console.log('Job posted successfully');
  //     } else {
  //       console.error('Failed to post job');
  //     }
  //   } catch (error) {
  //     console.error('Error posting job:', error);
  //   }
  // };

  const [isPostingJob, setIsPostingJob] = useState(false);

  const closeModal = () =>{
    setJobDetails(initState);
    setLoading(false);
    props.closeModal();
  }

  const closeModalCallback = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const postJob = async () => {
      try {
        setLoading(true);
        const response = await fetch(JOBS_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobDetails),
        });

        if (response.ok) {
          console.log('Job posted successfully');
        } else {
          console.error('Failed to post job');
        }
      } catch (error) {
        console.error('Error posting job:', error);
      } finally {
        // closeModal();
        closeModalCallback();
        // Reset the state variable to indicate that the job posting is complete
        setIsPostingJob(false);
        // props.onNewJobPosted();
      }
    };

    if (isPostingJob) {
      // Trigger the job posting when isPostingJob is true
      postJob();
    }
  }, [isPostingJob, JOBS_API_URL, jobDetails, closeModalCallback]); // Dependency array: watch for changes in isPostingJob or jobDetails

 

  return (
    <Dialog open={props.newJobModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="title"
              value={jobDetails.title}
              autoComplete="off"
              placeholder="Job Title*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="type"
              value={jobDetails.type}
              fullWidth
              disableUnderline
              variant="filled"
            >
              <MenuItem value="FullTime">Full time</MenuItem>
              <MenuItem value="PartTime">Part time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="companyName"
              value={jobDetails.companyName}
              autoComplete="off"
              placeholder="Company Name*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="companyUrl"
              value={jobDetails.companyUrl}
              autoComplete="off"
              placeholder="Company URL*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name="location"
              value={jobDetails.location}
              fullWidth
              disableUnderline
              variant="filled"
              // defaultValue="FullTime"
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="On-Site">On-Site</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name="link"
              value={jobDetails.link}
              placeholder="Job Link*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              name="description"
              value={jobDetails.description}
              autoComplete="off"
              placeholder="Job Description*"
              disableUnderline
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex">
            {skills.map((skill) => {
              return (
                <Box
                  onClick={() => addRemoveSkill(skill)}
                  className={`${classes.skillChip} ${
                    jobDetails.skills.includes(skill) && classes.included
                  }`}
                  key={skill}
                >
                  {skill}
                </Box>
              );
            })}
          </Box>
        </Box>
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
            // onClick={handlePostJob}
            onClick={() => setIsPostingJob(true)}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color='secondary' size={22} />
            ):(
              "Post Job"
              )}
            
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModel;
