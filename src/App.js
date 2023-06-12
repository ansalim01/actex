import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Test from './page/Test';
import UsersAdm from './page/UsersAdm';

function App() {



  return (
    <div>
      text
      <Routes >
        <Route path={'/'} element={<UsersAdm />} />
        <Route path={'/test'} element={<Test />} />
      </Routes>

    </div>

  );
}

export default App;
