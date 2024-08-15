import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

//import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '50px', xs: '20px' }, ml: { sm: '50px' }, position: 'relative', p: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb="20px">Fitness track</Typography>
  <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }, marginBottom: '10px' }} mt="0">
    Sweat, Smile <br />
    And Repeat
  </Typography>
  <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mt="0" mb="20px">
    Check out the most effective exercises personalized to you
  </Typography>
  <Stack>
    <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px', zIndex: '1' }}>Explore Exercises</a>
  </Stack>
  <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '150px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    WORK<br/>  Hard
  </Typography>
 
</Box>

);

export default HeroBanner;
