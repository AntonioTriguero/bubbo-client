import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateBookScreen from '../screens/CreateBookScreen';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: '#10bfb7',
        tabBarInactiveTintColor: 'white',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTabs') {
            iconName = focused ? 'home' : 'home-outline';

          }
          else if (route.name === 'CreateBookTabs') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        }
      })}
    >
      <Tab.Screen name="HomeTabs" component={HomeScreen} />
      <Tab.Screen name="CreateBookTabs" component={CreateBookScreen} />
    </Tab.Navigator >
  );
}

export default HomeTabs;