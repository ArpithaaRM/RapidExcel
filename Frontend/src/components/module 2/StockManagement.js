import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import bg1 from '../images/bg1.webp'; // Import your background image

const StockManagement = () => {
    const [stocks, setStocks] = useState([
        { id: 1, name: 'Product A', price: 100, quantity: 10, weight: 5 },
        { id: 2, name: 'Product B', price: 150, quantity: 5, weight: 7 },
        { id: 3, name: 'Product C', price: 200, quantity: 3, weight: 2 },
    ]);

    const [newStock, setNewStock] = useState({
        name: '',
        price: '',
        quantity: '',
        weight: '',
    });

    const [isEditing, setIsEditing] = useState(null); // For tracking the editing state
    const [editedStock, setEditedStock] = useState(null); // To store edited stock data

    const handleAddStock = () => {
        const newStockData = { ...newStock, id: Date.now() };
        setStocks([...stocks, newStockData]);
        setNewStock({ name: '', price: '', quantity: '', weight: '' });
    };

    const handleDeleteStock = (id) => {
        setStocks(stocks.filter((stock) => stock.id !== id));
    };

    const handleEditClick = (stock) => {
        setIsEditing(stock.id);
        setEditedStock({ ...stock }); // Pre-fill the editing form with current data
    };

    const handleSaveEdit = () => {
        const updatedStocks = stocks.map((stock) =>
            stock.id === editedStock.id ? editedStock : stock
        );
        setStocks(updatedStocks);
        setIsEditing(null); // Stop editing after save
        setEditedStock(null); // Clear the edited stock
    };

    return (
        <Box
            sx={{
                padding: 3,
                backgroundImage: `url(${bg1})`, // Apply background image
                backgroundSize: 'cover', // Ensure background covers the entire area
                backgroundPosition: 'center', // Center the image
                minHeight: '100vh', // Ensure it covers the full height of the page
            }}
        >
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
                Stock Management
            </Typography>


            {/* White box behind the form */}
            <Box
                
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: '600px',
                    margin: 'auto',
                    marginBottom: 3, // Added margin bottom for spacing below the box
                    marginTop: 3,
                }}
            >
                <TextField
                    label="Stock Name"
                    value={newStock.name}
                    onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Price"
                    type="number"
                    value={newStock.price}
                    onChange={(e) => setNewStock({ ...newStock, price: e.target.value })}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Quantity"
                    type="number"
                    value={newStock.quantity}
                    onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Weight"
                    type="number"
                    value={newStock.weight}
                    onChange={(e) => setNewStock({ ...newStock, weight: e.target.value })}
                    fullWidth
                    sx={{ mb: 2 }}
                />

                <Button onClick={handleAddStock} variant="contained" sx={{ mb: 3 }}>
                    Add Stock
                </Button>
            </Box>


            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Stock Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stocks.map((stock) => (
                            <TableRow key={stock.id}>
                                <TableCell>
                                    {isEditing === stock.id ? (
                                        <TextField
                                            value={editedStock.name}
                                            onChange={(e) =>
                                                setEditedStock({ ...editedStock, name: e.target.value })
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        stock.name
                                    )}
                                </TableCell>
                                <TableCell>
                                    {isEditing === stock.id ? (
                                        <TextField
                                            value={editedStock.price}
                                            onChange={(e) =>
                                                setEditedStock({ ...editedStock, price: e.target.value })
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        stock.price
                                    )}
                                </TableCell>
                                <TableCell>
                                    {isEditing === stock.id ? (
                                        <TextField
                                            value={editedStock.quantity}
                                            onChange={(e) =>
                                                setEditedStock({ ...editedStock, quantity: e.target.value })
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        stock.quantity
                                    )}
                                </TableCell>
                                <TableCell>
                                    {isEditing === stock.id ? (
                                        <TextField
                                            value={editedStock.weight}
                                            onChange={(e) =>
                                                setEditedStock({ ...editedStock, weight: e.target.value })
                                            }
                                            size="small"
                                        />
                                    ) : (
                                        stock.weight
                                    )}
                                </TableCell>
                                <TableCell>
                                    {isEditing === stock.id ? (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSaveEdit}
                                        >
                                            Save
                                        </Button>
                                    ) : (
                                        <>
                                            <IconButton onClick={() => handleEditClick(stock)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => handleDeleteStock(stock.id)}>
                                                <Delete />
                                            </IconButton>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default StockManagement;
