import { View, Text, StyleSheet, StatusBar, Image, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import ListPortfolio from './ListPortfolio'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dream House',
    amount: '$ 349,706',
    perc: '3.2%',
    no: '7'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'My Travel',
    amount: '$ 123,206',
    perc: '1.5%',
    no: '4'
  },
  {
    id: '3ac68afc-c645-48d3-a4f8-fbd91aa97f63',
    title: 'My Business',
    amount: '$ 256,302',
    perc: '3.4%',
    no: '5'
  }
]

const Item = ({ title, amount, perc, no, pos }) => (
  <View style={styles.svv}>
    <View style={styles.v1}>
      <Text style={styles.h1}>{title}</Text>
      <Text style={styles.h2}>{no} Products</Text>
    </View>
    <View style={styles.v1}>
      <Text style={styles.h3}>{amount}</Text>
      <Image
        source={require('../assets/profit.png')}
        style={styles.icon}
      />
      <Text style={styles.h4}>{perc}</Text>
    </View>
  </View>
)
const SecondPage = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      amount={item.amount}
      perc={item.perc}
      no={item.no}
    />
  )
  return (
    <>
      <SafeAreaView style={styles.comV}>
        <StatusBar
          backgroundColor='white'
          barStyle='dark-content'
          color='white'
        />
        <View style={styles.up}><Text style={styles.upText}>R</Text></View>
        <View style={styles.head}><Text style={styles.headingBold}>Hi Rochak</Text><Text style={styles.desc1}>You have </Text><Text style={styles.descNo}>7</Text><Text style={styles.desc2}>Portfolio</Text></View>
        <Image
          style={styles.bi}
          source={require('../assets/bell.png')}
        />
        <View style={styles.ov1}>
          <Text style={styles.ov1t1}>My Portfolio</Text>
          <Text style={styles.ov1t2}>$ 349,706</Text>
          <Image
            style={styles.ov1i1}
            source={require('../assets/dollar.png')}
          />
        </View>
        <View style={styles.ov2}>
          <Text style={styles.ov2t1}>Profit</Text>
          <Text style={styles.ov2t2}>$11,189.22</Text>
          <Text style={styles.ov2t3}>3.2%</Text>
          <Image
            style={styles.pi}
            source={require('../assets/profit.png')}
          />
        </View>
        <View style={styles.head1V}><Text style={styles.head1}>List Portfolio</Text></View>
        <View style={styles.basic}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            style={styles.fl}
          />
        </View>
        <View style={styles.end}>
          <Pressable style={styles.add}>
            <Text style={styles.addText}>+ Add Portfolio</Text>
          </Pressable>
          <ListPortfolio />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  comV: {
    flex: 1,
    backgroundColor: 'white'
  },
  indi: {
    flex: 1,
    marginTop: 100
  },
  add: {
    width: '90%',
    position: 'absolute',
    top: '8%',
    left: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '29%',
    borderRadius: 12,
    elevation: 7,
    borderColor: 'black'
  },
  addText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'green'
  },
  headingBold: {
    fontSize: 15,
    fontWeight: 'bold',
    top: '2%'
  },
  head1V: {
    position: 'absolute',
    left: '6%',
    top: '36%'
  },
  head1: {
    fontWeight: 'bold',
    fontSize: 18
  },
  head: {
    alignItems: 'center',
    height: '30%',
    width: '50%',
    marginLeft: '25%',
    top: '1.3%'
  },
  desc1: {
    position: 'absolute',
    top: '15%',
    left: '9%'
  },
  descNo: {
    fontWeight: 'bold',
    position: 'absolute',
    top: '15%'
  },
  desc2: {
    position: 'absolute',
    top: '15%',
    right: '9%'
  },
  bi: {
    width: '9%',
    height: '2%',
    position: 'absolute',
    right: '7%',
    marginTop: '6%'
  },
  up: {
    width: '11.8%',
    height: '4.2%',
    borderRadius: 60,
    backgroundColor: '#42a4bb',
    position: 'absolute',
    left: '7%',
    marginTop: '3.5%',
    alignContent: 'center',
    alignItems: 'center'
  },
  upText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    top: '14%'
  },
  ova: {
    width: '90%',
    height: '60%',
    position: 'absolute',
    top: '30%',
    marginLeft: '4%',
    backgroundColor: 'white'
  },
  ov1: {
    width: '90%',
    backgroundColor: '#42a4bb',
    height: '19%',
    position: 'absolute',
    top: '11%',
    left: '5%',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000000'
  },
  ov2: {
    width: '70%',
    backgroundColor: 'white',
    height: '7.8%',
    position: 'absolute',
    top: '26.3%',
    left: '15%',
    borderRadius: 30,
    elevation: 15
  },
  ov1t1: {
    color: 'rgb(147, 234, 255)',
    left: '6%',
    top: '15%'
  },
  ov1t2: {
    color: 'white',
    fontSize: 30,
    top: '19%',
    left: '6%',
    fontWeight: 'bold'
  },
  ov1i1: {
    width: '31%',
    height: '70%',
    left: '63%',
    bottom: '37%'
  },
  ov2t1: {
    top: '30%',
    left: '9%',
    fontWeight: 'bold'
  },
  ov2t2: {
    left: '33%',
    bottom: '5%',
    color: '#3AB426',
    fontWeight: 'bold'
  },
  ov2t3: {
    left: '80%',
    bottom: '40%',
    fontSize: 12,
    color: '#3AB426',
    fontWeight: 'bold'
  },
  pi: {
    width: '9%',
    height: '50%',
    bottom: '79%',
    left: '67%'
  },
  lp: {
    bottom: '10%'
  },
  icon: {
    width: 16,
    height: 19,
    left: '73%',
    bottom: '5%'
  },
  svv: {
    width: '90%',
    left: '5%',
    elevation: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    borderRadius: 15,
    marginTop: '2%',
    marginBottom: '1%'
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
    top: '15%',
    left: '4%'
  },
  h2: {
    left: '70%',
    bottom: '30%'
  },
  h3: {
    fontSize: 22,
    fontWeight: 'bold',
    left: '4%',
    top: '17%'
  },
  h4: {
    left: '80%',
    bottom: '35%'
  },
  basic: {
    top: '10%',
    paddingBottom: '60%',
    height: '70%'
  },
  fl: {
    paddingBottom: '10%'
  },
  more: {
    position: 'absolute',
    elevation: 10
  },
  end: {
    height: '29%',
    backgroundColor: '#42a4bb',
    bottom: '21%',
    width: '95%',
    left: '2.5%',
    borderRadius: 20
  }
})

export default SecondPage
