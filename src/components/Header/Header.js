import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../Logo'
import Btn from '../Btn'

const Header = () =>{

   const {totalPrice, totalCount} = useSelector(({cart}) => cart)

   return(
      <div className="header">
         <div className="header__wrapper">
            <Link to='/'>
               <Logo />
            </Link>
            <Link to='/cart'>
               <Btn className='btnSummary'>
                  <span className="btnSummary__sum">{totalPrice}&#8381;</span>
                  <span className="btnSummary__line"></span>
                  <div className="btnSummary__amount">
                     <img className="btnSummary__amount--img" src="/cart.png" alt="cart img"></img>
                     <span className="btnSummary__amount--sum">{totalCount}</span>
                  </div>
               </Btn>
            </Link>
         </div>
      </div>
   )
}

export default Header