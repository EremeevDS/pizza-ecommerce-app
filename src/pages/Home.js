import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import {addPizzaToCart} from '../redux/actions/cart'
import Filter from'../components/Filter'
import Pizzas from '../components/Pizzas'
import PizzasLoading from '../components/PizzasLoading'
import SortPopup from '../components/SortPopup'

function Home() {

  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)

  React.useEffect(() =>{
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])
  
  const pizzasType = ['Мясные', 'Вегетарианские', 'Закрытые', 'Острые']
  const sortNames = [
  { name: 'популярности', type: 'rating', sort:'desc'},
  { name: 'цене', type: 'price', sort:'asc'},
  { name: 'алфавит', type: 'name', sort:'asc'},
];
  const onSelectCategory = React.useCallback((index) =>{
    dispatch(setCategory(index))
  }, []);
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) =>(
    dispatch(addPizzaToCart(obj))
  )

   return (
      <main>
        <nav className="nav">
          <Filter 
            pizzas={pizzasType}
            activeCategory={category}
            onSelectCategory={onSelectCategory}
          />
          <SortPopup 
            sortItems={sortNames}
            activeSortType={sortBy.type}
            onClickSortType={onSelectSortType}
          />
        </nav>
          <div className="main">
            <h2 className="main__title">Все пиццы</h2>
            <ul className="main__items">
              {isLoaded ? items.map((el, index) =>(
                <Pizzas 
                  onClickAddPizza={handleAddPizzaToCart}
                  addedCount={cartItems[el.id] && cartItems[el.id].items.length}
                  key={index}
                  {...el}
                />
              ))
              :Array(4).fill(0).map((_, index) => <PizzasLoading key={index}/>)
              }
            </ul>
          </div>
      </main>
   )
}

export default Home
