import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
  IconButton,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AddAppointmentForm = ({ open, handleClose }) => {

    console.log("AddAppointmentForm called");
  const [formData, setFormData] = useState({
    firstName: 'Anish',
    lastName: 'Rai',
    dateOfBirth: '19/09/1990',
    age: '33',
    gender: 'Male',
    mobileNumber: '9835530198',
    appointmentDateTime: '24 Jul, 2024 | 9:02 AM',
    teleConsultation: false,
    chiefComplaints: '',
    location: '',
    email: '',
    reference: '',
    notifyWhatsapp: true,
    notifySms: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Add Appointment</DialogTitle>
      <Typography variant="body1" gutterBottom />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <Typography variant="body1" gutterBottom />
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <CalendarTodayIcon />
                  </IconButton>
                ),
              }}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                ),
              }}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <Typography variant="body2" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              InputProps={{
                startAdornment: <Typography>+91 |</Typography>,
              }}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Chief Complaints"
              name="chiefComplaints"
              value={formData.chiefComplaints}
              onChange={handleChange}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Email Id"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <TextField
              label="Reference"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
            />
          </FormControl>
          <Typography variant="body1" gutterBottom />
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <FormControlLabel
              control={
                <Checkbox
                  name="teleConsultation"
                  checked={formData.teleConsultation}
                  onChange={handleChange}
                />
              }
              label="Mark as Tele Consultation"
            />
          </FormControl>
          <FormControl sx={{ mb: 2 }} fullWidth margin="normal">
            <FormControlLabel
              control={
                <Checkbox
                  name="notifyWhatsapp"
                  checked={formData.notifyWhatsapp}
                  onChange={handleChange}
                />
              }
              label="Notify via WhatsApp"
            />
            <FormControlLabel sx={{ mb: 2 }}
              control={
                <Checkbox
                  name="notifySms"
                  checked={formData.notifySms}
                  onChange={handleChange}
                />
              }
              label="Notify via SMS"
            />
          </FormControl>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Appointment
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAppointmentForm;
