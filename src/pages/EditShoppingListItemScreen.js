import { View, FlatList, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { edit } from '../redux/actions/ShoppingListAction';

export function EditShoppingListItemScreen({ navigation }){

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
                        <Text style={{fontSize: 18, marginRight: 10}}>{item.id}</Text>
                        <TextInput style={styles.input} value={item.name} onChangeText={text => dispatch(edit({id: item.id, name: text}))} />
                        {/* <TouchableOpacity style={{width: '20%',height: '100%', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 40}}>✔</Text>
                        </TouchableOpacity> */}
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
        backgroundColor: '#fff',
        marginBottom: 1,
        flexDirection: 'row',
    },
    input: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '90%',
        paddingLeft: 20,
        backgroundColor: '#fff',
        height: '100%'
    }
})