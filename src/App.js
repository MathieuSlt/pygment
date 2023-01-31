import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import News from './pages/News';
import Artists from './pages/Artists';
import Project from './pages/Project';
// import Login from './pages/Login';

import Signup from './components/Signup';
import Login from './components/Login';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/news' element={<News />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/project' element={<Project />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        {/* 404 */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;