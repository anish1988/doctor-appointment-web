import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Paper } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { WhatsApp, Sms } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';




const defaultValues = {
    id: 'hjjd7888',
    title: '',
    allDay: true,
    
    extendedProps: { desc: '' },
  };

  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    dob: yup.date().required('Date of Birth is required').nullable(),
    gender: yup.string().required('Gender is required'),
    mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    appointmentDateTime: yup.date().required('Appointment Date & Time is required').nullable(),
  });



const AddAppointmentForm = () => {

    const { reset, formState, watch, control, getValues } = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema),
      });

      const {  errors } = formState;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: null,
    age: '',
    gender: '',
    mobile: '',
    appointmentDateTime: null,
  });

  useEffect(() => {
    if (formData.dob) {
      const today = new Date();
      const birthDate = new Date(formData.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData((prevData) => ({ ...prevData, age: age.toString() }));
    }
  }, [formData.dob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }));
  };

  const handleShare = (method) => {
    const appointmentDetails = `
      Appointment Details:
      Patient Name: ${formData.firstName} ${formData.lastName}
      DOB: ${formData.dob}
      Age: ${formData.age}
      Gender: ${formData.gender}
      Mobile: ${formData.mobile}
      Appointment Date & Time: ${formData.appointmentDateTime}
    `;
    const encodedMessage = encodeURIComponent(appointmentDetails);

    if (method === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodedMessage}`);
    } else if (method === 'sms') {
      window.open(`sms:?body=${encodedMessage}`);
    }
  };

  return (
    /* sx={{ padding: 4, maxWidth: 600, margin: 'auto', mt: 5 }} */
    <Paper elevation={16} tabindex="-1"  style={{transform: 'none',transition:'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Add Appointment
        </Typography>
        <div class="patient-details-field-container">
              <div class="MuiAutocomplete-root autocomplete-field css-xxees4">
                <div class="add-appt-textField-container">
                  <label for="First Name*" class="add-appt-textField-label">First Name*</label>
                  <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root add-appt-textField css-1q13txl" data-testid="firstName">
                    <div class="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiAutocomplete-inputRoot css-rb2hiw">
                    <TextField aria-invalid="false" autocomplete="new-password" id="Last Name" placeholder="Last Name" type="text" className='MuiInputBase-input MuiInput-input css-mnn31'/>
                    </div>
                  </div>
                  <div class="errorBox"></div>
                </div>
              </div>
              <div class="add-appt-textField-container">
                <label for="Last Name" class="add-appt-textField-label">Last Name</label>
                <div class="MuiFormControl-root MuiTextField-root add-appt-textField css-1ltnv11" data-testid="lastName">
                  <div class="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-10iatzg">
                  <TextField aria-invalid="false" autocomplete="new-password" id="Last Name" placeholder="Last Name" type="text" className='MuiInputBase-input MuiInput-input css-mnn31'/>
                   
                  </div>
                </div>
                <div class="errorBox"></div>
              </div>
            </div>
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            value={formData.dob}
            onChange={(date) => handleDateChange(date, 'dob')}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Gender"
          name="gender"
          select
          value={formData.gender}
          onChange={handleChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        <TextField
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Appointment Date & Time"
            value={formData.appointmentDateTime}
            onChange={(date) => handleDateChange(date, 'appointmentDateTime')}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          color="primary"
          sx={{ m: 1 }}
          onClick={() => handleShare('whatsapp')}
          startIcon={<WhatsApp />}
        >
          Share via WhatsApp
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ m: 1 }}
          onClick={() => handleShare('sms')}
          startIcon={<Sms />}
        >
          Share via SMS
        </Button>
      </Box>
    </Paper>
  );
};

export default AddAppointmentForm;
