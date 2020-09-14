import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/filter' component={Filter} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
