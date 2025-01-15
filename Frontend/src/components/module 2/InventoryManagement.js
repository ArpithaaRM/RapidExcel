import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, CssBaseline, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import bg1 from '../images/bg1.webp'; // Background image

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const InventoryManagement = () => {
    // Dummy Data for Stock Management Pie Chart
    const stockManagementData = {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [
            {
                data: [10, 5, 3], // Quantity of products
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99'], // Colors for each product
                hoverBackgroundColor: ['#ff6666', '#3399ff', '#66cc66'],
            },
        ],
    };

    // Dummy Data for Stock Level Tracking Pie Chart
    const stockLevelTrackingData = {
        labels: ['Low Stock', 'Medium Stock', 'High Stock'],
        datasets: [
            {
                data: [30, 50, 20], // Stock levels percentages
                backgroundColor: ['#ffcc99', '#ffb366', '#ff6666'], // Colors for each level
                hoverBackgroundColor: ['#ff9933', '#ff8000', '#ff3333'],
            },
        ],
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Sidebar for Navigation */}
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Sidebar background
                        color: 'white',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <ListItem button component={Link} to="/stock-management">
                        <ListItemText
                            primary="Stock Management"
                            sx={{
                                fontSize: '3.25rem', // Increase the font size
                                color: 'white', // Change text color to white
                            }}
                        />
                    </ListItem>
                    <ListItem button component={Link} to="/stock-level-tracking">
                        <ListItemText
                            primary="Stock Level Tracking"
                            sx={{
                                fontSize: '3.25rem', // Increase the font size
                                color: 'white', // Change text color to white
                            }}
                        />
                    </ListItem>
                </List>

            </Drawer>

            {/* Main Content Area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.9)', // Main content background
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingTop: 3,
                    paddingBottom: 7,
                    paddingLeft: 3,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            mb: 3,
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '10px',
                            borderRadius: '5px',
                            boxShadow: 1,
                            maxWidth: '400px',  // Reduced width
                            width: '100%',  // Ensure it takes the full width up to the maxWidth
                            margin: 'auto',  // Center the box horizontally
                        }}
                    >
                        Inventory Management
                    </Typography>


                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3}}>
                        {/* Stock Management Section */}
                        <Box
                            sx={{
                                width: '45%',
                                backgroundColor: 'white',
                                padding: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Stock Management
                            </Typography>

                            {/* Pie Chart for Stock Management */}
                            <Pie data={stockManagementData} options={{ responsive: true }} />
                        </Box>

                        {/* Stock Level Tracking Section */}
                        <Box
                            sx={{
                                width: '45%',
                                backgroundColor: 'white',
                                padding: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Stock Level Tracking
                            </Typography>

                            {/* Pie Chart for Stock Level Tracking */}
                            <Pie data={stockLevelTrackingData} options={{ responsive: true }} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default InventoryManagement;
