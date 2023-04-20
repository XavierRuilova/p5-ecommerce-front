import React from 'react'
import './cardlist.css'
import Cards from '../cards/Cards'

const CardList = ({list}) => {
    return (
        <div className='cardList'>
            {list.map((cards, index)=>{
                return <Cards key={index} idProd={cards._id} pic={cards.imgurl} title={cards.productname} price={cards.price}/>
    
            })}
        </div>
      )
}

export default CardList