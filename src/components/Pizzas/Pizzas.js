import React from 'react'
import PropTypes from 'prop-types'
import './pizzas.scss'
import Btn from '../Btn'
import classNames from 'classnames'

const Pizzas = ({onClickAddPizza, id, imageUrl, name, price, types, sizes, addedCount}) =>{
   const [activeType, setActiveType] = React.useState(types[0])
   const [activeSize, setActiveSize] = React.useState(0)

   const pizzasType = ['Тонкое', 'Традиционное']
   const pizzaSize = [26,30,40]

   const onSelectType = (index) =>(
      setActiveType(index)
   )
   const onSelectSize = (index) =>(
      setActiveSize(index)
   )
   const onAddPizza = () => {
      const obj = {
         id,
         name,
         imageUrl,
         price,
         size : pizzaSize[activeSize],
         type : pizzasType[activeType],
      }
      onClickAddPizza(obj)
   }  

   return(
         <li className="main__item" key={id}>
            <img className="main__item--img" src={imageUrl} alt={name}/>
            <span className="pizza__title">{name}</span>
            <div className="pizza__params">
               <div className="pizza__params--top">
                  {pizzasType.map((el, index) =>(
                     <div className={classNames('pizza__param', {
                        'pizza__param--active' : activeType === index,
                        'pizza__param--disable' : !types.includes(index)
                     })}
                     onClick={() => onSelectType(index)}
                     key={index}
                     >{el}</div>
                  ))}
               </div>
               <div className="pizza__params--bottom">
               {pizzaSize.map((el, index) =>(
                     <div className={classNames('pizza__param', {
                        'pizza__param--active' : activeSize === index,
                        'pizza__param--disable' : !sizes.includes(el)
                     })}
                     onClick={() => onSelectSize(index)}
                     key={index}
                     >{`${el} см`}</div>
                  ))}   
               </div>
            </div>
            <div className="pizza__bottom">
               <span className="pizza__bottom--price">{price}&#8381;</span>
               <Btn onClick={onAddPizza} ico="/ico/add.svg">
                  Добавить
                  {addedCount && <span className='btn__amount'>{addedCount}</span>}
               </Btn>
            </div>
         </li>
   )
}

Pizzas.propTypes = {
   name : PropTypes.string,
   imageUrl : PropTypes.string,
   price : PropTypes.number,
   type : PropTypes.arrayOf(PropTypes.number),
   sizes : PropTypes.arrayOf(PropTypes.number),
   onClickAddPizza : PropTypes.func,
   addedCount : PropTypes.number,
};
Pizzas.defaultProps = {
   name : '---',
   imageUrl : '',
   price : 0,
   types : [],
   sizes : [],
}

export default Pizzas