import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  SaboresProvider from './Provider/SaboresProvider';
import StackNavigator from './Components/Navegacion'; // Asumo que el archivo se llama Navegacion.tsx

const Stack = createStackNavigator();

export default function App() {
  return (
    <SaboresProvider>
      <NavigationContainer>
        <StackNavigator /> {/* Este es el que definiste correctamente */}
      </NavigationContainer>
    </SaboresProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


/*import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Hola, mundo!</Text>
    </View>
  );
}

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Components/Navegacion';
import { SaboresProvider } from './Provider/SaboresProvider';

export default function App() {
  return (
    <SaboresProvider>
        <Navegacion></Navegacion>
    </SaboresProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Components/Navegacion';
import TareaProvider from './Provider/TareaProvider';

export default function App() {
  return (

    <TareaProvider>
        <Navegacion></Navegacion>
    </TareaProvider>

    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
