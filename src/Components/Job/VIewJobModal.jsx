import { Box,  Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material"
import {Close as CloseIcon} from "@mui/icons-material";
import { Button, Grid, makeStyles } from "@material-ui/core";



const useStyle = makeStyles((theme) => ({
    info: {
        '& > *': {
            margin: "5px",
            
        },
    },
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "10px",
        borderRadius: "5px",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#ffffff",
      },
      footer:{
            marginRight: "20px",
        
      }
}));

const ViewJobModal = (props) => {
    const classes = useStyle();
    return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                {props.job.title} at {props.job.companyName}
                <IconButton onClick={props.closeModal}>
                    <CloseIcon />
                    </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Box>
            <Box className={classes.info} display="flex" gap={1}
                >
                    <Typography variant="caption">Job Type:</Typography>
                    <Typography variant="caption">{props.job.type}</Typography>

                </Box>
                <Box className={classes.info} display="flex" gap={1}
                >
                    <Typography variant="caption">Job Location: </Typography>
                    <Typography variant="caption">{props.job.location}</Typography>

                </Box>
                <Box className={classes.info} display="flex" gap={1}
                >
                    <Typography variant="caption">Company URL: </Typography>
                    <Typography variant="caption"><a href={props.job.companyUrl}>{props.job.companyUrl}</a></Typography>
                </Box>
                <Box className={classes.info} display="flex" gap={1}>
                    <Typography variant="caption">Job Link: </Typography>
                    <Typography variant="caption"><a href={props.job.link}>{props.job.link}</a></Typography>

                </Box>
                <Box className={classes.info} display="flex" gap={1}>
                    <Typography variant="caption" pt={1.5}>Skills: </Typography>
                    <Grid container alignItems="center">
                        {props.job.skills && props.job.skills.map((skill) => (
                            <Grid key={skill} item className={classes.skillChip}>
                                
                                    {skill}
                                
                            </Grid>
                        ))}
                    </Grid>

                </Box>

            </Box>
            </DialogContent>
        
        <DialogActions className={classes.footer}>
        <Button variant="outlined" component="a" href={props.job.link} target="_blank">Apply</Button>
        </DialogActions>
    </Dialog>
    )
}

export default ViewJobModal;