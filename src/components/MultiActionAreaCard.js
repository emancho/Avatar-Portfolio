import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';

export default function MultiActionAreaCard({ content, button, maxWidth, height }) {
  return (
    <Card sx={{ maxWidth: maxWidth || 345 }}>
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: {height}, // Set a height if you need vertical centering
          textAlign: 'center', // Center text or inline elements
        }}
      >
        {content}
      </CardActionArea>
      <CardActions>
        {button}
      </CardActions>
    </Card>
  );
}
