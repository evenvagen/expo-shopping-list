import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View> 
        <View style={styles.container}>
            <Text style={styles.headline}>Handleliste</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('ShowShoppingList')}>
                    <Text style={styles.boxText}>Vis</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <Text style={styles.boxText}>Legg til</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.box}>
                    <Text style={styles.boxText}>Endre</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <Text style={styles.boxText}>Slette</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "gray",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '25%'
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
