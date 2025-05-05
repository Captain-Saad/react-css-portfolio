import React, { useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';

export default function Education() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  return (
    <Box className={styles.education}>
      <Typography variant="h4" align="center">
        Education
      </Typography>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Degree</TableCell>
            <TableCell>Institution</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Bachelor's in Artificial Intelligence</TableCell>
            <TableCell>Information Technology University</TableCell>
            <TableCell>2027</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}