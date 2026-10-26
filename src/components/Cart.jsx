import React from 'react'
import { useContext } from 'react'
import { CartContexto } from '../contexto/CartContexto'

export const Cart = () => {
  const { productCart, removeFromCart } = useContext(CartContexto);

  return (
    <div>
      <div className='flex bg-purple-100'>
        {productCart.map((item)=>(
          <div key={item.id} className='flex gap-1 shadow shadow-purple-300 border border-purple-950 w-1/3 p-2 m-2 items-center flex-col bg-white'>
            <img src={item.image} alt={item.name} className='w-32 h-32 object-cover rounded-md' />
            <h3>{item.name}</h3>
            <span>En el carrito: {item.quantity}</span>
            <span>{item.description}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className='mt-2 px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-900 transition'
            >
              Quitar del carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
