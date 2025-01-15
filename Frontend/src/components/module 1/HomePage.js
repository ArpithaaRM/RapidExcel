import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import bg1 from '../images/bg1.webp'; // Update this path to the actual image location

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const HomePage = () => {
  const logoUrl = 'https://images.vexels.com/media/users/3/137615/isolated/svg/5af2a9cbd8cd93aa90889fbc05656cb5.svg';
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle the navigation to the registration page
  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',  // Ensure content is centered
          minHeight: '100vh',  // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',  // Center content vertically
          alignItems: 'center',  // Center content horizontally
        }}
      >
        {/* Background with Darker Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,  // Make sure background is behind content
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.67)', // Darker semi-transparent black overlay
            }}
          />
        </Box>

        {/* Centered Content Section */}
        <Container sx={{ zIndex: 1 }}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item marginBottom='200px'>
              <Grid item>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={logoUrl}
                    alt="Logo"
                    style={{ marginRight: '20px', borderRadius: '50px', width: '150px', height: '150px' }}
                  />
                  <Typography variant="h3" fontWeight="bold" marginLeft='20px' fontSize={'100px'} sx={{ color: 'rgb(255, 255, 255)' }}>
                    RapidXcel <br />Logistics
                  </Typography>
                </Box>
              </Grid>

              <Grid item >
                <Typography variant="h6" fontWeight="bold" marginLeft='200px' fontSize={'20px'} sx={{ mt: 2, mb: 4, color: 'rgba(255, 255, 255, 0.9)', wordSpacing: '3.0em', letterSpacing: '0.1em' }}>
                  ^Swift   ^Reliable   ^Transparent
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Box display="flex" justifyContent="center" gap={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.5rem', // Increase font size
                    padding: '16px 32px', // Increase padding for a larger button
                    minWidth: '200px', // Ensure button width stays consistent
                    mr: 30,
                    ml:10,
                    borderRadius:2 // Moves the button to the left (increase this value for more left space)
                  }}
                  onClick={handleRegisterClick} // Now the function is correctly called onClick
                >
                  Sign in/Register
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.5rem', // Increase font size
                    padding: '16px 32px', // Increase padding for a larger button
                    minWidth: '200px', // Ensure button width stays consistent
                    ml: 20,
                    borderRadius:2 // Moves the button to the left (increase this value for more left space)
                  }}
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
