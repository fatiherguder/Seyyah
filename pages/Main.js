import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import Ulasim from './Ulasim'
import Konaklama from './Konaklama'
import NereyeGidilir from './NereyeGidilir'
import NeYenir from './NeYenir'
import Navbar from '../components/navbar'
import Detail from './Detail'

function UlasimScreen() {
  return (
    <View>
      <Navbar title={'Ulaşım'}/>
      <Ulasim />
    </View>
  );
}

function KonaklamaScreen() {
  return (
      <View>
        <Navbar title={'Konaklama'}/>
        <Konaklama/>
      </View>
    
  );
}

function NereyeGidilirScreen() {
    return (
      <View>
        <Navbar title={'Nereye Gidilir?'}/>
        <NereyeGidilir/>
      </View>
    );
  }

  function NeYenirScreen() {
    return (
      <View>
        <Navbar title={'Ne Yenir?'}/>
        <NeYenir/>
      </View>
    );
  }

  function DetailScreen() {
    return (
      <View>
        <Detail/>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
        <Tab.Screen name="Ulaşım" component={UlasimScreen}/>
        <Tab.Screen name="Konaklama" component={KonaklamaScreen} />
        <Tab.Screen name="Nereye Gidilir" component={NereyeGidilirScreen} />
        <Tab.Screen name="Ne Yenir" component={NeYenirScreen} />
      </Tab.Navigator>
  );
}