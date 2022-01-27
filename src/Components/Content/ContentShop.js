import React from 'react';
import {Card, CardActionArea, CardHeader, CardMedia, Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import cakesImg from '../../img/imgHome/cakes.jpg';
import cupcakesImg from '../../img/imgHome/cupcakes.jpg';
import macaroniImg from '../../img/imgHome/macaroni.jpg';
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles(({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 132px)',
    },
    card: {
        background: "#ffffff00",
        boxShadow: 'none',
    },
    cardHead: {
        textAlign: "center",
        background: "#ffffff00",
        color: '#fff',
    }
}))

const cards = [
    {
        id: 1,
        title: 'Торты',
        img: cakesImg,
    },
    {
        id: 2,
        title: 'Капкейки',
        img: cupcakesImg,
    },
    {
        id: 3,
        title: 'Макарон',
        img: macaroniImg,
    }
]

function getUrl(card) {
    if (card.id === 1) {
       return '/Cakes'
    } else if (card.id === 2) {
        return '/Cupcakes'
    } else {
        return '/Macaroni'
    }
}

export const ContentShop = () => {
    const classes = useStyle()

    return (
        <Container maxWidth='xl' className={classes.container}>
            <Grid container
                  justifyContent='center'
                  maxHeight="100%"
            >
                {cards.map(card => (
                    <Grid item key={card.id} p={2}>
                        <Link to={getUrl(card)} style={{textDecoration: 'none'}}>
                            <Card className={classes.card}>
                                <CardHeader title={card.title}
                                            className={classes.cardHead}
                                />
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={card.title}
                                        height="400"
                                        image={card.img}
                                        title={card.title}
                                    />
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
