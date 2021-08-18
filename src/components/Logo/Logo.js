import React from 'react'
import './logo.scss'

const Logo = () =>{
   return(
      <div className="logo">
         <img src="/logo.png" width={85} height={85} alt="Logo"></img>
         <div className="logo__align">
            <h1 className="logo__title">React PIZZA</h1>
            <h2 className="logo__subtitle">Самая вкусная пицца во вселенной</h2>
         </div>
      </div>
   )
}

export default Logo