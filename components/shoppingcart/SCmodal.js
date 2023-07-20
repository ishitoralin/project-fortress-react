import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React from 'react';

export default function SCmodal(props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle id="alert-dialog-title">{'確定要刪除嗎?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          產品數量為0時將刪除物品，確定要刪除嗎?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>取消</Button>
        <Button onClick={props.handleClose}>確定</Button>
      </DialogActions>
    </Dialog>
  );
}
