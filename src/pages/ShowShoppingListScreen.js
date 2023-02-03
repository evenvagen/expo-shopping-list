import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

export function ShowShoppingListScreen({ navigation }){

    const shoppingList = useSelector((state) => state.shoppingList.shoppingList)

    console.log(shoppingList);

    return (
        <View>
            <FlatList 
                data={shoppingList}
                keyExtractor={item => item.id}
                renderItem={( {item} ) => {
                   return (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.id}. {item.name}</Text>
                    </View>
                   ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 10,
        backgroundColor: 'gray',
        marginBottom: 1
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})