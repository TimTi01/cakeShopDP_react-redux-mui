import React, {useState} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Modal,
    Tooltip,
    Typography
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, addToFavorites, delFromCart, delFromFavorites} from "../../store/store";

const useStyle = makeStyles({
    card: {
        width: '285px',
        background: '#f4fffeeb',
    },
    cardHead: {
        padding: '6px',
        '& span': {
            width: '245px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 19,
        },
    },
    cardHeadModal: {
        padding: '6px',
        '& span': {
            fontSize: 19,
        },
    },
    modalCard: {
        display: 'flex',
        width: '700px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: "white",
    }
})

export const ContentHomeCard = ({result}) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const basket = useSelector(state => state.basketReducer.basket)
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const [openModal, setOpenModal] = useState(false)

    const isItemInBasket = basket.some(item => item.id === result.id)
    const isItemInFavorites = favorites.some(item => item.id === result.id)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const addCardInShoppingCart = (id, title, image, price) => {
        if (isItemInBasket === false) {
            dispatch(addToCart({id, title, image, price}))
        } else {
            dispatch(delFromCart(id))
        }
    }

    const addFavoritesInShoppingCart = (id, title, image, price) => {
        if (isItemInFavorites === false) {
            dispatch(addToFavorites({id, title, image, price}))
        } else {
            dispatch(delFromFavorites(id))
        }
    }

    return (
        <Grid item pt={1} pr={0.8}>
            <Card className={classes.card}>
                <CardActionArea onClick={() => handleOpenModal(result.id)}>
                    <CardHeader className={classes.cardHead}
                                title={result.name}
                    />
                    <CardMedia
                        component="img"
                        alt={result.name}
                        height="225"
                        image={result.img500}
                        title={result.description}
                    />
                    <CardContent style={{padding: '5px', maxHeight: '45px'}}>
                        <Typography variant={'body2'} color="text.secondary" noWrap>
                            {result.description}
                        </Typography>
                    </CardContent>
                    <Divider/>
                </CardActionArea>
                <Divider/>
                <CardActions>
                    <Grid container
                          alignItems='center'
                          justifyContent='space-between'
                    >
                        <Grid item>
                            <Tooltip title={'Add in shopping cart'}>
                                <IconButton onClick={() => addFavoritesInShoppingCart(result.id, result.name, result.img500, result.price)} aria-label='Add to Cart'>
                                    {isItemInFavorites === false
                                        ? <StarBorderIcon/>
                                        : <StarIcon style={{color: 'gold'}}/>
                                    }
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Typography>₽{result.price}</Typography>
                        </Grid>
                    </Grid>
                </CardActions>
                <Modal open={openModal}
                       onClose={handleCloseModal}
                >
                    <Card className={classes.modalCard}>
                        <Grid container
                              justifyContent='space-around'
                              direction='column'
                              flexWrap='noWrap'
                              width='100%'>
                            <Grid item>
                                <CardMedia
                                    component="img"
                                    alt={result.name}
                                    height="400"
                                    image={result.imgFull}
                                    title={result.description}
                                />
                            </Grid>
                            <Grid item container direction='column'>
                                <Grid item>
                                    <CardHeader className={classes.cardHeadModal}
                                                title={result.name}
                                                style={{paddingLeft: '16px'}}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography pl={2}>
                                        {`От ₽ ${result.price}`}
                                    </Typography>
                                </Grid>
                                <Divider/>
                                <Grid item>
                                    <CardContent>
                                        <Typography variant='subtitle1'>{result.fullDescription}</Typography>
                                    </CardContent>
                                </Grid>
                                <Divider/>
                                <Grid item container pl={1}>
                                    <CardActions>
                                        <Button variant='outlined'
                                                onClick={() => addCardInShoppingCart(result.id, result.name, result.img500, result.price)}
                                        >
                                            {isItemInBasket === false
                                                ? 'Добавить в козину'
                                                : 'Убрать из корзины'
                                            }
                                        </Button>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Modal>
            </Card>
        </Grid>
    );
};
