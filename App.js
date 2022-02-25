import { StyleSheet, SafeAreaView, View, Text, Image, TouchableHighlight, StatusBar } from 'react-native'
import SecondPage from './components/SecondPage'
// import ListPortfolio from './components/ListPortfolio'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function SecondPage1 () {
  return (
    <SecondPage />
  )
}

const ulc = '#42a4bb'
function FirstPage1 ({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('Second Page')
  }
  return (
    <View style={styles.basciq}>
      <StatusBar
        backgroundColor='#42a4bb'
        barStyle='light-content'
        color='white'
      />
      <Image
        style={styles.image}
        source={require('./assets/card.png')}
      />
      <Text style={styles.heading1}>Easy Way</Text>
      <Text style={styles.heading2}>To Invest Easily</Text>
      <Text style={styles.content}>A new way that makes it easier for you to Handle and Help your finances</Text>
      <TouchableHighlight
        style={styles.button}
        underlayColor={ulc}
        onPress={onPressHandler}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableHighlight>
    </View>
  )
}
const Stack = createStackNavigator()
function App () {
  return (
    <SafeAreaView style={styles.basic}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home Page' component={FirstPage1} />
          <Stack.Screen name='Second Page' component={SecondPage1} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  basic: {
    height: '100%'
  },
  heading1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '65%',
    marginLeft: '4%'
  },
  heading2: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '70%',
    marginLeft: '4%'
  },
  content: {
    color: 'rgb(147, 234, 255)',
    fontSize: 15,
    marginLeft: '4%',
    position: 'absolute',
    top: '75%',
    marginTop: '5%'
  },
  basciq: {
    backgroundColor: '#42a4bb',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  },
  image: {
    width: '100%',
    height: '55%',
    position: 'absolute',
    top: '10%'
  },
  button: {
    width: '45%',
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: '87%',
    marginLeft: '4%',
    alignItems: 'center',
    alignContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '22%'
  }
})

export default App
