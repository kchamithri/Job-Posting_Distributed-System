import { Box, Button, Grid, Typography } from "@mui/material";

const Header = (props) => {
  return (
    <Box p={10} bgcolor="secondary.main" color="white">
      <Grid container>
        <Grid item xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">Open Job Listing</Typography>
            <Button onClick={props.openNewJobModal} variant="contained" disableElevation>
              Post a Job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
