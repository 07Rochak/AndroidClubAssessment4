import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'

const ListPortfolio = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Amazon    <Text style={styles.profit}>$ 1,357</Text></Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.bc}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Best Buys</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '30%',
    height: '29%',
    paddingTop: 10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '90%'
  },
  button: {
    width: '90%',
    position: 'absolute',
    top: '10%',
    left: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '110%',
    marginTop: 10,
    borderRadius: 12,
    elevation: 7,
    borderColor: 'black'
  },
  buttonOpen: {
    backgroundColor: 'white',
    top: '30%'
  },
  buttonClose: {
    backgroundColor: '#42a4bb',
    left: '18%',
    height: '45%',
    borderRadius: 25,
    top: '80%',
    color: 'white'
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19
  },
  bc: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold'
  },
  profit: {
    color: '#3AB426'
  }
})
export default ListPortfolio
