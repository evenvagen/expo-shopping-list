import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useDispatch } from 'react-redux';
import { add } from "../redux/actions/ShoppingListAction";

export function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemValue, setItemValue] = useState('');

  const dispatch = useDispatch();

  const addShoppingListItem = () => {
    dispatch(add(itemValue));
    alert('Produkt lagt til');
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={{backgroundColor: '#C6C3B5'}}>
      <View>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.box('#6E8B3D')} onPress={() => navigation.navigate("ShowShoppingList")}>
              <Text style={styles.boxText}>Vis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box('#8BA446')} onPress={() => setModalVisible(true)}>
              <Text style={styles.boxText}>Legg til</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{justifyContent: "center", alignItems: "center", height: "100%"}} onPress={() => setModalVisible(false)}>
                  <View style={styles.modalContainer}>

                    <View style={{width: '100%', height: '15%', alignItems: 'flex-end'}}>
                      <TouchableOpacity onPress={() => {setModalVisible(false); setItemValue('')}} style={{backgroundColor: '#CC3232', width: '17%', margin: 10, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>×</Text>
                      </TouchableOpacity>
                    </View>
                  

                    <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                      <TextInput placeholder="Skriv inn vare.." placeholderTextColor='#808080' value={itemValue} style={styles.input} onChangeText={text => setItemValue(text)} />
                      <TouchableOpacity style={styles.submitButton} onPress={addShoppingListItem}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>Legg til</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </TouchableWithoutFeedback>
              
            </Modal>

          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.box('#FF7D40')}>
              <Text style={styles.boxText}>Endre</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box('#CC3232')} onPress={() => navigation.navigate('DeleteShoppingListItem')}>
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
  box: bgColor => ({
    height: 150,
    width: 150,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: bgColor,
    borderWidth: 1
  }),
  headline: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20%",
  },
  boxText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: '20%',
    width: '80%',
    backgroundColor: '#fff',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  submitButton: {
    height: '20%', 
    width: '80%', 
    marginTop: 7, 
    backgroundColor: '#8BA446',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5
  },
  modalContainer: {
    height: "30%",
    width: "80%",
    backgroundColor: "#EDCB62",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  }
});
