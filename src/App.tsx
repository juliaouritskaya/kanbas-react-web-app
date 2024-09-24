import React from 'react';
import Labs from "./Labs";
import {Navigate, HashRouter, Routes, Route} from "react-router-dom";
import Kanbas from "./Kanbas";
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';
import Lab3 from './Labs/Lab3';
import Lab4 from './Labs/Lab4';

function App() {
  return (
      <HashRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to="Kanbas"/>}/>
                  <Route path="/Labs/*" element={<Labs/>}/>
                  <Route path="/Kanbas/*" element={<Kanbas/>}/>
              </Routes>
          </div>
      </HashRouter>
  );
}

export default App;
