import React from 'react';
import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton, ListItemIcon,
    ListItemText,
    ListSubheader} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {addToCart} from "../../store/store";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const useStyle = makeStyles(({
    box: {
        height: '100%',
        width: '300px',
    },
    itemText: {
        '& > span': {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
    },
    itemButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 0,
    },
    itemIcon: {
        minWidth: 0,
        justifyContent: 'flex-end',
    }
}))

export const FavoritesBarList = ({handleOpenFavourites}) => {
    const classes = useStyle()
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const basket = useSelector(state => state.basketReducer.basket)
    const dispatch = useDispatch()
    console.log(favorites)
    console.log(basket)

    const addFavoritesInCard = (id, title, image, price) => {
        dispatch(addToCart({id, title, image, price}))
    }

    return (
        <Box className={classes.box}>
            {favorites.length === 0
                ? <List>
                     <ListItem>
                         <ListItemText style={{textAlign: 'center'}}>
                             В избранном пусто
                         </ListItemText>
                     </ListItem>
                    <Divider/>
                    <ListItem style={{justifyContent: 'center'}}>
                        <ListItemButton className={classes.itemButton} onClick={handleOpenFavourites}>
                            <ListItemIcon className={classes.itemIcon} sx={{paddingRight: '6px'}}>
                                <ArrowBackIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Вернуться к покупкам'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                : <List subheader={
                    <ListSubheader component="div"
                                   id="nested-list-subheader"
                                   style={{textAlign: "center"}}
                    >
                        Избранное:
                    </ListSubheader>
                  }>
                    <Divider/>
                    {favorites.map((item) => (
                        <div key={item.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={item.title} src={item.image}/>
                                </ListItemAvatar>
                                <ListItemText className={classes.itemText}
                                              primary={item.title}
                                              secondary={`₽ ${item.price}`}
                                />
                                <ListItemButton className={classes.itemButton} onClick={() => addFavoritesInCard(item.id, item.title, item.image, item.price)}>
                                    <ListItemIcon className={classes.itemIcon}>
                                        <AddShoppingCartIcon/>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </div>
                    ))}
                  </List>
            }
        </Box>
    )
}