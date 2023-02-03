import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

export function ShowShoppingListScreen({ navigation }){

    const shoppingList = useSelector((state) => state.shoppingList.shoppingList)

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
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDCB62',
        marginBottom: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        paddingLeft: 20
    }
})