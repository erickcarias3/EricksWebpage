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
        {cards.map((item) => (
          <Box
            sx={{p:3}}
          >
           <BasicCard title={item.title} description={item.data} />
          </Box>
        ))}
      </Box>
    
  };
};

export default useCardList;