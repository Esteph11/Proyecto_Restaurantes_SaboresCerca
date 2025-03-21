import React, { createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import Login from '../Page/Login';  
import SignUp from '../Page/SignUp';  
import Administrador from '../Page/Administrador'; 
import Usuario from '../Page/Usuario';  
import UsuariosAdmin from '../Page/Admin/UsuariosAdmin';  
import Negocios from '../Page/Admin/Negocios';  
import MenusAdmin from '../Page/Admin/MenusAdmin';  
import NegociosUser from '../Page/User/NegociosUser';  
import Comentarios from '../Page/User/Comentarios';  
import { useSaboresContext } from '../Context/useSaboresContext';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Admin: undefined;
  User: undefined;
  UsuariosAdmin: undefined;
  Negocios: undefined;
  Menus: undefined;
};


const Navegacion = () => {
  
const { isLoggedIn } = useSaboresContext();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppStack.Navigator>
          <AppStack.Screen name="Admin" component={Administrador} />
          <AppStack.Screen name="Usuarios" component={Usuario} />
          <AppStack.Screen name="MenusAdmin" component={MenusAdmin} />
          <AppStack.Screen name="Negocios" component={Negocios} />
          <AppStack.Screen name="UsuariosAdmin" component={UsuariosAdmin} />
          <AppStack.Screen name="NegociosUser" component={NegociosUser} />
          <AppStack.Screen name="Comentarios" component={Comentarios} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Restaurantes Sabores Cerca">
          <AuthStack.Screen name="Restaurantes Sabores Cerca" component={Login} />
          <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navegacion;






