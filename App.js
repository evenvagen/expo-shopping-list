import { HomeScreen } from "./src/pages/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ShowShoppingListScreen } from "./src/pages/ShowShoppingListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="ShowShoppingList" component={ShowShoppingListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  )
}
