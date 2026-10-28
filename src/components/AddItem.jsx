import { useState, useContext } from "react";
import { CartContexto } from '../contexto/CartContexto'

export const AddItem = () => {
  const { addProduct } = useContext(CartContexto);

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    name: "", description: "", image: null, quantity: 1, id: Date.now()
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setProduct({ ...product, image: url })
    }
  };

  const agregarEquipo = (e) => {
    e.preventDefault();
    addProduct({ ...product, quantity: Number(product.quantity) })
    setProduct({
      name: "", description: "", image: null, quantity: 1, id: Date.now()
    })
    setImage(null)
    e.target.reset()
  }

  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col justify-between items-center border border-gray-500 w-4/5 m-2 p-2 rounded">
        <div className="w-full flex">
          <div className="flex justify-center text-center w-screen">
            <p>Agregar equipo de video</p>
          </div>
          <button
            onClick={() => setVisible(!visible)}
            className="cursor-pointer"
          >
            {visible ? "⬆️" : "⬇️"}
          </button>
        </div>
        {visible && (
          <form className="flex flex-col mt-2" onSubmit={agregarEquipo}>
            <label htmlFor="name"> nombre: </label>
            <input
              id="name"
              type="text"
              name="nombre"
              placeholder="nombre del equipo"
              className="border my-2 p-1 rounded"
              required
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <label htmlFor="descripcion"> descripción: </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="describe el equipo"
              className="border my-2 p-1 rounded"
              required
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            <label htmlFor="cantidad"> cantidad: </label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              placeholder="cantidad"
              className="border my-2 p-1 rounded"
              min={1}
              required
              value={product.quantity}
              onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
            />
            <label htmlFor="imagen"> imagen: </label>
            <input
              id="imagen"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border my-2 p-1 rounded"
              name="imagen"
              required
            />
            {image && <img src={image} alt="vista previa" className="w-40 h-40 object-cover" />}
            <button
              type="submit"
              className="bg-purple-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-900 active:scale-95 transition-all duration-150 ease-in-out mt-2"
            >
              Agregar equipo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}