import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={''}/>
      <Route path='news' element={''} />
      <Route path='blog' element={''} />
      <Route path='merch' element={''} />
      <Route path='tour' element={''} />
    </Routes>
  );
}

export default App;
