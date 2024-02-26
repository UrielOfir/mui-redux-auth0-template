import React from 'react';
import {AppBar, Grid,  Toolbar, Typography} from '@mui/material';
import ProfileAvatar from "@/app/ProfileAvatar";
import {useSession} from "next-auth/react";
const image_url = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
function Header() {
    const { data: session }: {data: any} = useSession()

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
                  <ProfileAvatar imageUrl={(session && session.user.image) || image_url}/>
              </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;