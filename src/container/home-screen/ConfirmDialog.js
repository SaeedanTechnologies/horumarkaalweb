import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmDialog = ({ open, handleClose, handleConfirm }) => {
    useEffect(() => {
        if (open) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [open]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
      Do you accept payment? Two steps will pop up on your moxbile. Mo ogoshahay bixinta lacagta? Laba fariimood baa kaaga soo baxaya mobilka.
      </DialogTitle>
      <DialogContent>
        {/* You can add more content here if needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No- Maya</Button>
        <Button onClick={handleConfirm} autoFocus>
        Yes - Haa 
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
