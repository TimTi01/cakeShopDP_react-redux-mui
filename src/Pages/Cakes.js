import React from 'react';
import {Container} from "@mui/material";
import Bar from "../Components/Bar/Bar";
import ContentHome from "../Components/Content/ContentHome";
import {Footer} from "../Components/Footer/Footer";

export const Cakes = () => {
    return (
        <Container maxWidth='xl'>
            <Bar/>
            <ContentHome/>
            <Footer/>
        </Container>
    );
};