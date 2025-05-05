import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './SideNav.module.css';

export default function SideNav() {
  const navigate = useNavigate();
  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Education', path: '/education' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          top: { xs: '64px', md: '80px' }, // Increased to 80px on desktop, 64px on mobile
        },
      }}
    >
      <List className={styles.drawer}>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}