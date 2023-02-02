import { createStore, combineReducers} from 'redux';
import ShoppingListReducer from './reducers/ShoppingListReducer';
 
const rootReducer = combineReducers({
  shoppingList: ShoppingListReducer,
});
 
export const store = createStore(rootReducer);