import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});

const SearchBar = ({onclick, handleChange, jobSearch}) => {
  
  const classes = useStyle();
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled">
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>

      <Select onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant="filled">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="On-Site">On-Site</MenuItem>
       
      </Select>

      <Button variant="contained" color="primary" disableElevation onClick={onclick}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
