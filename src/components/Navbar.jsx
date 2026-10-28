import { useContext } from 'react'
import { CartContexto } from '../contexto/CartContexto'
import { useNavigate } from 'react-router'


export const Navbar = () => {
    const { productCart } = useContext(CartContexto);
    const navigate = useNavigate();

    const totalItems = productCart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className=' flex justify-center bg-[#C8A2C8] p-1 text-amber-50'>
            <ul className='flex gap-4 list-none font-bold cursor-pointer'>
                <li>
                    <a onClick={() => navigate('/')}>Catálogo</a>
                </li>
                <li>
                    <a onClick={() => navigate('/cart')}>Carrito {totalItems > 0 && `(${totalItems})`} </a>
                </li>
                <li>
                    <a onClick={() => navigate('/add')}>Agregar Producto</a>
                </li>
            </ul>
        </div>
    )
}
