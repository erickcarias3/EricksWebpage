import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Grow, Dialog, DialogContent, DialogActions, DialogContentText,DialogTitle,Button } from '@mui/material';
import React from 'react';
import { lightGreen } from '@mui/material/colors';

const BasicCard = (props) => {

    const {key, title,description,} = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div>
            <Grow                        
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={ 1000 }>
                <CardActionArea  onClick={handleClickOpen}>
                <Card key={key} sx={{ minWidth: 350, minHeight: 400, maxWidth: 350 , maxHeight: 400, border:"dotted"}}>
                <CardHeader title={title} subheader={"SubHeader"}/>
                    
                        <CardContent sx={{ maxWidth: 300 , maxHeight: 300, minWidth: 300, minHeight: 300}}>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
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
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description + [...new Array(5)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default BasicCard;