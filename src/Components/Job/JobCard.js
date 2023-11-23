import React from 'react'
import {Box, Grid, Typography, Button} from '@material-ui/core'

const skills = ['Javascript', 'React js', "Node js"]

export default (props) => {
    return(
        <Box>
            <Grid container>
                <Grid item xs>
                    <Typography variant='subtitle1'>FrontEnd Dev</Typography>
                    <Typography variant='subtitle2'>Google</Typography>
                </Grid>
                <Grid item container xs>
                    {skills.map(skill=> <Grid key={skill} item>{skill}</Grid>)}
                </Grid>
                <Grid item container direction='column' alignItems='flex-end' xs>
                    <Grid item>
                    <Typography variant='caption'>2577 min ago | Full time | Remote</Typography>
                    </Grid>
                    <Grid item>
                        <Box marginTop={2}>
                    <Button variant='outlined'>Check</Button>
                    </Box>
                    </Grid>

                </Grid>
                </Grid>
        </Box>
    )
}