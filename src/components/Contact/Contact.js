import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Mapview from "./Mapview";



const Contact = () => {
  return (
    <Grid2 container row spacing={3} >
      <Grid2 xs={12} lg={6}>
        <Grid2 xs={12} > 
          Get In Touch 
        </Grid2>
        <Grid2 xs={12} >
          <TextField id="name" label="Name" variant="outlined" fullWidth/>
        </Grid2>
        <Grid2 xs={12}>
          <TextField id="email" label="Email" variant="outlined" fullWidth/>
        </Grid2>
        <Grid2 xs={12}>
          <TextField id="message" label="Message"  rows={4} multiline fullWidth/>
        </Grid2>
        <Grid2 xs={12}>
          <Button variant="outlined">Send Message</Button>
        </Grid2>
      </Grid2>
      <Grid2 xs={12} lg ={6}>
        <Mapview/>
      </Grid2>

        
    </Grid2>
  );
}

export default Contact;