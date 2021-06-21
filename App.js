import React, {useState} from 'react';
import { Button, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import Main from './pages/Main'
import Detail from './pages/Detail';
import Navbar from './components/navbar'
import Ulasim from './pages/Ulasim'
import Konaklama from './pages/Konaklama'
import NereyeGidilir from './pages/NereyeGidilir'
import NeYenir from './pages/NeYenir'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, InlineIcon } from '@iconify/react';
import dateLine from '@iconify-icons/clarity/date-line';




function HomeStackScreen({navigation}){


  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  
  return(
    <View style={styles.background}>
    <View style={styles.logoArea}>
      <Image style={styles.logo} source={require('./img/logo.png')} />
    </View>
    <View style={styles.formArea}>
    <TextInput
        placeholder={'Nereden'}
        placeholderTextColor="#000" 
        style={styles.input}
      />
      <TextInput
        placeholder={'Nereye Gitmek İstersiniz?'}
        placeholderTextColor="#000" 
        style={styles.input}
      />

<View>
      <View>
        <TouchableOpacity onPress={showDatepicker} title="Show date picker!">
          <Text>tarih</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')} >
        <Text style={styles.buttonText}>Devam</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}


const UlasimStack = createStackNavigator();
function UlasimStackScreen() {
  return (
    <UlasimStack.Navigator initialRouteName="Ulasim">
        <UlasimStack.Screen name="Ulasim" component={Ulasim} options={navigationOptionHandler}/>
        <UlasimStack.Screen name="Detail" component={Detail} options={navigationOptionHandler}/>
      </UlasimStack.Navigator>
  )}


  
  const KonaklamaStack = createStackNavigator();
  function KonaklamaStackScreen() {
    return (
      <KonaklamaStack.Navigator initialRouteName="Konaklama">
          <KonaklamaStack.Screen name="Konaklama" component={Konaklama} options={navigationOptionHandler}/>
          <KonaklamaStack.Screen name="Detail" component={Detail} options={navigationOptionHandler}/>
        </KonaklamaStack.Navigator>
    )}


  
    const NereyeGidilirStack = createStackNavigator();
    function NereyeGidilirStackScreen() {
      return (
        <NereyeGidilirStack.Navigator initialRouteName="NereyeGidilir">
            <NereyeGidilirStack.Screen name="NereyeGidilir" component={NereyeGidilir} options={navigationOptionHandler}/>
            <NereyeGidilirStack.Screen name="Detail" component={Detail} options={navigationOptionHandler}/>
          </NereyeGidilirStack.Navigator>
      )}


  
      
    const NeYenirStack = createStackNavigator();
    function NeYenirStackScreen() {
      return (
        <NeYenirStack.Navigator initialRouteName="NeYenir">
            <NeYenirStack.Screen name="NeYenir" component={NeYenir} options={navigationOptionHandler}/>
            <NeYenirStack.Screen name="Detail" component={Detail} options={navigationOptionHandler}/>
          </NeYenirStack.Navigator>
      )}


const Tab = createBottomTabNavigator();

function MainStack(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Ulaşım') {
            return (
              <Icon
                name={
                  focused
                    ? 'airplane'
                    : 'airplane'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Konaklama') {
            return (
              <Icon
                name='ios-list-box'
                size={size}
                color={color}
              />
              
            );
          } else if (route.name === 'Konaklama') {
            return (
              <Icon
                name='ios-list-box'
                size={size}
                color={color}
              />
              
            );
          }else if (route.name === 'Nereye Gidilir') {
            return (
              <Icon
              name='ios-information-circle'
              size={size}
              color={color}
            />
              
              
            );
          }else if (route.name === 'Ne Yenir') {
            return (
              <Icon
              name='ios-information-circle'
              size={size}
              color={color}
            />
              
              
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1d3557',
        inactiveTintColor: '#457b9d',
      }}
      >
        <Tab.Screen name="Ulaşım" component={UlasimStackScreen} options={navigationOptionHandler}/>
        <Tab.Screen name="Konaklama" component={KonaklamaStackScreen}  options={navigationOptionHandler}/>
        <Tab.Screen name="Nereye Gidilir" component={NereyeGidilirStackScreen} options={navigationOptionHandler} />
        <Tab.Screen name="Ne Yenir" component={NeYenirStackScreen} options={navigationOptionHandler} />
      </Tab.Navigator>
  )
}

const HomeStack = createStackNavigator();

const navigationOptionHandler = () => (
  {
    headerShown:false
  }  
)
function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeStackScreen} options={navigationOptionHandler}/>
        <HomeStack.Screen name="Main" component={MainStack} options={navigationOptionHandler} />
      </HomeStack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    logo: {
      height: 200,
      width: 200,
    },
    logoArea: {
      marginTop: 50,
      alignItems: 'center',
      flex:1
    },
    formArea: {
      padding: 20,
      flex:2
    },
    input: {
      borderColor: '#1d3557',
      borderWidth: 1,
      borderRadius: 5,
      margin: 5,
    },
    button: {
      backgroundColor: '#457b9d',
      paddingVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 10,
    },
    buttonText: {
      alignItems: 'center',
      color: '#f1faee',
      fontSize: 16,
      fontWeight: '700',
    },
});

export default App;