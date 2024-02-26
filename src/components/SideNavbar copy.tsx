import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useThemeContext } from '@/context/theme-toggle';

function SideNavbar() {
  const { drawerOpen, toggleDrawerOpen } = useThemeContext();
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      open={drawerOpen}
      onClose={() => toggleDrawerOpen(false)}
    >
      <List>
        {['Home', 'About'].map((text) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideNavbar;
