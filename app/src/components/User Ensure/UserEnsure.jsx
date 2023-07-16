import { useState, Fragment, forwardRef, Component as comp } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Preferences from '../../utils/updatePreferences';
import { PreferenceName } from '../../utils/preferenceName';
import { DefaultColorPreference } from '../../utils/defaultColorPreferences';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function UserEnsure({ setCorrectColor, setInWordColor, setIncorrectColor }) {
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleYesClose = () => {
      Preferences.resetColorPreferences();
      resetColors();
      setOpen(false);
    };
    
    const resetColors = () => {
      setCorrectColor(DefaultColorPreference.CorrectGuess);
      setInWordColor(DefaultColorPreference.InWordGuess);
      setIncorrectColor(DefaultColorPreference.IncorrectGuess);
    };

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>
        Reset Colors
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id='settings-title'>Reset Colors</DialogTitle>

        <DialogContent>
            <DialogContentText >
                Are you sure you want to reset the color options? There&apos;s no going back...
            </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleYesClose}>Yes</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}