import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import HeroList from './HeroList';
import Graveyard from './Graveyard';

function App() {


  return (
  <>
    <NavBar/>
      <Routes>
        <Route exact path = '/' element={<HeroList/>}/>
        <Route exact path = '/graveyard' element={<Graveyard/>}/>
      </Routes>

  </>
  )
}

export default App;
