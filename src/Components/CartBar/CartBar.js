import React from 'react';
import {Drawer} from "@mui/material";
import {CartBarList} from "./CartBarList";

const CartBar = ({openCart, handleOpenCart}) => {
    return (
        <>
            <Drawer anchor={"right"}
                    open={openCart}
                    onClose={handleOpenCart}
            >
                <CartBarList handleOpenCart={handleOpenCart}/>
            </Drawer>
        </>
    );
};

export default CartBar;