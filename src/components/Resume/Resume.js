import Grid2 from '@mui/material/Unstable_Grid2'; 
import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, Grow, Paper, Slide } from '@mui/material';
import { Box } from '@mui/system';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Resume = () => {

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `ErickC_Resume.pdf`;
        link.href = "./ErickC_Resume.pdf";
        link.click();
      };

    const education = [
        {
            id:1,
            college:"CSU Sacramento",
            type: "Bachelors Degree",
            years: "2018 - 2021",
        },
        {
            id:2,
            college:"Sierra College",
            type: "Associates Degree",
            years: "2016 - 2018",
        },
    ]

    const employment = [
        {
            id:1,
            workplace:"PowerSchool",
            type: "Technical Support Engineer",
            years: "Current",
        },
        {
            id:2,
            workplace:"Accedeo",
            type: "Software Developer",
            years: "2020-2021",
        },
    ]

    return(
    
    <Box
      sx={{
        position: 'relative',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingTop: "2em",
        
      }}
    >
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <div>
                <Typography variant="h5" color="inherit"  align='left'>
                        Erick Carias 
                </Typography>

                <Typography variant="h7" color="inherit" align='left' sx={{ fontStyle: 'italic', color: "text.secondary" , }} >
                        Software Engineer
                </Typography>
            </div>
            <Box sx ={{paddingRight: 5}}>
                <Button variant="outlined" size="small" endIcon={<FileDownloadOutlinedIcon/>} color="secondary" onClick={onDownload}>
                    PDF
                </Button>
            </Box>
        </Box>

        <Box 
            sx={{
                position: 'relative',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                paddingTop: "2em",
                paddingBottom: "2em",
                borderWidth: "1px",
                borderTopStyle: "solid",
                borderBottomStyle: "solid",
                borderColor: "gray"
            }}
            
        >
            <Grow in={true} timeout={ 1000 }>
                <div>
                    <Typography variant="body1" color="inherit" gutterBottom align='left' sx={{ color: "text.secondary" , }}>
                        Hi, my name is Erick Carias and I am a Software Developer with a background in Technical Support. 
                        Ive spent the last 2 years working in software improvement 
                        and ensuring customer success by providing best in class Technical Support.
                    </Typography>
                    <Typography variant="body1" color="inherit" gutterBottom align='left' sx={{ color: "text.secondary" , }}>
                    My specializatons include working in cross functional teams to Develop, Maintain and support software going beyond what 
                    is expected of me to provde the best product for the customer. a background in various aspects of the software 
                    development lifecycle has allowed me to bring new prespectives to projects in my portfolio.
                    </Typography>
                </div>
            </Grow>
        </Box>
        
        <Paper>
        <Grid2 container justifyContent="center" spacing={5} >
            <Grid2 xs={12} md={6} >
                <Typography variant="h5" color="inherit" gutterBottom align='center'>
                        Education
                </Typography>
                <Grid2 xs={12} >

                    {education.map((item) => (
                        <Grow
                        key={item.id}
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={ 1000 }
                             >
                        <Card 
                        sx={{
                            borderWidth: "1px",
                            //borderBottomStyle: "solid", 
                            borderLeftStyle:"solid",
                            display: "flex",
                            flexDirection: 'row',
                            borderColor: "gray",
                            justifyContent: "space-between",
                            p: 0.5,
                            m: 0.5
                            }}
                        >

                           
                            <Box                      
                            sx={{
                            display: "flex",
                            flexDirection: 'column',
                            }}>
                                <Typography  variant="h6" color="inherit" gutterBottom>
                                    {item.college}
                                </Typography>
                                <Typography  variant="body2" color="inherit" gutterBottom sx={{ fontStyle: 'italic', color: "text.secondary" ,}}>
                                    {item.type}
                                </Typography>
                            </Box>
                            <Box sx ={{paddingRight: 5}}>
                                <Box
                                    sx={{
                                    mx: 'auto',
                                    width: 120,
                                    p: 2,
                                    m: 1,
                                    bgcolor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                    border: '1px solid',
                                    borderColor: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                                    borderRadius: 8,
                                    }}
                                >
                                    <Typography variant="body2" color="inherit" gutterBottom sx={{ fontStyle: 'italic', color: "text.secondary" , textAlign:"center"}}>
                                    {item.years}
                                    </Typography>
                                    
                                </Box>
                            </Box>
                            
                            
                        </Card>
                        </Grow>
                    ) )}
                    
                </Grid2>
            </Grid2>
            <Grid2 xs={12} md={6} >
                <Typography variant="h5" color="inherit" gutterBottom align='center'>
                        Employment
                </Typography>
                <Grid2 xs={12} >
                    {employment.map((item) => (
                            <Grow
                            key={item.id}
                            in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            timeout={ 1000 }
                                >
                            <Card 
                            sx={{
                                borderWidth: "1px",
                                //borderBottomStyle: "solid", 
                                borderLeftStyle:"solid",
                                display: "flex",
                                flexDirection: 'row',
                                borderColor: "gray",
                                justifyContent: "space-between",
                                p: 0.5,
                                m: 0.5
                                }}
                            >

                            
                                <Box                      
                                sx={{
                                display: "flex",
                                flexDirection: 'column',
                                }}>
                                    <Typography  variant="h6" color="inherit" gutterBottom>
                                        {item.workplace}
                                    </Typography>
                                    <Typography  variant="body2" color="inherit" gutterBottom sx={{ fontStyle: 'italic', color: "text.secondary" ,}}>
                                        {item.type}
                                    </Typography>
                                </Box>
                                <Box sx ={{paddingRight: 5}}>
                                    <Box
                                        sx={{
                                        mx: 'auto',
                                        width: 120,
                                        p: 2,
                                        m: 1,
                                        bgcolor: (theme) =>
                                            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                        border: '1px solid',
                                        borderColor: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                                        borderRadius: 8,
                                        }}
                                    >
                                        <Typography variant="body2" color="inherit" gutterBottom sx={{ fontStyle: 'italic', color: "text.secondary" , textAlign:"center"}}>
                                        {item.years}
                                        </Typography>
                                        
                                    </Box>
                                </Box>
                                
                                
                            </Card>
                            </Grow>
                    ))}
                </Grid2>
            </Grid2>
        </Grid2>
        </Paper>
    </Box>
    );
}

export default Resume; 