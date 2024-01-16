import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoppingList } from '../store/slices/categorySlices';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct } from '../store/slices/userInventorySlice';

function TotalItems() {
    const categories = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();

    const { list, loading, selectedCategory } = categories;
    const handleAddToCart = (item) => {
        dispatch(addProduct({ selectedCategory, item }));
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {loading !== undefined && !loading ? (
                <List dense>
                    {list.map((item) => (
                        <ListItem key={item.id}>
                            {selectedCategory && (
                                <>
                                    <ListItemText>
                                        <strong>{selectedCategory}:</strong> {item[selectedCategory]}
                                    </ListItemText>
                                    <IconButton onClick={() => handleAddToCart(item[selectedCategory])} color="primary">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </>
                            )}
                        </ListItem>
                    ))}
                </List>
            ) : (
                <p>List is either undefined or empty.</p>
            )}
        </Box>
    );
}

export default TotalItems;
