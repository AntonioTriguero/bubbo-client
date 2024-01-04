import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  return (
    <NavigationContainer >
      <HomeStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


