import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          My Dashboard App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;