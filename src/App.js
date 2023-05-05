import './App.css';
import { Component } from 'react';
import Landingpage from './components/Landingpage/Landingpage';
import Header from './components/blog/Header';
import Resume from './components/Resume/Resume';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import Footer from './components/blog/Footer';
import { Routes, Route} from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


class App extends Component {
  
  render(){

    const links = [
      { title: 'Resume', url: "/resume" },
      { title: 'Portfolio', url: '/portfolio' },
      { title: 'Blog', url: '#' },
      { title: 'Contact', url: '/contact' },
      { title: 'Extra', url: '#' },

    ];

    const theme = createTheme({
      palette:{
        mode: 'dark',
        
        background: {  
          //default: '#5A5A5A'    }
        }
      },
    });

    return(
    
      <ThemeProvider theme={theme}>
        <Header title="Erick Carias" sections={links} />
        <CssBaseline />
        <Container maxWidth="xl">
              <Routes>
                  <Route path = "/" element={<Landingpage/>} />
                  <Route path = "resume" element={<Resume/>} />
                  <Route path = "portfolio" element={<Portfolio/>} />
                  <Route path = "contact" element={<Contact/>} />
              </Routes>
        </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
          link="/"
        />   
      </ThemeProvider>
    
    );
  }
}



export default App;
