import React from 'react';
import {Button, Card, CardHeader, CardMedia, Container, Grid, Typography,} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
    card: {
        width: '285px'
    },
    cardHead: {
        padding: '6px',
        '& span': {
            fontSize: 19
        },
    },
    modalCard: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: "white",
    }
})

export const ContentCart = () => {
    const basket = useSelector(state => state.basketReducer.basket)
    const classes = useStyle()

    return (
        <Container maxWidth={'xl'}>
            {basket.length === 0
                ? <Grid container mt={4} direction='column' justifyContent='center' alignItems='center'>
                    <Grid item>
                        <Typography variant={"h2"}>Пусто -_-</Typography>
                    </Grid>
                    <Grid item mt={2}>
                        <Button variant='contained'>
                            <Link to={'/Cakes'}>В магазин</Link>
                        </Button>
                    </Grid>
                  </Grid>
                :<Grid container justifyContent='space-between' pt={2}>
                    {basket.map((item) => (
                        <Grid item key={item.id} pt={1}>
                            <Card className={classes.card}>
                                <CardHeader className={classes.cardHead} title={item.title}/>
                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="200"
                                    image={item.image}
                                    title={item.title}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            }
        </Container>
    );
};