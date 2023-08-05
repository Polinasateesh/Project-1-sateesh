import {useState} from 'react'
import Card from '@mui/joy/Card';
import { Box, TextField, Button } from '@mui/material';


const defaultValues={
    firstName:'',
    lastName:'',
    email:'',
    message:''
}

const Contact = () => {
    const [values,setValues]=useState(defaultValues)

    const handleChange=(event:any)=>{
        let inputName=event.target.name
        let inputValue=event.target.value
        setValues({
            ...values,
            [inputName]:inputValue
        })

    }

    const handleSubmit=(event:any)=>{
        event.preventDefault()

        console.log('values',values)

    }

    const handleCancel=()=>{

        setValues(defaultValues)
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <Card >
               
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '40ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{border:'2px solid blue'}}
                >
                     <h3>Contact Form</h3>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            name='firstName'
                            value={values.firstName}
                            onChange={handleChange}


                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            name='lastName'
                            value={values.lastName}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="E-Mail"
                            name='email'
                            value={values.email}
                            onChange={handleChange}

                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Contact"
                            name='message'
                            value={values.message}
                            onChange={handleChange}

                        />

                    </div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Message"
                        multiline
                        maxRows={3}


                    />

                    <div>
                        <Button type="submit" variant="contained" color="warning">Cancel </Button>
                        <Button type='submit' onClick={handleCancel} variant="contained" color="primary" >Submit</Button>

                    </div>


                </Box>

            </Card >
        </form>
    )
}


export default Contact