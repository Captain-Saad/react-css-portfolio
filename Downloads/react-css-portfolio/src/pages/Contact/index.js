import React, { useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Contact.module.css';

export default function Contact() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Contact');
  }, [setPageTitle]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert('Form submitted successfully!');
      console.log(values);
    },
  });

  return (
    <Box className={styles.contact}>
      <Typography variant="h4" align="center">
        Contact Me
      </Typography>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('name')}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          {...formik.getFieldProps('message')}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}