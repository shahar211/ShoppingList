import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { setProductInput,insertToShoppingList,fetchShoppingList } from '../store/slices/categorySlices';
import { useDispatch, useSelector } from 'react-redux';

export default function AddItems() {
    const [isTextFieldVisible, setTextFieldVisible] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoryReducer);

    const { selectedCategory, productInput } = categories;


    const handleButtonClick = () => {
        setTextFieldVisible(true);
    };
    const handleSavedClick = () => {

        dispatch(insertToShoppingList({selectedCategory,inputValue}))

    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        dispatch(setProductInput(event.target.value));
    };

    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" size="medium" onClick={handleButtonClick}>
                הוסף מוצר
            </Button>

            {isTextFieldVisible && (
                <TextField
                    id="standard-basic"
                    label="שם המוצר"
                    variant="standard"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            )}
            <Button variant="contained" size="medium" onClick={handleSavedClick} disabled={inputValue.trim() === ''}>
                שמור
            </Button>

        </Box>
    );
}
