import React, { useEffect } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';

export default function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <Box className={styles.home}>
      <Avatar alt="Profile" src="/assets/profile.jpg" sx={{ width: 150, height: 150, mx: 'auto' }} />
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>
        Saad Ahmad Khan
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary">
        Web Developer | Designer | Programmer
      </Typography>
    </Box>
  );
}