import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function SideNavbar() {
  return (
    <Drawer  variant="permanent" anchor="right">
      <List>
        {['Home', 'About'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideNavbar;
