import React from 'react'
import './cart.css'

function Cart({name, description}) {
  return (
    <div className='cart'>
    <h1>{name}</h1>
    <p>{description}</p>
    <button>Hire Us</button>
    <button>Contact Us</button>
    </div>
  )
}

export default Cart