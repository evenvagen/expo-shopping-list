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
                        <TouchableOpacity style={{width: '20%',height: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}} onPress={() => dispatch(remove(item.id))}>
                            <Text style={{fontSize: 40}}>×</Text>
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
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDCB62',
        marginBottom: 1,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
        paddingLeft: 20
    }
})