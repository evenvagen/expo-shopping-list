import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/actions/ShoppingListAction';

export function DeleteShoppingListItemScreen({ navigation }){

    const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
    const dispatch = useDispatch();

    return (
        <View>
            <FlatList 
                data={shoppingList}
                keyExtractor={item => item.id}
                renderItem={( {item} ) => {
                   return (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.id}. {item.name}</Text>
                        <TouchableOpacity style={{width: '40%', backgroundColor: 'red'}} onPress={() => dispatch(remove(item.id))}>
                            <Text>Slett</Text>
                        </TouchableOpacity>
                    </View>
                   ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        backgroundColor: '#EDCB62',
        marginBottom: 1,
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        width: '40%'
    }
})