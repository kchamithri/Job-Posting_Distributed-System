import { Box, Grid, Typography } from "@mui/material";

const Header = () => {
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
