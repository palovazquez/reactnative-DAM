import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Listar from './components/listar';
import Detalle from './components/detalle';
import GestionUsuarios from './components/gestionUsuarios';
import AñadirUsuario from './components/usuarios/añadirUsuario';
import EliminarUsuario from './components/usuarios/eliminarUsuario';
import ModificarUsuario from './components/usuarios/modificarUsuario';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { StoreProvider } from './context/storeContext';
import { Home } from './components/home';
import { ListaCategorias } from './components/listaCategorias';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { UserProvider } from './context/userContext';

const Stack = createStackNavigator();
//navigator que conocemos, una pantalla se reemplaza por otra pantalla

export const screens = {
  listar: 'Listado de Productos',
  detalle: 'Detalle de Producto',
  homepage: 'Pagina Principal',
  listaCategorias: 'Categorias',
  gestionUsuarios: 'Gestión de Usuarios',
  añadirUsuario: 'Añadir un Usuario',
  modificarUsuario: 'Modificar un Usuario',
  eliminarUsuario: 'Eliminar un Usuario',
};

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <StoreProvider>
        <UserProvider>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Stack.Navigator>
              {/* adentro del navigator están todas las pantallas de nuestra app*/}
              <Stack.Screen
                initial={true}
                name={screens.homepage}
                options={{ headerShown: false }}
                component={Home}
              />
              <Stack.Screen
                name={screens.listar}
                options={{ headerShown: false }}
                component={Listar}
              />
              <Stack.Screen
                name={screens.detalle}
                options={{ headerShown: false }}
                component={Detalle}
              />
              <Stack.Screen
                name={screens.listaCategorias}
                options={{ headerShown: false }}
                component={ListaCategorias}
              />
              <Stack.Screen
                name={screens.gestionUsuarios}
                options={{ headerShown: false }}
                component={GestionUsuarios}
              />

              <Stack.Screen
                name={screens.añadirUsuario}
                options={{ headerShown: false }}
                component={AñadirUsuario}
              />
              <Stack.Screen
                name={screens.modificarUsuario}
                options={{ headerShown: false }}
                component={ModificarUsuario}
              />
              <Stack.Screen
                name={screens.eliminarUsuario}
                options={{ headerShown: false }}
                component={EliminarUsuario}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </StoreProvider>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
