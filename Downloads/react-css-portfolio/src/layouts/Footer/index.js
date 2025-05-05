import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Saad Ahmad Khan. All rights reserved.
      </Typography>
    </Box>
  );
}