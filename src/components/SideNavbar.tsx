import React from 'react';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 150;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  backgroundColor: alpha("#ffffff", 0),
}));

function SideNavbar() {
  const theme = useTheme();

  return (
    <Drawer
    sx={{
      
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
      },
    }}
    variant="persistent"
    anchor="right"
    
    open={true}
  >
    <DrawerHeader>
      <Typography variant="h6" noWrap>
        לוייתן
      </Typography>
    </DrawerHeader>
    <Divider />
    <List>
      {['הגשת בקשה', 'פתיחת תיק', 'תשלום שובר', 'בדיקת קיומו של חוב מזונות', 'עדכון משפחת עו"ד'].map((text, index) => (
        <ListItem key={text} disablePadding >
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
  );
}

export default SideNavbar;
