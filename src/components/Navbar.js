// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Stack, Button } from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';

// import Logo from '../assets/images/Logo.png';

// const Navbar = () => {
//   const { isAuthenticated, logout } = useAuth0();

//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-around"
//       sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
//       px="20px"
//     >
//       <Link to="/">
//         <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
//       </Link>
//       <Stack
//         direction="row"
//         gap="40px"
//         fontFamily="Alegreya"
//         fontSize="24px"
//         alignItems="flex-end"
//       >
//         <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
//         <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
//         {isAuthenticated && (
//           <Button
//             className="search-btn"
//             sx={{
//               bgcolor: '#FF2625',
//               color: '#fff',
//               textTransform: 'none',
//               height: '48px',
//               fontSize: '14px',
//               padding: '0 20px',
//               borderRadius: '24px',
//             }}
//             onClick={() => logout({ returnTo: window.location.origin })}
//           >
//             Logout
//           </Button>
//         )}
//       </Stack>
//     </Stack>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        {/* {isAuthenticated && (
          <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>BMI</Link>
        )} */}
        {isAuthenticated ? (
          <Button
            className="search-btn"
            sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              height: '48px',
              fontSize: '14px',
              padding: '0 20px',
              borderRadius: '24px',
            }}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="search-btn"
            sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              height: '48px',
              fontSize: '14px',
              padding: '0 20px',
              borderRadius: '24px',
            }}
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
