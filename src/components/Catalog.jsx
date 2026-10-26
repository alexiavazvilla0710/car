import React from 'react'
import { useContext } from 'react'
import { CartContexto } from '../contexto/CartContexto'
//
export const Catalog = () => {
  const { products, addToCart } = useContext(CartContexto);

  return (
    <div>
      <div className= 'flex bg-purple-100'>
        {products.map((product)=>(
          <div key={product.id} className='flex gap-1 shadow shadow-purple-300 border border-purple-950 w-1/3 p-2 m-2 items-center flex-col bg-white'>
            <img src={product.image} alt={product.name} className='w-32 h-32 object-cover rounded-md' />
            <h3>{product.name}</h3>
            <span>{product.quantity}</span>
            <span>{product.description}</span>
            <button 
            onClick={()=> addToCart(product.id)}
            disabled={product.quantity === 0}
            className='mt-2 px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-900 transition'>
            {product.quantity === 0 ? "sin stock" :"Agregar al carrito"}
            </button>
          </div>
        ))}
        </div>
    </div>
  )
}
