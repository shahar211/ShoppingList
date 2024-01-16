import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoppingList, setSelectedCategory } from '../store/slices/categorySlices';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

function SelectItems() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer);

  const { list, loading,insertSucess } = categories;

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch,insertSucess]);

  const [selectedCategory, setCurrentCategory] = useState('');

  const handleChange = (event) => {
    //set the selected category to redux and to state 
    const category = event.target.value;
    setCurrentCategory(category);
    dispatch(setSelectedCategory(category));
  };

  return (
    <Box >
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Category"
          onChange={handleChange}
          disabled={loading} // Disable select while loading
        >
          <MenuItem value="">
          </MenuItem>
          {loading !== undefined && !loading ? (
            Object.keys(list[0]).map((key) => (
              <MenuItem key={key} value={key}>
                {key}
              </MenuItem>
            ))
          ) : null}
        </Select>
        <FormHelperText>Select a category</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default SelectItems;
