// App.js or ParentComponent.js
import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import MenuComponent from '../MyPatients/MyPatientsAction';
import ModalContent from './ModalContent';

const ParentComponent = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <MenuComponent props={props} handleOpen={handleOpen} />
    { /* <ModalComponent open={open} handleClose={handleClose} /> */}
    </div>
  );
};

export default ParentComponent;
