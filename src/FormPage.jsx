import { Button, Typography, Container, Stack, TextField,IconButton} from "@mui/material";
import AppTitle from "./AppTitle";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router";
import {useState} from "react";


export default function FormPage(){

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target)
        const data = Object.fromEntries(form)

        fetch('http://localhost:4000/contacts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)    
        })
        .then(res => res.json())
        .then(data => {console.log(data); window.alert('Success'); event.target.reset()})
        .catch(error => console.log(error)) 
    }


        return (
    
        <Container 
        sx={{ 
            minHeight: "100vh", 
            display: "flex", 
            flexDirection:'column',
            justifyContent: "center", 
        }}
        >   
        <AppTitle/>

        <Button onClick={goBack} startIcon={<KeyboardBackspaceIcon />} sx={{width: 80}}>Back</Button>

        <Typography fontSize={32} fontWeight='bold'>New contact</Typography>

        <form onSubmit={handleSubmit}>
        <Stack gap={2} mb={4}>
            <TextField  label="Name" variant="filled" name = "name"/>
            <TextField  label="E-mail" variant="filled" name = "email"/>
            <TextField  label="Phone" variant="filled" name = "phone"/>
        </Stack>

        <Button variant ='contained' type= "submit" fullWidth>Register</Button>
        </form>

        </Container>
    )
}