// ModalContent.js
import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import AddAppointmentForm from './AddAppointmentForm';

const ModalContent = ({ open, handleClose }) => {
    return (
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box 
            sx={{
              position: 'absolute',
              top: '60%',
              left: '60%',
              transform: 'translate(-36%, -54%)',
              width: 800,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <div >
               <AddAppointmentForm  />
            </div>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      );
    };
    
export default ModalContent;
