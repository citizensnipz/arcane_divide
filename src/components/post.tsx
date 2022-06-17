import { Box, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, {FC} from 'react';



const Post: FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box sx={{flexGrow: 1, bgcolor: 'background.paper'}}>
            <Grid container >
                <Grid item xs={12} md={7} display='flex' justifyContent='center'>
                    <p>picture here</p>
                </Grid>
                {matches ? 
                <Divider flexItem orientation='vertical' />
                :
                <Divider orientation='horizontal' style={{width: '100%'}}/>
                }
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                    <p>text here</p>
                </Grid>
            </Grid>
            <Box sx={{flexGrow: 1, height: '2em'}}>

            </Box>
        </Box>
        
    )
}

export default Post;