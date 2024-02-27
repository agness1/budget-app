import React from 'react';
import HomePage from './components/pages/HomePage';
import Navigation from './components/layout/navigation';
import Goals from './components/pages/Goals';
import Blog from './components/pages/Blog/Blog';
import {Route, Routes} from "react-router-dom";
import Articles from './components/pages/Blog/Articles';
import Transactions from './components/pages/Transactions';


function App() {
  return (
    <>
    <Navigation/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/transactions' element={<Transactions/>}/>
    <Route path='/goals' element={<Goals/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/article/:id' element={<Articles/>}/>
   </Routes> 
    </>
  );
}

export default App;
