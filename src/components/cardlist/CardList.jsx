import React from 'react'
import Cards from '../cards/Cards'

// cardlist in carousel
const CardList = ({list}) => {
    return (
        <div>
            {list.map((cards, index)=>{
                return (
                    <Cards key={index} idprod={cards.idprod} pic={cards.imgurl} title={cards.productname} price={cards.price} />
                )
    
            })}
        </div>
      )
}

export default CardList
