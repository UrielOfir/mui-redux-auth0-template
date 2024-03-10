import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import ProfileAvatar from "@/app/ProfileAvatar";
import Link from "next/link";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={1.5} />
          <Grid item xs={2}>
            <Typography variant="h3">
              <Link href="/">דף ראשי</Link>
            </Typography>
          </Grid>
          <Grid item xs />

          <Grid mr={2} item>
            <ProfileAvatar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
