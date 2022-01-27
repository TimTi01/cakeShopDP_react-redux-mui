import React from 'react';
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from '@mui/icons-material/Cake';
import CookieIcon from '@mui/icons-material/Cookie';
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";

const useStyle = makeStyles(({
    box: {
        height: '100%',
        width: '240px',
    }
}))

// Можно подумать и каким-нибудь способом модернизировать этот список, но пока и так нормально
const items = [
    {
        id: 1,
        link: '',
        primary: 'Домашняя страница',
        icon: <HomeIcon/>,
    },
    {
        id: 2,
        link: 'Cakes',
        primary: 'Кексы',
        icon: <CakeIcon/>,
    },
    {
        id: 3,
        link: 'Cupcakes',
        primary: 'Капкейки',
        icon: <CookieIcon/>,
    },
    {
        id: 4,
        link: 'Macaroni',
        primary: 'Макароны',
        icon: <CookieIcon/>,
    },
]

// Лист с списком ссылок на боковой панеле
export const SideBarList = () => {
    const classes = useStyle()

    return (
        <Box className={classes.box}>
            <List>
                {items.map((item) => (
                    <Link to={`/${item.link}`} key={item.id} style={{textDecoration: 'none', color: 'inherit'}}>
                        <ListItem button>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.primary}
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </Link>
                ))}
            </List>
        </Box>
    )
};