import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { Typography } from '@mui/material';


const sections = [
  { title: 'Resume', url: '#' },
  { title: 'Portfolio', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Contact', url: '#' },
  { title: 'Extra', url: '#' },

];

const mainFeaturedPost = {
  title: 'Hello My Name is Erick Carias',
  description:
    "I am a Software Enginer based in the greater Sacramento Area",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Insert Image',
};

const featuredPosts = [
  {
    title: 'What I Do',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  
];




export default function Blog() {
  return (

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={1} >
            <Grid item xs={12} md={12} >
              <Typography pl={3} variant="h5" sx={{ fontWeight: 'medium' }}> 
                About Me
              </Typography>
            </Grid>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>

  );
}
