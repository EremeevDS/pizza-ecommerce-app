import React from 'react'
import ContentLoader from 'react-content-loader'

function PizzasLoading() {
   return(
      <ContentLoader 
    speed={2}
    width={252}
    height={396}
    viewBox="0 0 252 396"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="127" cy="108" r="108" /> 
    <rect x="0" y="234" rx="3" ry="3" width="252" height="20" /> 
    <rect x="0" y="265" rx="10" ry="10" width="252" height="88" /> 
    <rect x="1" y="368" rx="3" ry="3" width="88" height="20" /> 
    <rect x="158" y="363" rx="20" ry="20" width="94" height="32" />
  </ContentLoader>
   )
}

export default PizzasLoading
