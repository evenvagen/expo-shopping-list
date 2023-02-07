import { View, Text, TouchableOpacity } from 'react-native';

export function HomeScreen( { navigation } ){
  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{height: 200, width: 200, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ShoppingList')}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Handleliste</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 20 }} />

       <TouchableOpacity style={{height: 200, width: 200, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('ShoppingList')}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>AI</Text>
      </TouchableOpacity>
    </View>
  )
}