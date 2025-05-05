import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Projects.module.css';

export default function Projects() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  return (
    <Box className={styles.projects}>
      <Typography variant="h4" align="center">
        Projects
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h6">Car Rental Management System</Typography>
              <Typography variant="body2" color="text.secondary">
                I created this project in C++
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}