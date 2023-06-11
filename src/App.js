import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import UsersAdm from './page/UsersAdm';

function App() {



  return (
    <div>
      <Routes>
        <Route path={'/'} element={<UsersAdm />} />
      </Routes>

    </div>

  );
}

export default App;
