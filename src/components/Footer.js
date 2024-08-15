import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }} bgcolor="#FFF3F4">
    <Stack gap="5px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="10px" py= "1px">
      {/* Your content here */}
    </Stack>
    <Typography variant="body2" sx={{ fontSize: { lg: '14px', xs: '12px' } }} mt="40px" textAlign="center" pb="20px">
    
    </Typography>
  </Box>
);


export default Footer;
