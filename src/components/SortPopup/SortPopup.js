import React from 'react'
import PropTypes from 'prop-types'
import './sortpopup.scss'


const SortPopup = React.memo(({sortItems, activeSortType, onClickSortType}) =>{

   const [popup, setPopup] = React.useState(false)

   const activeSort = sortItems.find((obj) => obj.type === activeSortType).name

   const sortRef = React.useRef()

   React.useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick)
   },[])

   const onClickPopup = () =>(
      setPopup(prev => !prev)
   )

   const onClickSort = (obj) =>{
      if (onClickSortType){
         onClickSortType(obj)
      }
      setPopup(false)
   }

   const handleOutsideClick = (e) =>{
      if (!e.composedPath().includes(sortRef.current)){
         setPopup((prev) => prev = false)
      }
   }

   return(
      <div ref={(ref) => sortRef.current = ref} className="nav__sort">
            <span className="nav__sort--labelFirst">Сортировать по:</span>
            <span className="nav__sort--labelSecond" onClick={onClickPopup}>{activeSort}</span>
            {popup && (
            <ul className="nav__sort--popup">
               {sortItems && sortItems.map( (obj, index) => (
                  <li 
                     className={activeSortType === obj.type ? 'nav__sort--popup--active' : undefined}
                     onClick={() => onClickSort(obj)}
                     key={`${obj.name}_${index}`}>
                     {obj.name}
                  </li>
               ))}
            </ul>
            )}
      </div>
   )
})

SortPopup.propTypes = {
   activeSortType: PropTypes.string.isRequired,
   sortItems: PropTypes.arrayOf(PropTypes.object).isRequired,
   onClickSortType: PropTypes.func.isRequired,
};

export default SortPopup
