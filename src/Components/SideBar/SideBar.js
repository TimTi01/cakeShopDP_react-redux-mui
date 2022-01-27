import React from 'react';
import {Drawer,} from "@mui/material";
import {SideBarList} from "./SideBarList";

const SideBar = ({open, handleOpen}) => {

    return (
        <>
            <Drawer anchor={"left"}
                    open={open}
                    onClose={handleOpen}
            >
                <SideBarList/>
            </Drawer>
        </>
    );
};

export default SideBar;