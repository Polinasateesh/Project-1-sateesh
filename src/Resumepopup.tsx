import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
import Sateesh_Polina from './assets/Sateesh_Polina.pdf';
import Sateesh_Polina2 from './assets/Sateesh_Polina2.png';
import Sateesh_Polina1 from './assets/Sateesh_Polina1.png';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: '90%',
    height:'90%', // Adjust the width of the dialog as needed
  },
}));

interface popup {
  open: boolean;
  setOpen: any;
}

const Resumepopup = (props: popup) => {
  const { open, setOpen } = props;

  const handleDownload = () => {
    saveAs(Sateesh_Polina, 'Sateesh_Polina.pdf');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Resume View
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <div> 
            <img src={Sateesh_Polina1} style={{ width: '100%' , height:'100%' }} alt="Image 2" />
            <img src={Sateesh_Polina2} style={{ width: '100%' ,height:'100%'}} alt="Image 1" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleClose}
            startIcon={<CloseIcon style={{ fontSize: '16px' }} />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<DownloadIcon style={{ fontSize: '16px' }} />}
            style={{ marginLeft: '15px' }}
            onClick={handleDownload}
          >
            Download
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Resumepopup;
