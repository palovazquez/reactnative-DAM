import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const API_URL =
  'https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6';

export const StoreContext = createContext();

//el Provider es el que inyecta los valores y el Consumer es el que permite usarlos
export const StoreProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([
    {
      nombre: 'Celulares y Smartphones',
      color: '#84a59d',
      id: Math.random().toString(10),
    },
    {
      nombre: 'Accesorios para Celulares',
      color: '#f6bd60',
      id: Math.random().toString(10),
    },
    {
      nombre: 'Almacenamiento',
      color: '#f7ede2',
      id: Math.random().toString(10),
    },
    { nombre: 'Cámaras', color: '#f5cac3', id: Math.random().toString(10) },
  ]);
  const [categoriasProductos, setCategoriasProductos] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      //para usar axios, hacemos el install y dsps la importamos
      setProductos(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarProductoACategoria = (categoria, producto) => {
    if (!categoria?.id || !producto?.id) {
      return; // No hay id de categoria o producto
    }

    const categoriaProductos = categoriasProductos[categoria.id] ?? [];
    if (!categoriaProductos.includes(producto.id)) {
      //Si no esta lo agregamos
      const newCategoriasProductos = {
        ...categoriasProductos,
        [categoria.id]: [...categoriaProductos, producto.id],
      };
      setCategoriasProductos(newCategoriasProductos);
    }
  };

  const quitarProductoDeCategoria = (categoria, producto) => {
    if (!categoria?.id || !producto?.id) {
      return; // No hay id de categoria o producto
    }
    const categoriaProductos = categoriasProductos[categoria.id] ?? [];
    if (categoriaProductos.includes(producto.id)) {
      //Si esta lo quitamos
      setCategoriasProductos({
        ...categoriasProductos,
        [categoria.id]: categoriaProductos.filter((pid) => pid !== producto.id),
      });
    }
  };

  const obtenerCategoriasDelProducto = (producto) => {
    const categoriasId = Object.keys(categoriasProductos);
    const categoriasIdDelProducto = categoriasId.reduce(
      (acc, cur) =>
        categoriasProductos[cur].includes(producto.id) ? [...acc, cur] : acc,
      [],
    );
    const results = categorias.filter((c) =>
      categoriasIdDelProducto.includes(c.id),
    );
    return results;
  };

  useEffect(() => {
    fetchData();
  }, []);
  /* Lo de adentro es la función que se va a ejecutar cuando se de cierta condición
    ¿cuál es la condición? Lo que le pasamos []
    Si el array esta vacio, se ejecutará solamente una vez: al principio, cuando el componente sea declarado
    e instanciado. Si le ponemos [propiedad], fetchData se ejecutará cada vez que "propiedad" cambie.
    Ej. si quiero que, al cambiar un campo de texto, vuelva a buscar el producto */

  return (
    <StoreContext.Provider
      value={{
        productos,
        setProductos,
        categorias,
        setCategorias,
        agregarProductoACategoria,
        quitarProductoDeCategoria,
        obtenerCategoriasDelProducto,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
