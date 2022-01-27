import React, {useState} from 'react';
import {Avatar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip} from "@mui/material";
import {Logout} from "@mui/icons-material";
import catAvatar from '../../../img/cat2.jpg';
import {getAvatarStatus} from "../../../store/store";
import {useDispatch, useSelector} from "react-redux";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const BarAccountSettings = () => {
    const loginData = useSelector(state => state.loginDataReducer.loginData)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(getAvatarStatus(false))
    }

    return (
        <>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick}>
                    <Avatar src={catAvatar}/>
                </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 30, vertical: 50 }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="medium"/>
                    </ListItemIcon>
                    <ListItemText>
                        {loginData.name} {loginData.surname}
                    </ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AlternateEmailIcon fontSize="medium"/>
                    </ListItemIcon>
                    <ListItemText>
                        {loginData.email}
                    </ListItemText>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};