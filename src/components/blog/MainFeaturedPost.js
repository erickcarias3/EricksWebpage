import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

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
        <Grid item md={5}>
      <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              
              
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.linkText}
            </Typography>
        </Box>
        </Grid>
        <Grid item md={1}/>
        <Grid item md={5}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              
              
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
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
