import React, { useState, createContext } from 'react';

export const UserContext = createContext();

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
    {
      usuario: 'hernan22',
      correo: 'hernan@gmail.com',
      contraseña: 123456,
      edad: 21,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'guille33',
      correo: 'guille@gmail.com',
      contraseña: 123456,
      edad: 18,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'nicolas8',
      correo: 'amparo@gmail.com',
      contraseña: 123456,
      edad: 28,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'cande30',
      correo: 'cande@gmail.com',
      contraseña: 123456,
      edad: 23,
      articulos: [],
      id: Math.random(),
    },
    {
      usuario: 'cielo19',
      correo: 'cielo@gmail.com',
      contraseña: 123456,
      edad: 19,
      articulos: [],
      id: Math.random(),
    },
  ]);

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
