import React from 'react'
import classNames from 'classnames'
import './btn.scss'

const Btn = (props) =>{
   const { ico, outline, dark, className, center, onClick} = props
   return(
      <button onClick={onClick} className={classNames(
            'btn', className,
         {
            'btn__outline' : outline,
         },
         {
            'btn__dark' : dark,
         },
         {
            'btn__center' : center,
         },
         )}>
         {ico && <img src={ico} alt="img"></img>}
         {props.children}
      </button>
   )
}
export default Btn