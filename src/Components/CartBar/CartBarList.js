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
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {delFromCart} from "../../store/store";

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

export const CartBarList = ({handleOpenCart}) => {
    const classes = useStyle()
    const basket = useSelector(state => state.basketReducer.basket)
    const dispatch = useDispatch()

    const getPrice = () => {
        return basket.map(obj => obj.price)
            .reduce((firstPrice, lastPrice) => firstPrice + lastPrice)
            .toFixed(2)
    }

    return (
        <Box className={classes.box}>
            {basket.length === 0
                ? <List>
                     <ListItem>
                         <ListItemText style={{textAlign: 'center'}}>
                             Корзина пуста
                         </ListItemText>
                     </ListItem>
                    <Divider/>
                    <ListItem style={{justifyContent: 'center'}}>
                        <ListItemButton className={classes.itemButton} onClick={handleOpenCart}>
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
                        Корзина:
                    </ListSubheader>
                  }>
                    <Divider/>
                    {basket.map((item) => (
                        <div key={item.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={item.title} src={item.image}/>
                                </ListItemAvatar>
                                <ListItemText className={classes.itemText}
                                              primary={item.title}
                                              secondary={`$ ${item.price}`}
                                />
                                <ListItemButton className={classes.itemButton} onClick={() => dispatch(delFromCart(item.id))}>
                                    <ListItemIcon className={classes.itemIcon}>
                                        <RemoveShoppingCartIcon/>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </div>
                    ))}
                    <ListItem>
                        <ListItemText primary={`ВСЕГО: ${getPrice()} ₽`}
                                      style={{textAlign: 'end'}}
                        />
                    </ListItem>
                  </List>
            }
        </Box>
    )
}