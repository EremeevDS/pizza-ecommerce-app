import React from 'react'
import './cartItem.scss'

const CartItem = ({name, img, type, size, price, id, totalPrice, totalCount, onRemove, onMinus, onPlus, index}) =>{
   const handleRemoveClick = () => {
      onRemove(id)
   }
   const handleMinusItem = () =>{
      onMinus(id)
   }
   const handlePlusItem = () =>{
      onPlus(id)
   }
   return(
         <li className="cart__item" key={id}>
               <div className="cart__item--desc">
                  <img className="cart__item--img" src={img} alt="Фото пиццы" />
                  <div className="cart__item--info">
                     <p className="cart__item--title">{name}</p>
                     <p className="cart__item--size">{type} тесто, {size} см.</p>
                  </div>
               </div>
               <div className="cart__item--amount">
                  <button onClick={handleMinusItem}className="btn btn__outline btn__outline--circle cart__item--minus"></button>
                  <input value={totalCount} />
                  <button onClick={handlePlusItem} className="btn btn__outline btn__outline--circle cart__item--plus"></button>
               </div>
               <span className="cart__item--price"><strong>{totalPrice}&#8381;</strong></span>
               <button onClick={handleRemoveClick} className="btn btn__outline btn__outline--circle cart__item--del">-</button>
            </li>
   )
}
export default CartItem