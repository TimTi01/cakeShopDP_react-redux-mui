import React, {useState} from 'react';
import {AppBar, Badge, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "../SideBar/SideBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import {useSelector} from "react-redux";
import {BarLogin} from "./Login/BarLogin";
import {BarAccountSettings} from "./Login/BarAccountSettings";
import CartBar from "../CartBar/CartBar";
import FavoritesBar from "../FavouritesBar/FavoritesBar";

export default function Bar() {
    const basket = useSelector(state => state.basketReducer.basket)
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const avatar = useSelector(state => state.avatarReducer.avatar)
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openFavourites, setOpenFavourites] = useState(false);
    const [openLoginForm, setOpenLoginForm] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleOpenCart = () => {
        setOpenCart(!openCart)
    }

    const handleOpenFavourites = () => {
        setOpenFavourites(!openFavourites)
    }

    const handleOpenLoginForm = () => {
        setOpenLoginForm(true)
    }
    const handleCloseLoginForm = () => {
        setOpenLoginForm(false)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                    style={{boxShadow: 'none',
                            borderBottom: '1px solid #fff',
                            backgroundColor: '#ffffff00'
                    }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cake shop
                    </Typography>

                    <IconButton aria-label="cart" onClick={handleOpenCart}>
                        <Badge badgeContent={basket.length} color="error">
                            <ShoppingCartIcon/>
                        </Badge>
                    </IconButton>

                    <IconButton aria-label="favourites" onClick={handleOpenFavourites}>
                        <Badge badgeContent={favorites.length} color="error">
                            <StarIcon/>
                        </Badge>
                    </IconButton>
                    {avatar === false
                        ? <Button color="inherit" onClick={handleOpenLoginForm}>Login</Button>
                        : <BarAccountSettings/>
                    }
                    <BarLogin openLoginForm={openLoginForm}
                              handleCloseLoginForm={handleCloseLoginForm}
                    />
                </Toolbar>

                <FavoritesBar openFavourites={openFavourites}
                               handleOpenFavourites={handleOpenFavourites}
                />

                <CartBar openCart={openCart}
                         handleOpenCart={handleOpenCart}
                />
                <SideBar open={open}
                         handleOpen={handleOpen}
                />
            </AppBar>
        </Box>
    );
}