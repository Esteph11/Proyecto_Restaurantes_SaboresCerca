import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import Login from '../Page/Login';  
import SignUp from '../Page/SignUp';  
import Administrador from '../Page/Administrador'; 
import Usuario from '../Page/Usuario';  
import UsuariosAdmin from '../Page/Admin/UsuariosAdmin';  
import Negocios from '../Page/Admin/Negocios';  
import Menus from '../Page/Admin/Menus';  
import NegociosUser from '../Page/User/NegociosUser';  
import Comentarios from '../Page/User/Comentarios';  
import { useSaboresContext } from '../Context/SaboresContext';

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
          <AppStack.Screen name="Menus" component={Menus} />
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





/*import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';  
import { createStackNavigator } from '@react-navigation/stack';  
import Administrador from '../Page/Administrador';
import Login from '../Page/Login';

export default function Navegacion() {
  const Stack = createStackNavigator();  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurantes Sabores Cerca" component={Login} />
        <Stack.Screen name="Administrador" component={Administrador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



/*import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Page/Home'
import AgregarTarea from '../Page/AgregarTarea'
import Buscador from '../Page/Buscador'

export default function Navegacion() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Restaurantes Sabores Cerca' component={Home}></Tab.Screen>
       </Tab.Navigator>
    </NavigationContainer>
  )
}

/*
      <Tab.Screen name='Administrador' component={Administrador}></Tab.Screen>
            <Tab.Screen name='Usuario' component={Usuario}></Tab.Screen>
       

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Login from '../Page/Login'
import Administrador from '../Page/Administrador'
import Usuario from '../Page/Usuario'

function HomeScreen() {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

type RootTabParamList = {
  Login: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/*import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Page/Login'
import Administrador from '../Page/Administrador'
import Usuario from '../Page/Usuario'

export default function Navegacion() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login}></Tab.Screen>
            <Tab.Screen name='Administrador' component={Administrador}></Tab.Screen>
            <Tab.Screen name='Usuario' component={Usuario}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
*/
