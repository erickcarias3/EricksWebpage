import { Toolbar, Typography, Button,OutlinedInput,InputLabel,MenuItem,FormControl,ListItemText,Select,Checkbox} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useCardList from "./useCardList";

const Portfolio = () => {
    
    const projects = [
        {
            id:1,
            type:"Software",
            title:"Smart Brain",
            data: "A web application to identify faces in photos. Utilizing the clarifai API to provide the machine learning and an Express JS backend with multiple API end points",
            image: "./src",
            description: "Hello",
            technologyChips: ["React","Clarifai API","SQL","Node js"],
        }
        ,{
            id:2,
            type:"Software",
            title:"Logic Gate Simulator",
            data: "An android application build to mimic the behavior of logic gates. A sandbox like enviorment for creative iBoxiduals",
            image: "./src",
            description: "Hello",
            technologyChips: ["React","Clarifai API","SQL","Node js"]
        }
        
        ,{
            id:3,
            type:"Music",
            title:"DJ Mix",
            data: "",
            image: "./src",
            description: "None",
            technologyChips: ["Serato"]
        }
        ,{
            id:4,
            title:"DJ Mix",
            data: "",
            image: "./src",
            description: "None",
            technologyChips: ["Serato"]
        }
        ,{
            id:5,
            title:"DJ Mix",
            data: "",
            image: "./src",
            description: "None",
            technologyChips: ["Serato"]
        }
        
    ]
    
    const options = [
        'Software',
        'Music',
      ];

    const { handleStateChange, CardList } = useCardList(projects);
    
    const [optionName, setOptionName] = React.useState([]);
    

    const filterByOptionsName = (item,options) => {
        return options.includes(item)
    };

    const handleListView = (event) => {

        const {
            target: { value },
          } = event;
        
        setOptionName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        if(value.length > 0){
            const filteredCards = projects.filter(element => filterByOptionsName(element.type,value))
            handleStateChange(filteredCards);
        }
        else{
            handleStateChange(projects)
        }
    
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };
  return (
    
    <Box
      sx={{
        position: 'relative',
        paddingTop: "2em",
      }}
    >
        <Box
            sx={{
                display:"flex",
                justifyContent: 'space-around',
                alignItems: "center",
                flexGrow: 3
            }}
        >   
            <Box 

                >
                <Typography variant="h3" >
                    Creative Portfolio
                </Typography>
            </Box>

            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Filters</InputLabel>
                    <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={optionName}
                    onChange={handleListView}
                    input={<OutlinedInput label="Filters" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                        {options.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={optionName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>
        </Box>
        <CardList/>
    </Box>
  );
}

export default Portfolio;
