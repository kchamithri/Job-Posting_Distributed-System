import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #4D64E4",
    },
  },
  companyName: {
    fontSize: "13.5px",
    color: "#ffffff",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
  },
}));

const JobCard = (props) => {
  const classes = useStyle();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle1">
            {props.companyName}
          </Typography>
        </Grid>
        <Grid item container xs>
          {props.skills.map((skill) => (
            <Grid key={skill} className={classes.skillChip} item>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
          <Grid item>
            <Typography variant="caption">
              {props.postedOn} | {props.type} | {props.location}
            </Typography>
          </Grid>
          <Grid item>
            <Box marginTop={2}>
              <Button variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCard;
