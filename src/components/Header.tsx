import React from 'react';
import {AppBar, Grid,  Toolbar, Typography} from '@mui/material';
import ProfileAvatar from "@/app/ProfileAvatar";

function Header() {

  return (
    <AppBar position="sticky">
      <Toolbar>
          <Grid container alignItems="center">
              <Grid item>
                  <Typography variant="h6">
                      My Dashboard App
                  </Typography>
              </Grid>
              <Grid item xs />
              <Grid item>
                  <ProfileAvatar />
              </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;