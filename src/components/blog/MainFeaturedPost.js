import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TypeWriter from './TypeWriter';
import { Avatar } from '@mui/material';

function MainFeaturedPost(props) {
  const { post } = props;
  

  return (
    <Paper
      sx={{
        position: 'relative',
      
        color: 'white',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      elevation ={4}
    >
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item xs={12} md={6}>
        <Box
            sx={{
              display:"flex",
              alignItems: 'center',
              flexDirection:'column',
              position: 'relative',
              p: { xs: 6, md: 8 },
              flexGrow: 3,

            
            }}
          >
          <Avatar variant={"circular"} alt={post.imageText} src={post.srcText} style={{
              width: 200,
              height: 200,
            }} />
        </Box>
        </Grid>   
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display:"flex",
              position: 'relative',
              alignItems: 'center',
              flexDirection:'column',

              p: { xs: 2, sm: 2 , md: 7}
            }}
          >
            <Typography sx={{letterSpacing: 3, fontWeight: 500, fontFamily:"Helvetica" }} component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
              <TypeWriter typeData={post.typeWriter} />
            <Typography sx={{fontWeight: 'light', fontFamily:"Helvetica", }} variant="h6" color="grey.500" paragraph>
              {post.description}
            </Typography> 
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
