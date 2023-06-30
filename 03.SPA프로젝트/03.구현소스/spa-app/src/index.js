import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import "./index.css";
import Layout from "./jam/Layout"
import Main from "./jam/Main"
import Sesame from "./jam/Sesame"
import Peanut from "./jam/Peanut"
import Almond from "./jam/Almond"
import Hazelnut from "./jam/Hazelnut"
import Cashew from "./jam/Cashew"
// 여기에 데이터 다들은거 임포트하고 ex)data from data.js



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Main />}></Route>
                  <Route path="ss" element={<Sesame />}></Route>
                  <Route path="pn" element={<Peanut />}></Route>
                  <Route path="am" element={<Almond />}></Route>
                  <Route path="hz" element={<Hazelnut />}></Route>
                  <Route path="cs" element={<Cashew />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
} /////////////// App 컴포넌트 /////////


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
