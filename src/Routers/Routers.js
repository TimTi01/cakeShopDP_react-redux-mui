import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "../Pages/Home";
import {Cakes} from "../Pages/Cakes";
import {Cupcakes} from "../Pages/Cupcakes";
import {Macaroni} from "../Pages/Macaroni";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/Cakes'} element={<Cakes/>}/>
            <Route path={'/Cupcakes'} element={<Cupcakes/>}/>
            <Route path={'/Macaroni'} element={<Macaroni/>}/>
        </Routes>
    );
};

export default Routers;