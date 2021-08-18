import React from 'react'
import { useSelector } from 'react-redux'

function Reciept() {
   const {totalPrice,totalCount, items} = useSelector(({cart}) => cart)
   console.log(items)
   return (
      <main>
      {Object.values(items).map(key => {
         console.log(key)
      })}
      </main>
   )
}

export default Reciept
