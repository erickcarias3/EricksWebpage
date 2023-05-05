import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import  GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';



function Header(props) {
  const { sections, title } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  return (
    <React.Fragment>
      <Toolbar 
      sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        display: 'flex',
        }}>

       
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
        <Link
          color="inherit"
          noWrap
          underline="none"
          href='/'
          variant="h4"
          >
          {title}
        </Link>
          
        </Typography>
        <IconButton href="https://github.com/erickcarias3" target="_blank">
          <GitHubIcon/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/erickcarias3" target="_blank">
          <LinkedInIcon/>
        </IconButton>
        <IconButton onClick={toggleDrawer(true)} target="_blank">
          <MenuIcon/>
        </IconButton>
      </Toolbar>


      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 0, flexShrink: 0 }}
            underline="hover"
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>

      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}

      >
        Hello
      </Drawer>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
