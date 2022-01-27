import React, {useEffect} from 'react';
import {CircularProgress, Container, Grid} from "@mui/material";
import {ContentHomeCard} from "./ContentHomeCard";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../data/data";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles(({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 132px)',
    },
}))

const ContentHome = () => {
    const classes = useStyle()
    const data = useSelector(state => state.dataReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData());
    }, []);

    const getLastWordInUrl = (data) => {
        let url = window.location.href
        let newData

        if (url.search('/Cakes') !== -1) {
            newData = data.results.cakes
        } else if(url.search('/Cupcakes') !== -1) {
            newData = data.results.cupcakes
        } else {
            newData = data.results.macaroni
        }

        return newData
    }

    return (
        <Container maxWidth='xl' className={classes.container}>
            <Grid container justifyContent='flex-start' pt={2} pb={3}>
                {data.results === undefined
                    ? <CircularProgress/>
                    : getLastWordInUrl(data).map((result) => (
                        <ContentHomeCard result={result} key={result.id}/>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default ContentHome;