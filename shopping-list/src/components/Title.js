import * as React from 'react';
import Box from '@mui/material/Box';

const commonStyles = {
  bgcolor: '#F0F0F0',
  m: 1,
  borderColor: 'text.primary',
  width: '100%',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
};

const titleStyles = {
  margin: '0 auto',
  fontWeight: 'bold',   
  fontSize: '1.5rem',  
};

export default function Title({ title }) {
  return (
      <Box sx={{ ...commonStyles, border: '1px solid' }}>
        <div style={titleStyles}>{title}</div>
      </Box>
  );
}
