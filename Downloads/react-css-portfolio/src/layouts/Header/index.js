import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    alert('Logout clicked');
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <div>
          <IconButton onClick={handleMenu} color="inherit">
            <Avatar alt="Profile" src="/assets/profile.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}