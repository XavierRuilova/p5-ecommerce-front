import React from 'react'
import './cardlist.css'
import Cards from '../cards/Cards'

const CardList = ({list, setter}) => {
    return (
        <div className='cardList'>
            {list.map((cards, index)=>{
                return <Cards key={index} idprod={cards.idprod} pic={cards.imgurl} title={cards.productname} price={cards.price} setter={setter}/>
    
            })}
        </div>
      )
}

export default CardList