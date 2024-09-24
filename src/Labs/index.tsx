import React from "react";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import {Route, Routes} from "react-router";
import TOC from "./TOC";
import {Navigate} from "react-router-dom";


export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>CS 4550 - Web Development</h1>
            <h2>Julia Ouritskaya</h2>
            <h1>Labs</h1>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3" element={<Lab3/>}/>
                <Route path="Lab4" element={<Lab4/>}/>
            </Routes>
        </div>
    );
}