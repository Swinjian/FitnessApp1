

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo2 from './assets/images/logo2.jpg'; // Import your image
//import BMI from './pages/BMI';

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'right',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      {!isAuthenticated && ( // Only render if the user is not authenticated
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start', // Align text to the left
            alignItems: 'top', // Align image to the top
            width: '100%',
          }}
        >
          <img src={logo2} alt="logo" style={{ width: '370px', marginRight: '50px', marginBottom: '20px' }} />
          <Typography fontWeight={400} color="#FF2625" sx={{ fontSize: '45px', marginLeft: '10px', marginTop: '135px' }}>
            <p>Welcome to Fitfuse!!</p>
            <p>Log in to start your fitness journey🔥🔥</p>
          </Typography>
        </Box>
      )}
      {isAuthenticated && ( // Render authenticated routes if the user is authenticated
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          
        </Routes>
      )}
      <Footer />
    </Box>
  );};

export default App;


