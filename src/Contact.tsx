import React, { useState } from 'react'; // Import React and { useState }
import { Card, Button, TextField, Grid, CircularProgress, InputAdornment } from '@mui/material';
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

interface FormValues {
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    message: string;
}

const defaultValues: FormValues = {
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    message: '',
};

const ContactForm: React.FC = () => { 
    const [value, setValue] = useState<FormValues>(defaultValues); 
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setValue(defaultValues);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setValue({ ...value, [inputName]: inputValue });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault();
        setIsLoading(true);
        

        
    };
    return (
        <>
            <Card className='card-container'>
                <p className='card-heading'>Contact Form</p>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='firstName'
                                label='First Name'
                                type='text'
                                value={value.firstName}
                                onChange={handleChange}
                                fullWidth
                                required
                                size="small"
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='lastName'
                                label='Last Name'
                                type='text'
                                size="small"
                                value={value.lastName}
                                onChange={handleChange}
                                fullWidth
                                required
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='contact'
                                label='Contact Number'
                                type='tel'
                                required
                                size="small"
                                value={value.contact}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                                inputProps={{
                                    maxLength: 10,
                                }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='email'
                                required
                                label='Email Address'
                                type='email'
                                size="small"
                                value={value.email}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='message'
                                label='Message'
                                type='text'
                                // required
                                size="small"
                                value={value.message}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                                multiline
                                inputProps={{ maxLength: 4000 }}
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                    <div className='button-container'>
                        <Button variant='outlined' color='warning' onClick={handleClose} startIcon={
                            <CloseIcon style={{ fontSize: '16px' }} />
                        }>
                            Cancel
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            disabled={isLoading}
                            startIcon={
                                <SendIcon style={{ fontSize: '16px' }} />
                            }
                            style={{ marginLeft: '15px' }}
                        >
                            {isLoading ? <CircularProgress size={24} /> : 'Submit'}
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default ContactForm;
