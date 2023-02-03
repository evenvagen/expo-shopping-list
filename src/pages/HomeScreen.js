import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native";

export function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
                <TouchableWithoutFeedback style={{height: "30%", width: "80%", backgroundColor: "yellow"}}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={{fontSize: 18, textAlign: "right", margin: 10}}>X</Text>
                  </TouchableOpacity>
                  <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                    <Text>Hello world</Text>
                  </View>
                </TouchableWithoutFeedback>
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
});
