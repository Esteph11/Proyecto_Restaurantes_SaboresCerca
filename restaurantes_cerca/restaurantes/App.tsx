import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navegacion from './Components/Navegacion';
import { SaboresProvider } from './Provider/SaboresProvider';

export default function App() {
  return (
   
      <SaboresProvider>
        <Navegacion />
        <StatusBar style="auto" />
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
