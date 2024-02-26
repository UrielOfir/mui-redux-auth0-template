import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

import {
    Badge,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const drawerWidth: number = 240;

const AppBar1 = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Drawer1 = styled(MuiDrawer, { shouldForwardProp: (prop:any) => prop !== 'open' })(
    ({ theme, open }:any) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 240,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);
const mainListItems = (
    <React.Fragment>
        <ListItem>
            <ListItemIcon>
                fsa
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
            <ListItemIcon>
              fsa
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem>
            <ListItemIcon>
             fas
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem>
            <ListItemIcon>
               afs
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            sfa
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </React.Fragment>
);

function SideNavbar() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
  return (
      <>
          <Drawer1 anchor="left" variant="permanent" open={open}>
              <Toolbar
                  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      px: [1],
                  }}
              >
                  <IconButton onClick={toggleDrawer}>
                      sdf
                  </IconButton>
              </Toolbar>
              <Divider />
              <List component="nav">
                  {mainListItems}

              </List>
          </Drawer1>
          <AppBar1 position="absolute" open={open}>
              <Toolbar
                  sx={{
                      pl: '24px', // keep right padding when drawer closed
                  }}
              >
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer}
                      sx={{
                          marginRight: '36px',
                          ...(open && { display: 'none' }),
                      }}
                  >
                     fasd
                  </IconButton>
                  <Typography
                      component="h1"
                      variant="h6"
                      color="inherit"
                      noWrap
                      sx={{ flexGrow: 1 }}
                  >
                      Dashboard
                  </Typography>
                  <IconButton color="inherit">
                      <Badge badgeContent={4} color="secondary">
                          fss
                      </Badge>
                  </IconButton>
              </Toolbar>
          </AppBar1>

      </>

    // <Drawer  variant="permanent" anchor="right">
    //   <List>
    //     {['Home', 'About'].map((text) => (
    //       <ListItem button key={text}>
    //         <ListItemText primary={text} />
    //       </ListItem>
    //     ))}
    //   </List>
    // </Drawer>
  );
}

export default SideNavbar;
