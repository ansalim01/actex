import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import UsersAdm from './page/UsersAdm';

function App() {



  return (
    <div>
      <Routes basename="actex">
        {/* <HashRouter basename="actex"> */}
        <Route exact path={'/'} element={<UsersAdm />} />
        {/* </HashRouter> */}
      </Routes>

    </div>

  );
}

export default App;
