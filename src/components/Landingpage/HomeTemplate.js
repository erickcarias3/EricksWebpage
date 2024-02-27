import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../blog/MainFeaturedPost';
import FeaturedPost from '../blog/FeaturedPost';
import { Typography } from '@mui/material';
import image from './ProfessionalHeadshot.jpg';



const sections = [
  { title: 'Resume', url: '#' },
  { title: 'Portfolio', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Contact', url: '#' },
  { title: 'Extra', url: '#' },

];

const mainFeaturedPost = {
  title: 'Erick Carias',
  description:
    "Utilizing my background in technology to shape a better tomorrow.",
  image: 'https://source.unsplash.com/random',
  imageText: 'HeadShot',
  srcText: image,
  typeWriter: ["Software Engineer", "Support Engineer", "Writer", "DJ & Musician"],
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




export default function HomeTemplate() {
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
