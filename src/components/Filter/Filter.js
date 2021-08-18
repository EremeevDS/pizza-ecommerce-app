import React from 'react'
import PropTypes from 'prop-types'
import './filter.scss'

const Filter = React.memo(({pizzas, activeCategory, onSelectCategory}) =>{

   return(
         <ul className="nav__filter">
            <li className={activeCategory === null ? 'nav__filter--item nav__filter--active' : 'nav__filter--item'}
            onClick={() => onSelectCategory(null)}>
               <h4>Все</h4>
            </li>
            {pizzas && pizzas.map( (el, index) => (
               <li className={activeCategory === index ? 'nav__filter--item nav__filter--active' : 'nav__filter--item'}
                  onClick={() => onSelectCategory(index)}
                  key={`${el}_${index}`}>
                  <h4>{el}</h4>
               </li>
            ))}
         </ul>
   )
})

Filter.propTypes = {
   pizzas: PropTypes.arrayOf(PropTypes.string).isRequired,
   activeCategory: PropTypes.number,
   onSelectCategory: PropTypes.func.isRequired,
};
Filter.defaultProps = {
   sortItems: [],
}


export default Filter