import { Card, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState } from 'react';
import BasicCard from './BasicCard';



const useCardList = (initialState) => {


  const [cards, setCards] = useState(initialState);

  const handleStateChange = (newState) => {
    setCards(newState);
  };


  return {
    cards,
    handleStateChange,
    CardList: () => 
      <Box
        sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent: 'space-around',
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center"

        }}
      >        
        {cards.map((item,index) => (
          <Box
            key={index}
            sx={{p:2}}
          >
           <BasicCard  title={item.title} description={item.data} technologyChips={item.technologyChips} />
          </Box>
        ))}
      </Box>
    
  };
};


export default useCardList;