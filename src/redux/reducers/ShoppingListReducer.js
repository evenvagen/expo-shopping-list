const initialState = {
    shoppingList: [{id: 1, name: 'bread'}, {id: 2, name: 'juice'}]
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const lastItem = state.shoppingList.slice(-1)[0];
            return{
                ...state,
                shoppingList: [...state.shoppingList, {id: lastItem.id + 1, name: action.payload}]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                shoppingList: state.shoppingList.filter((item) => item.id !== action.id)
            }
        default:
            return state;
    }
};

