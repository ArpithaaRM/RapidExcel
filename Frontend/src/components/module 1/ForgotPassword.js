import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Link,
  CircularProgress,
} from "@mui/material";
import bg1 from "../images/bg1.webp"; // Replace with your actual image path

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(""); // To handle error messages
  const [isReset, setIsReset] = useState(false); // To track whether user is resetting password
  const [codeValid, setCodeValid] = useState(false); // To track whether code is valid

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecoverySubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.email) {
      setError("Email is required!");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors

    // Simulate sending recovery code (Replace with actual API call)
    setTimeout(() => {
      setLoading(false);
      alert("Recovery email sent! Please check your inbox for the code.");
      setIsReset(true); // After sending the recovery email, show reset password form
    }, 2000);
  };

  const handleCodeVerification = (e) => {
    e.preventDefault();

    // Simulate verifying code (Replace with actual API call)
    if (formData.code === "123456") {
      setCodeValid(true);
      setError("");
      alert("Code verified! You can now reset your password.");
    } else {
      setError("Invalid code! Please check the email for the correct code.");
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.password) {
      setError("Password is required!");
      return;
    }

    if (!codeValid) {
      setError("Please verify the code before resetting the password.");
      return;
    }

    // Simulate password reset (Replace with actual API call)
    setTimeout(() => {
      setLoading(false);
      alert("Your password has been successfully reset.");
    }, 2000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent overlay
          zIndex: -1,
        }}
      />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          zIndex: 1,
          padding: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // White background with transparency
          borderRadius: 2,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Forgot Password
          </Typography>

          {!isReset ? (
            // Recover Password Form
            <Box component="form" onSubmit={handleRecoverySubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                size="small"
                error={!!error} // Show error if there's a message
                helperText={error}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading} // Disable the button while loading
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Send Recovery Email"}
              </Button>
              <Typography variant="body2" align="center">
                <Link
                  to="/reset-password"
                  underline="hover"
                  sx={{ marginLeft: 1 }}
                  onClick={() => setIsReset(true)}
                >
                  Go to Reset Password
                </Link>
              </Typography>
            </Box>
          ) : (
            // Reset Password Form
            <Box component="form" onSubmit={handleCodeVerification} noValidate sx={{ mt: 1 }}>
              <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                Enter the code sent to your email
              </Typography>
              <TextField
                fullWidth
                required
                id="code"
                label="Enter Code"
                name="code"
                type="text"
                value={formData.code}
                onChange={handleChange}
                margin="normal"
                size="small"
                error={!!error} // Show error if there's a message
                helperText={error}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading} // Disable the button while loading
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Verify Code"}
              </Button>

              {codeValid && (
                <Box component="form" onSubmit={handleResetSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="New Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                    size="small"
                    error={!!error} // Show error if there's a message
                    helperText={error}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={loading} // Disable the button while loading
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Reset Password"}
                  </Button>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
