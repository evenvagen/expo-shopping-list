import { HomeScreen } from "./src/pages/HomeScreen";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ShowShoppingListScreen } from "./src/pages/ShowShoppingListScreen";
import { DeleteShoppingListItemScreen } from "./src/pages/DeleteShoppingListItemScreen";

const Stack = createNativeStackNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#000',
    background: '#C6C3B5',
    text: '#fff'
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Handleliste' }} />
          <Stack.Screen name="ShowShoppingList" component={ShowShoppingListScreen} options={{ headerTitle: 'Handleliste', headerBackTitle: ' ' }} />
          <Stack.Screen name="DeleteShoppingListItem" component={DeleteShoppingListItemScreen} options={{ headerTitle: 'Slett produkt', headerBackTitle: ' ' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  )
}
