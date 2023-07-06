import './Settings.css'

import { useState, Fragment, forwardRef, Component as comp } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import ColorPicker from './ColorPicker/ColorPicker';
import ColorButton from './ColorButton/ColorButtonModal';
import { auto } from '@popperjs/core';
import { Preference } from '../../utils/preference';
import Preferences from '../../utils/updatePreferences';
import { PreferenceName } from '../../utils/preferenceName';
import UserEnsure from '../User Ensure/UserEnsure';
import { DefaultColorPreference } from '../../utils/defaultColorPreferences';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MaxWidthDialog() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <Fragment>
      <Button id='settings_gear' onClick={handleClickOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="4 4 24 24" width="34" class="game-icon" data-testid="icon-settings"><path fill="white" d="M25.52 17.2534C25.5733 16.8534 25.6 16.44 25.6 16C25.6 15.5734 25.5733 15.1467 25.5067 14.7467L28.2133 12.64C28.4533 12.4534 28.52 12.0934 28.3733 11.8267L25.8133 7.40004C25.6533 7.10671 25.32 7.01338 25.0267 7.10671L21.84 8.38671C21.1733 7.88004 20.4667 7.45338 19.68 7.13338L19.2 3.74671C19.1467 3.42671 18.88 3.20004 18.56 3.20004H13.44C13.12 3.20004 12.8666 3.42671 12.8133 3.74671L12.3333 7.13338C11.5467 7.45338 10.8267 7.89338 10.1733 8.38671L6.98665 7.10671C6.69332 7.00004 6.35998 7.10671 6.19998 7.40004L3.65332 11.8267C3.49332 12.1067 3.54665 12.4534 3.81332 12.64L6.51998 14.7467C6.45332 15.1467 6.39998 15.5867 6.39998 16C6.39998 16.4134 6.42665 16.8534 6.49332 17.2534L3.78665 19.36C3.54665 19.5467 3.47998 19.9067 3.62665 20.1734L6.18665 24.6C6.34665 24.8934 6.67998 24.9867 6.97332 24.8934L10.16 23.6134C10.8267 24.12 11.5333 24.5467 12.32 24.8667L12.8 28.2534C12.8667 28.5734 13.12 28.8 13.44 28.8H18.56C18.88 28.8 19.1467 28.5734 19.1867 28.2534L19.6667 24.8667C20.4533 24.5467 21.1733 24.12 21.8267 23.6134L25.0133 24.8934C25.3067 25 25.64 24.8934 25.8 24.6L28.36 20.1734C28.52 19.88 28.4533 19.5467 28.2 19.36L25.52 17.2534ZM16 20.8C13.36 20.8 11.2 18.64 11.2 16C11.2 13.36 13.36 11.2 16 11.2C18.64 11.2 20.8 13.36 20.8 16C20.8 18.64 18.64 20.8 16 20.8Z"></path></svg>
      </Button>
      
      <Dialog
      id='dialog-window'
        fullWidth={fullWidth}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id='settings-title'>Settings</DialogTitle>

        <DialogContent>
          <div className='settings-section'>
            <DialogContentText className='dialog-section-title'>
                Theme
            </DialogContentText>
            
            <Box
                className='settings-item-row'
                noValidate
                component="switch"
                sx={{
                display: 'flex',
                flexDirection: 'row',
                //   m: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                }}
            >
                <InputLabel className='section-item-name'>
                Dark Theme
                </InputLabel>
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
            </Box>
          </div>
          
          <div className='settings-section'>
            <DialogContentText className='dialog-section-title'>
                Colors
            </DialogContentText>

            <Box
                className='settings-item-row'
                noValidate
                component="div"
                sx={{
                display: 'flex',
                flexDirection: 'row',
                //   m: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                }}
            >
                <InputLabel className='section-item-name'>
                Correct Guess
                </InputLabel>

                <div className='setting-section'>
                    <ColorButton color={Preferences.getColorPreference(PreferenceName.CorrectGuess) ?? DefaultColorPreference.CorrectGuess}
                    colorName={PreferenceName.CorrectGuess}/>
                </div>
            </Box>

            <Box
                className='settings-item-row'
                noValidate
                component="div"
                sx={{
                display: 'flex',
                flexDirection: 'row',
                //   m: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                }}
            >
                <InputLabel className='section-item-name'>
                In-Word Guess
                </InputLabel>

                <div className='setting-section'>
                    <ColorButton color={Preferences.getColorPreference(PreferenceName.InWordGuess) ?? DefaultColorPreference.InWordGuess}
                    colorName={PreferenceName.InWordGuess}/>
                </div>
            </Box>
            
            <Box
                className='settings-item-row'
                noValidate
                component="div"
                sx={{
                display: 'flex',
                flexDirection: 'row',
                //   m: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
                }}
            >
                <InputLabel className='section-item-name'>
                Incorrect Guess
                </InputLabel>

                <div className='setting-section'>
                    <ColorButton color={Preferences.getColorPreference(PreferenceName.IncorrectGuess) ?? DefaultColorPreference.IncorrectGuess}
                    colorName={PreferenceName.IncorrectGuess}/>
                </div>
            </Box>
          </div>
        </DialogContent>
        <DialogActions style={{
          justifyContent: 'space-between'
        }}>
          <UserEnsure/>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
