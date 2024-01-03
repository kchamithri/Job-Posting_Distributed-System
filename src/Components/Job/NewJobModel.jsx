import React from "react";
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

const useStyle = makeStyles((theme) => ({
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
}));

export default (props) => {
  const classes = useStyle();
  const skills = [
    "Javascript",
    "React js",
    "Node js",
    "Vue js",
    "Firebase",
    "MongoDB",
    "SQL",
  ];
  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder="Job Title*" disableUnderline fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              disableUnderline
              variant="filled"
              defaultValue="FullTime"
            >
              <MenuItem value="FullTime">Full time</MenuItem>
              <MenuItem value="PartTime">Part time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Company Name*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Company URL*"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              disableUnderline
              variant="filled"
              defaultValue="FullTime"
            >
              <MenuItem value="FullTime">Remote</MenuItem>
              <MenuItem value="PartTime">On-Site</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Job Link*" disableUnderline fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
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
                <Box className={classes.skillChip} key={skill}>
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
          <Button variant="contained" disableElevation color="primary">
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
