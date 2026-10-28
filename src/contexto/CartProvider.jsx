import { CartContexto } from './CartContexto'
import { useState } from 'react'
import camara from '../assets/images/camara.png'
import tripie from '../assets/images/tripie.png'
import microfono from '../assets/images/microfono.png'
import audifonos from '../assets/images/audifonos.png'


export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([
        { name: "Cámara", id: 1, quantity: 3, description: "Esta cámara es de última generación", image: camara },//para usar la imagen se pone image
        { name: "Tripie", id: 2, quantity: 5, description: "Esta tripie soporta mucho", image: tripie },
        { name: "Micrófono", id: 3, quantity: 7, description: "Este micrófono es muy pro", image: microfono },
        { name: "Audifonos", id: 4, quantity: 9, description: "Estos audifonos se escuchan super cool", image: audifonos }
    ])
    const [productCart, setProductsCart] = useState([]);

    const addToCart = (id) => {
        setProducts((valoresPrev) => {
            const nuevaLista = valoresPrev.map((product) => {
                if (product.id === id && product.quantity > 0) {
                    return { ...product, quantity: product.quantity - 1 };
                } else {
                    return product;
                }
            });
            return nuevaLista;
        });
        setProductsCart((valoresPrev) => {
            const yaEstaEnCarrito = valoresPrev.find((item) => item.id === id);

            if (yaEstaEnCarrito) {
                const nuevoCarrito = valoresPrev.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                return nuevoCarrito;
            } else {
                const productoOriginal = products.find((product) => product.id === id);
                return [...valoresPrev, { ...productoOriginal, quantity: 1 }];
            }
        });
    }


    const removeFromCart = (id, quantity) => {
        setProducts((valoresPrev) => {
            const nuevaLista = valoresPrev.map((product) => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1 };
                } else {
                    return product;
                }
            });
            return nuevaLista;
        });

        setProductsCart((valoresPrev) => {
            const carritoActualizado = valoresPrev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });

            const carritoSinCeros = carritoActualizado.filter((item) => item.quantity > 0);
            return carritoSinCeros;
        });
    }

    const addProduct = (newProduct) => {
        setProducts((valoresPrev) => [...valoresPrev, newProduct]);
    }





    return (
        <CartContexto.Provider value={{ products, productCart, addToCart, removeFromCart, addProduct }}>
            {children}
        </CartContexto.Provider>
    )
}

