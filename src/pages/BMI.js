
// // import React, { useState, useEffect } from 'react';
// // import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// // import BMIBannerImage from '../assets/images/BMI.png'; // Path to your image file
// // import axios from 'axios';
// // import { useAuth0 } from '@auth0/auth0-react';

// // const BMI = () => {
// //   const [name, setName] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [weight, setWeight] = useState('');
// //   const [height, setHeight] = useState('');
// //   const [result, setResult] = useState('');
// //   const { user, isAuthenticated, isLoading } = useAuth0();

// //   const calculateBMI = async () => {
// //     const heightInMeters = height / 100;
// //     const bmi = weight / (heightInMeters * heightInMeters);
// //     setResult({ name, bmi: bmi.toFixed(2) });

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/bmi', {
// //         name,
// //         gender,
// //         weight,
// //         height,
// //         bmi: bmi.toFixed(2),
// //         user: user.name // Include user.name in the request
// //       });
// //       console.log('BMI data saved:', response.data);
// //     } catch (error) {
// //       console.error('Error saving BMI data:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (isLoading) {
// //       console.log('loading..');
// //     }
// //     if (isAuthenticated) {
// //       console.log(user.name);
// //     }
// //   }, []);

// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         mt: { lg: '70px', xs: '20px' },
// //         ml: { sm: '50px' }
// //       }}
// //       position="relative"
// //       p="20px"
// //     >
// //       <Box>
// //         <Typography color="#FF2625" fontWeight="600" fontSize="26px">
// //           BMI Calculator
// //         </Typography>
// //         <Box mt="30px">
// //           <TextField
// //             label="Name"
// //             variant="outlined"
// //             fullWidth
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             sx={{ mb: '20px' }}
// //           />
// //           <RadioGroup
// //             aria-label="gender"
// //             value={gender}
// //             onChange={(e) => setGender(e.target.value)}
// //             sx={{ mb: '20px' }}
// //           >
// //             <FormControlLabel value="male" control={<Radio />} label="Male" />
// //             <FormControlLabel value="female" control={<Radio />} label="Female" />
// //             <FormControlLabel value="other" control={<Radio />} label="Other" />
// //           </RadioGroup>
// //           <TextField
// //             label="Weight (kg)"
// //             variant="outlined"
// //             fullWidth
// //             value={weight}
// //             onChange={(e) => setWeight(e.target.value)}
// //             sx={{ mb: '20px' }}
// //           />
// //           <TextField
// //             label="Height (cm)"
// //             variant="outlined"
// //             fullWidth
// //             value={height}
// //             onChange={(e) => setHeight(e.target.value)}
// //             sx={{ mb: '20px' }}
// //           />
// //           <Button
// //             variant="contained"
// //             onClick={calculateBMI}
// //             sx={{ background: '#FF2625', color: 'white', textTransform: 'none', mb: '20px' }}
// //           >
// //             Calculate BMI
// //           </Button>
// //           {result && (
// //             <Typography>
// //               {result.name}, your BMI is: {result.bmi}
// //             </Typography>
// //           )}
// //         </Box>
// //       </Box>
// //       { <img
// //         src={BMIBannerImage}
// //         alt="hero-banner"
// //         style={{ width: '20%', marginLeft: '10px', marginRight: '100px' }}
// //       /> }
// //     </Box>
// //   );
// // };

// // export default BMI;

// import React, { useState, useEffect } from 'react';
// import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// import BMIBannerImage from '../assets/images/BMI.png'; // Path to your image file
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';

// const BMI = () => {
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [result, setResult] = useState('');
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   const calculateBMI = async () => {
//     const heightInMeters = height / 100;
//     const bmi = weight / (heightInMeters * heightInMeters);
//     setResult({ name, bmi: bmi.toFixed(2) });

//     try {
//       const response = await axios.post('http://localhost:5000/api/bmi', {
//         name,
//         gender,
//         weight,
//         height,
//         bmi: bmi.toFixed(2),
//         user: user.name // Include user.name in the request
//       });
//       console.log('BMI data saved:', response.data);
//     } catch (error) {
//       console.error('Error saving BMI data:', error);
//     }
//   };

//   useEffect(() => {
//     if (isLoading) {
//       console.log('loading..');
//     }
//     if (isAuthenticated) {
//       console.log(user.name);
//     }
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         mt: { lg: '70px', xs: '20px' },
//         ml: { sm: '50px' }
//       }}
//       position="relative"
//       p="20px"
//     >
//       <Box>
//         <Typography color="#FF2625" fontWeight="600" fontSize="26px">
//           BMI Calculator
//         </Typography>
//         <Box mt="30px">
//           <TextField
//             label="Name"
//             variant="outlined"
//             fullWidth
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             sx={{ mb: '20px' }}
//           />
//           <RadioGroup
//             aria-label="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             sx={{ mb: '20px' }}
//           >
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//             <FormControlLabel value="other" control={<Radio />} label="Other" />
//           </RadioGroup>
//           <TextField
//             label="Weight (kg)"
//             variant="outlined"
//             fullWidth
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             sx={{ mb: '20px' }}
//           />
//           <TextField
//             label="Height (cm)"
//             variant="outlined"
//             fullWidth
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             sx={{ mb: '20px' }}
//           />
//           <Button
//             variant="contained"
//             onClick={calculateBMI}
//             sx={{ background: '#FF2625', color: 'white', textTransform: 'none', mb: '20px' }}
//           >
//             Calculate BMI
//           </Button>
//          <Box
//   sx={{
//     textAlign: 'right',
//     position: 'absolute',
//     bottom: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '100%',
//     pb: '20px', // Add padding bottom to create space between text and TextField
//   }}
// >
//   <Typography variant="body1">Your BMI is</Typography>
// </Box>

// {result && (
//   <TextField
//     label="Your BMI"
//     variant="outlined"
//     fullWidth
//     value={result.bmi}
//     readOnly
//     sx={{
//       position: 'absolute',
//       bottom: '0',
//       left: '50%',
//       transform: 'translateX(-50%)',
//     }}
//   />
// )}

//         </Box>
//       </Box>
//       <img
//         src={BMIBannerImage}
//         alt="hero-banner"
//         style={{ width: '20%', marginLeft: '10px', marginRight: '100px' }}
//       />
//     </Box>
//   );
// };

// export default BMI;
