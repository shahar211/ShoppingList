import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

function UserCart() {
  const userInventory = useSelector((state) => state.userInventoryReducer);
  const { list, loading } = userInventory;
  const categoryValues = Object.values(list);


  let totalCount = 0;

  categoryValues.forEach(category => {

    if (Array.isArray(category)) {
      // Adding the length of the array to the total count
      totalCount += category.length;
    }
  });

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <span style={{ color: 'blue', fontWeight: 'bold' }}>סה"כ מוצרים : {totalCount}</span>
      {loading !== undefined && !loading ? (
        typeof list === 'object' ? (
          Object.keys(list).map((key, index) => (
            <ListItem key={index} component="div" disablePadding>
              <ListItemButton>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  {key}:
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: '16px',
                    color: 'black',
                  }}
                >
                  {list[key].map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      {itemIndex > 0 && ', '}
                      {item}
                    </React.Fragment>
                  ))}
                </Typography>

              </ListItemButton>
            </ListItem>
          ))
        ) : (
          null
        )
      ) : null}
    </Box>
  );

}

export default UserCart;
