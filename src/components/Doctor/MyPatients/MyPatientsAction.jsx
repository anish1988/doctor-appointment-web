import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import BaseComponent from 'bootstrap/js/dist/base-component';
import AddAppointmentForm from '../MyPatients/AddAppointmentForm';
// import ParentComponent from './ParentComponent';
// import MyPatientsModel from './MyPatientsModel';

const MyPatientsAction = ({ handleOpen }) => {

  //const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("Anish");
    setAnchorEl(null);
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    handleMenuClose();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <IconButton
        aria-controls='alpha-menu'
        aria-haspopup='true'
        onClick={handleMenuClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='alpha-menu Anish'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem style={{fontSize: 14}} onClick={handleOpenModal} >
          <div> <DeleteIcon/></div>  
          <div>Add Appointment Anish</div>
        </MenuItem>
        
        <MenuItem style={{fontSize: 14}} onClick={handleClose}>
          <div> <DeleteIcon/></div> 
          <div>Edit Patient</div>
        </MenuItem>
        <MenuItem style={{fontSize: 14}} onClick={handleClose}>
        <div> <DeleteIcon/></div> 
        <div>Upload Documents</div>
        </MenuItem>
        <MenuItem style={{fontSize: 14}} onClick={handleClose}>
        <div> <DeleteIcon/></div> 
        <div>Delete</div>
        </MenuItem>
      </Menu>
      <AddAppointmentForm open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
};
export default MyPatientsAction;
