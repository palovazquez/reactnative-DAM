import React, { useState, createContext } from 'react';

export const UserContext = createContext();

//el Provider es el que inyecta los valores y el Consumer es el que permite usarlos
export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([
    {
      usuario: 'milagros1',
      correo: 'milagros@gmail.com',
      contraseña: 123456,
      edad: 18,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'juan1997',
      correo: 'juan@gmail.com',
      contraseña: 123456,
      edad: 22,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'pedro22',
      correo: 'pedro@gmail.com',
      contraseña: 123456,
      edad: 30,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'elena70',
      correo: 'else@gmail.com',
      contraseña: 123456,
      edad: 50,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'camila123',
      correo: 'camila@gmail.com',
      contraseña: 123456,
      edad: 58,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'pilar4',
      correo: 'pilar@gmail.com',
      contraseña: 123456,
      edad: 22,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'jose55',
      correo: 'jose@gmail.com',
      contraseña: 123456,
      edad: 18,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'paz6',
      correo: 'paz@gmail.com',
      contraseña: 123456,
      edad: 40,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'paula77',
      correo: 'paula@gmail.com',
      contraseña: 123456,
      edad: 36,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'omar63',
      correo: 'omar@gmail.com',
      contraseña: 123456,
      edad: 45,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'julieta2',
      correo: 'juleta@gmail.com',
      contraseña: 123456,
      edad: 33,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'amparo',
      correo: 'amparo@gmail.com',
      contraseña: 123456,
      edad: 19,
      articulos: [],
      id: Math.random(),
    },
  ]);

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

  return (
    <UserContext.Provider
      value={{
        usuarios,
        setUsuarios,
      }}>
      {children}
    </UserContext.Provider>
  );
};
