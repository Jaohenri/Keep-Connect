import {  Typography, Stack, } from "@mui/material";

export default function AppTitle(){
    return(
         <Stack direction='row' justifyContent='center'>
        <Typography fontSize={32} fontWeight='bold' color ='secondary'>
          Keep
        </Typography>
        <Typography  fontSize={32} fontWeight='bold' color ='primary.dark'>
          Connect
        </Typography>
      </Stack>

    )
}