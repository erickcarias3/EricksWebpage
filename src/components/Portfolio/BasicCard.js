import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Grow } from '@mui/material';
import React from 'react';

const BasicCard = (props) => {

    const {key, title,description,} = props

    return(
        <Grow                        
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        timeout={ 1000 }>
            <CardActionArea>
            <Card key={key} >
            <CardHeader title={title} subheader={"SubHeader"}/>
                
                    <CardContent sx={{ maxWidth: 300 , maxHeight: 300, minWidth: 300, minHeight: 300}}>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                
            </Card>
            </CardActionArea>
        </Grow>
    )
}

export default BasicCard;