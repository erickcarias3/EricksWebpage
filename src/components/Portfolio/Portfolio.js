import { Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useCardList from "./useCardList";

const Portfolio = () => {
    
    const projects = [
        {
            id:1,
            type:"coding",
            title:"Smart Brain",
            data: "A web application to identify faces in photos. Utilizing the clarifai API to provide the machine learning and an Express JS backend with multiple API end points",

        }
        ,{
            id:2,
            type:"coding",
            title:"Logic Gate Simulator",
            data: "An android application build to mimic the behavior of logic gates. A sandbox like enviorment for creative iBoxiduals"
        }
        ,{
            id:3,
            type:"music",
            data: "DJ Mix"
        }
        ,{
            id:4,
            type:"music",
            data: "DJ Mix"
        }
        ,{
            id:5,
            type:"music",
            data: "DJ Mix"
        }
    ]
    
    const { cards, handleStateChange, CardList } = useCardList(projects);

    const handleListView = (key) => {

        if(key === "all"){
            handleStateChange(projects);
        }
        else{
            const filteredCards = projects.filter(element => element.type === key)
            handleStateChange(filteredCards);
        }
        console.log(cards)
    };

  return (
    
    <Box
      sx={{
        position: 'relative',
        paddingTop: "2em"
      }}
    >
        <Box
            sx={{
                display:"flex",
                justifyContent: 'space-between'
            }}
        >   
            <Box 
                sx={{ 
                    paddingLeft:"4em"
                }}
                >
                <Typography variant="h3">
                    Creative Portfolio
                </Typography>
            </Box>
            <Toolbar>
                <Button onClick={() => handleListView("all")}>all</Button>
                <Button onClick={() => handleListView("coding")}>coding</Button>
                <Button onClick={() => handleListView("music")}>music</Button>
            </Toolbar>
        </Box>
        <CardList/>
    </Box>
  );
}

export default Portfolio;
