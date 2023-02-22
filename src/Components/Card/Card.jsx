import React from 'react'

const Card = (card) => {
  return (
    <div className='Card'>
        <h3>{card.name}</h3>
        <p>{card.text}</p>
    </div>
  )
}

export default Card;