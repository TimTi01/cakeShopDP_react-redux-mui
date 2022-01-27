import React from 'react';
import {Container} from "@mui/material";
import Bar from "../Components/Bar/Bar";
import {ContentShop} from "../Components/Content/ContentShop";
import {Footer} from "../Components/Footer/Footer";

export const Home = () => {
    return (
        <Container maxWidth='xl'>
            <Bar/>
            <ContentShop/>
            <Footer/>
        </Container>
    );
};