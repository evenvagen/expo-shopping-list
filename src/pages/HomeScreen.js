import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Modal, TextInput } from "react-native";

export function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemValue, setItemValue] = useState('');

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <Text style={styles.headline}>Handleliste</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("ShowShoppingList")}>
              <Text style={styles.boxText}>Vis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={() => setModalVisible(true)}>
              <Text style={styles.boxText}>Legg til</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
              <View style={{justifyContent: "center", alignItems: "center", height: "100%"}} onPress={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>

                  <View style={{width: '100%', height: '15%', alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{backgroundColor: '#fff', width: '15%', margin: 10, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                      <Text style={{fontSize: 20}}>×</Text>
                    </TouchableOpacity>
                  </View>
                 

                  <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                    <TextInput placeholder="Skriv inn vare.." placeholderTextColor='#808080' value={itemValue} style={styles.input} />
                    <TouchableOpacity style={styles.submitButton}>
                      <Text>Legg til</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </Modal>

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
    borderRadius: 5,
  },
  headline: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20%",
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: '20%',
    width: '80%',
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 16,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  submitButton: {
    height: '20%', 
    width: '80%', 
    marginTop: 5, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  modalContainer: {
    height: "30%",
    width: "80%",
    backgroundColor: "#FFD300",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  }
});
