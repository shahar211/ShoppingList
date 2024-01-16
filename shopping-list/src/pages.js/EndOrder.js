import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { setUserInfo, fetchUserInfo } from '../store/slices/userInfoSlices';
import { useDispatch, useSelector } from 'react-redux';

function EndOrder() {
  const dispatch = useDispatch();
  const userInventoryItems = useSelector((state) => state.userInventoryReducer);
  const {list } = userInventoryItems;
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const userData = {
      username: formData.username,
      address: formData.address,
      email: formData.email,
      items: JSON.stringify(list),
    };

    dispatch(fetchUserInfo({ userData}));

    alert("Cart Saved!")
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Fill in the details:
      </Typography>
      <form>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default EndOrder;
