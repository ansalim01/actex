import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import UsersAdm from './page/UsersAdm';

function App() {



  return (
    <div>
      text
      <Routes >
        <Route exact path={'/'} element={<UsersAdm />} />
      </Routes>

    </div>

  );
}

export default App;
