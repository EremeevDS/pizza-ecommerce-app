import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import Btn from '../components/Btn'
import {clearCart, removeCartItem, plusItem, minusItem} from '../redux/actions/cart'
import './cart.scss'

function Cart() {
  const dispatch = useDispatch()
   const {totalPrice,totalCount, items} = useSelector(({cart}) => cart)
   const addedPizzas = Object.keys(items).map(key =>{
     return items[key].items[0]
   })

   const onCLearCart = () =>{
      dispatch(clearCart())
   }
   const onClearCartItem = (id) => {
      dispatch(removeCartItem(id))
   }
   const onPlusItem = (id) =>{
     dispatch(plusItem(id))
   }
   const onMinusItem = (id) =>{
    dispatch(minusItem(id))
  }
   return (
      <main>
        {totalCount ?
         <div className="cart__wrapper">
           <div className="cart__title">
            <h3>Корзина</h3>
            <span onClick={onCLearCart}>Очистить корзину</span>
           </div>
           <ul className="cart__items">
             {
               addedPizzas.map((obj,index) => (
                <CartItem
                  name={obj.name}
                  img={obj.imageUrl}
                  type={obj.type}
                  size={obj.size}
                  price={obj.price}
                  id={obj.id}
                  index={index}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  onRemove={onClearCartItem}
                  onMinus={onMinusItem}
                  onPlus={onPlusItem}
                />
               ))
             }
          </ul>
          <div className="cart__sum">
            <p>Всего: <b>{totalCount} шт.</b></p>
            <p>Сумма заказа: <b style={{color:"#FE5F1E"}}>{totalPrice}&#8381;</b></p>
          </div>
          <div className="cart__action">
            <Link to='/'><Btn ico="/ico/back.svg" outline dark>Вернуться назад</Btn></Link>
            <Link to='/reciept'><Btn>Оформить заказ</Btn></Link>
          </div>
         </div>
        :
        <div className="emptyCart__wrapper">
          <h3>Корзина пустая  &#128530;</h3>
          <p>Вероятней всего, вы еще не добавляли пиццу в корзину.</p>
          <p>Для того, чтобы заказать пиццу, перейдите на главную страницу</p>
          <img src="/cart-il.png" alt="Shoping cart illustration"/>
          <Link to='/'><Btn center>Вернуться назад</Btn></Link>
        </div>
        }
      </main>
   )
}

export default Cart
