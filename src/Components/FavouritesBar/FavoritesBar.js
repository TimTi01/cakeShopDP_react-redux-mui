import React from 'react';
import {Drawer} from "@mui/material";
import {FavoritesBarList} from "./FavoritesBarList";

const FavoritesBar = ({openFavourites, handleOpenFavourites}) => {
    return (
        <>
            <Drawer anchor={"right"}
                    open={openFavourites}
                    onClose={handleOpenFavourites}
            >
                <FavoritesBarList handleOpenFavourites={handleOpenFavourites}/>
            </Drawer>
        </>
    );
};

export default FavoritesBar;