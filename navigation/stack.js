import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import HomeTabs from '../navigation/tabs';
import BookDetailScreen from '../screens/BookDetailScreen';
import { navOptions } from './options';
import EditBookScreen from '../screens/EditBookScreen';
import CreateBookTabs from '../navigation/tabs';
import Info from '../screens/Info';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Biblioteca" component={HomeTabs} />
      <Stack.Screen name="Detalles del libro" component={BookDetailScreen} />
      <Stack.Screen name="Edita tu libro" component={EditBookScreen} />
      <Stack.Screen name="Crea un nuevo libro" component={CreateBookTabs} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}


