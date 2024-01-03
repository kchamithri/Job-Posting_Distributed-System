import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  MenuItem,
  Select,
} from "@material-ui/core";

export default (props) => {
  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>Post Job</DialogTitle>
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
      </DialogContent>
    </Dialog>
  );
};
