import { Box } from '@mui/material';
import React, {FC} from 'react';
import pic from '../assets/img/logoPicLarge.jpg';



const Home: FC = () => {

    return (
        <Box sx={{}}>
            <img src={pic} width='100%' height='auto'/>
        </Box>
    )
}

export default Home;