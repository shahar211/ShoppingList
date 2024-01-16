import React from 'react';
import SelectItems from "../components/SelectItems";
import Title from "../components/Title";
import AddItems from "../components/AddItems";
import { Box, Button } from '@mui/material';
import TotalItems from '../components/TotalItems';
import UserCart from '../components/UserCart';
import { Link } from 'react-router-dom';

function ShoppingList() {
  return (
    <Box dir="rtl" sx={{ textAlign: 'center', marginTop: 2, padding: '1rem' }}>
      <Title title={"רשימת קניות"} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '1rem',
          '@media screen and (max-width: 900px)': {
            flexDirection: 'column',
          },
        }}
      >
        <SelectItems />
        <AddItems />
        <Link to="/end-order" style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="medium">
            סיים הזמנה
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '1rem',
          '@media screen and (max-width: 900px)': {
            flexDirection: 'column',
          },
        }}
      >
        <TotalItems />
        <UserCart />
      </Box>
    </Box>
  );
}

export default ShoppingList;
