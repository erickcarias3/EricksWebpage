import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader,Chip , Grow, Dialog, DialogContent, DialogActions, DialogContentText,DialogTitle,Button,Box,IconButton,Paper } from '@mui/material';
import React from 'react';
import { lightGreen } from '@mui/material/colors';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Grid from '@mui/material/Unstable_Grid2';
import CodeIcon from '@mui/icons-material/Code';


const BasicCard = (props) => {

    const {key, title, description, subheader, preview, technologyChips } = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <Box>
            <Grow                        
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={ 1000 }>
                <CardActionArea  onClick={handleClickOpen}>
                <Card key={key} sx={{ minWidth: 350, minHeight: 400, maxWidth: 350 , maxHeight: 400, display:"flex", flexDirection:"column"}}>
                    <CardHeader title={title} subheader={"SubHeader"} sx={{ p:3}}/>
                    
                    <CardContent sx={{ flexGrow:"1", display:"flex", flexDirection:"column"}}>
                        <Grid lx container display="flex" flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} sx={{flexGrow:"1"}}>
                            <Grid xs={12}>
                                    <Typography  color="text.secondary" align='center'>
                                        {description}
                                    </Typography>
                            </Grid>
                        
                            <Grid container display="flex" justifyContent={"space-around"} gap={1} xs={12} >
                            
                                {
                                    technologyChips.map((data, index) => (  
                                            <Chip key={index} label={data}/>
                                ))
                                }
                               
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </CardActionArea>

            </Grow>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth = 'md'

                
            >
                <Box sx={{ display:"flex", alignItems: 'center', justifyContent:"center", }}>
                    <Box sx={{flexGrow:"50",display:"flex",justifyContent:"center", alignItems:"center"}}>
                        <Typography sx={{ p:1}} component="span" variant="h3" align="center" >
                            {title}         
                        </Typography>
                    </Box>
                    <Box sx={{flexGrow:"1",display:"flex", justifyContent:"flex-end", flexDirection:'row'}}>
                        <IconButton onClick={handleClose} >
                            <CloseRoundedIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Box>

                <DialogContent dividers>

                    <Grid container >
                        <Grid xs={12} sm={8} md={9}>
                            <Typography component="h1" variant="h5" gutterBottom sx={{fontStyle: 'italic', color:"grey.100"}}>
                                {"Details"}
                            </Typography>
                            <Box sx={{fontStyle: 'italic', color:"grey.400"}} >{description + [...new Array(2)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                            </Box>
                        </Grid>
                        <Grid container display="flex" flexDirection={"column"} justifyContent={"space between"}  xs={12} sm={4} md={3} >
                            <Grid xs={12}  >
                                <Typography component="h1" variant="h5" align="center" sx={{fontStyle: 'italic', color:"grey.100"}}>
                                        {"Technologies"}
                                </Typography>
                            </Grid>
                            <Grid xs={12} container display="flex"  justifyContent={"center"}  alignContent = {"center"} alignItems={"center"} gap={"2px"}  sx={{ paddingTop:"2em", paddingBottom:"1em"}}>
                            
                                
                                {
                                    technologyChips.map((data, index) => (  
                                        
                                            <Chip key={index} label={data}/>
                                        
                                ))
                                }
                            
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </DialogContent>

                <DialogActions sx={{display:"flex",justifyContent:"center"}}>
                    <Button onClick={handleClose} variant="outlined" color="secondary" autoFocus>
                       demo
                       <CodeIcon />
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default BasicCard;