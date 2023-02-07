const initialState = {
    shoppingList: [{id: 1, name: 'Brød'}, {id: 2, name: 'Melk'}]
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const id = state.shoppingList.length > 0 ? state.shoppingList.slice(-1)[0].id : 0;
            return{
                ...state,
                shoppingList: [...state.shoppingList, {id: id + 1, name: action.payload}]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                shoppingList: state.shoppingList.filter((item) => item.id !== action.id)
            }
        case 'EDIT_ITEM':
            const index = state.shoppingList.findIndex((item) => item.id === action.payload.id);
            const newArray = [...state.shoppingList];
            newArray[index].name = action.payload.name;

            return {
                ...state,
                shoppingList: newArray
            }
        case 'REMOVE_ALL_ITEMS':
            return {
                ...state,
                shoppingList: []
            }
        default:
            return state;
    }
};

