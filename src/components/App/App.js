import React from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import '../../reboot.css'
import Header from '../Header'
import Home from '../../pages/Home'
import Cart from '../../pages/Cart'
import Reciept from '../../pages/Reciept'

function App() {

  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/reciept' component={Reciept} exact/>
      </div>
    </div>
  );
}

export default App
