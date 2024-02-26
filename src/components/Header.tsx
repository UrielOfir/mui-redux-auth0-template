import React from 'react';
import {AppBar, Grid,  Toolbar, Typography, Switch, FormControlLabel} from '@mui/material';
import ProfileAvatar from "@/app/ProfileAvatar";
import {useThemeContext} from "@/context/theme-toggle";

function Header() {
    const { toggleTheme } = useThemeContext();

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
                  <FormControlLabel
                      control={<Switch defaultChecked onChange={toggleTheme} />}
                      label="Dark Mode"
                  />
              </Grid>

                  <Grid mr={2} item>

                  <ProfileAvatar />
              </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;