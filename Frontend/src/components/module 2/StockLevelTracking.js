import React, { useState, useEffect } from 'react';
import { Box, Typography, Alert } from '@mui/material';
import bg1 from '../images/bg1.webp'; // Import the background image

const StockLevelTracking = () => {
    const [stockLevels] = useState([
        { name: 'Low Stock', value: 5 },  // Example of low stock
        { name: 'Medium Stock', value: 50 },
        { name: 'High Stock', value: 100 },
    ]);

    const [alertShown, setAlertShown] = useState(false); // To control the alert visibility

    // Define a threshold for low stock (e.g., any stock < 10 is considered low)
    const threshold = 10;

    // Check if any stock level is below the threshold and show the alert only once
    useEffect(() => {
        const lowStock = stockLevels.some(level => level.value < threshold);
        if (lowStock && !alertShown) {
            alert('Warning: One or more stock levels are low! Please restock soon.');
            setAlertShown(true);  // Prevent further alerts
        }
    }, [stockLevels, alertShown]);

    return (
        <Box
            sx={{
                padding: 3,
                backgroundImage: `url(${bg1})`, // Set the background image
                backgroundSize: 'cover', // Ensure the background covers the entire area
                backgroundPosition: 'center', // Center the background
                minHeight: '100vh', // Make sure the background covers the full height of the viewport
            }}
        >
            {/* White background box for the content */}
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: '600px',
                    margin: 'auto',
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        mb: 2,
                        color: 'black',
                    }}
                >
                    Stock Level Tracking
                </Typography>
            </Box>

            <Box sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: '700px',
                    margin: 'auto',
                    marginTop: '20px'
                }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Track and monitor stock levels and ensure you're never out of stock.
                </Typography>

                {/* Render an alert if there is low stock */}
                {stockLevels.some(level => level.value < threshold) && (
                    <Alert severity="warning" sx={{ mb: 3 }}>
                        Some stock levels are low! Please restock soon.
                    </Alert>
                )}

                <Box sx={{ marginTop: 3 }}>
                    {stockLevels.map((level, index) => (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            <Typography variant="h6">{level.name}</Typography>
                            <Typography variant="body1">Quantity: {level.value}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default StockLevelTracking;
