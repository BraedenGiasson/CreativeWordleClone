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
import { Modal } from '@mui/base';
import ColorPicker from '../ColorPicker/ColorPicker';
import zIndex from '@mui/material/styles/zIndex';
import Preferences from '../../../utils/updatePreferences';
import { PreferenceName } from '../../../utils/preferenceName';
import { Preference } from '../../../utils/preference';


export default function ColorButton({ color, colorName }) {
    const [open, setOpen] = useState(false);
    let [state, setState] = useState(color);
    let [newColor, setNewColor] = useState(state);
    
    function handleState(newState) {
        setState(newState);
    }

    const handleSetNewColor = () => {
        setNewColor(state);
        setOpen(false);

        Preferences.setColorPreference(colorName, state)
    }

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Fragment>
        <Button onClick={handleOpen}
        className='change-color-btn'
        sx={{
            backgroundColor: newColor,
            height: 25,
            "&:hover": {
                backgroundColor: newColor
            },
            "&:focus": {
                backgroundColor: newColor
            },
            "&:active": {
                backgroundColor: newColor
            }
        }}></Button>

        <Dialog
        open={open}
        onClose={handleClose}
        >
        <DialogTitle id='settings-title'>Change Color</DialogTitle>
        <DialogContent>
          <ColorPicker pickedColor={newColor} changeColor={handleState}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSetNewColor}>Save</Button>
        </DialogActions>
      </Dialog>
      </Fragment>
    );
  }
  