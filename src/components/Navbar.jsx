import { useContext } from 'react'
import { CartContexto } from '../contexto/CartContexto'
import { useNavigate } from 'react-router'


export const Navbar = () => {
    const { products } = useContext(CartContexto);
    const navigate = useNavigate();

    return (
        <div className=' flex justify-center bg-[#C8A2C8] p-1 text-amber-50'>
            <ul className='flex gap-4 list-none font-bold cursor-pointer'>
                <li>
                    <a onClick={() => navigate('/')}>Catálogo</a>
                </li>
                <li>
                    <a onClick={() => navigate('/cart')}>Carrito </a>
                </li>
                <li>
                    <a onClick={() => navigate('/add')}>Agregar Producto</a>
                </li>
            </ul>
        </div>
    )
}
