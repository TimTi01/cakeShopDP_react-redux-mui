import React from 'react';
import {Box, Typography} from "@mui/material";

export const Footer = () => {
    return (
        <Box display='flex'
             justifyContent='center'
             height='65px'
             alignItems='center'
             borderTop='1px solid #fff'
             style={{background: '#ffffff00'}}
        >
            <Typography style={{color: "#fff"}}>Создатель: Маргарита Волкова © 2022</Typography>
        </Box>
    );
};
