/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   ScrollView
 } from 'react-native';
 import UlasimCard from '../components/ulasimCard'
 import Navbar from '../components/navbar'
 
 
 
 const Ulasim = ({navigation}) => {
    let thy = require('../img/thy.png');
    let pegasus = require('../img/pegasus.png');
   return (
    <View style={styles.background}>
        <Navbar title={'Ulaşım'}/>
        <ScrollView>
          <UlasimCard
            logo={thy}
            fiyat={'200'}
            tarih={'30.03.2021'}
            saat={'12.40'}
            navigation={navigation}
          />
          <UlasimCard
            logo={pegasus}
            fiyat={'240'}
            tarih={'30.03.2021'}
            saat={'15.20'}
            navigation={navigation}
          />
          <UlasimCard
            logo={thy}
            fiyat={'200'}
            tarih={'30.03.2021'}
            saat={'12.40'}
            navigation={navigation}
          />
          <UlasimCard
            logo={pegasus}
            fiyat={'240'}
            tarih={'30.03.2021'}
            saat={'15.20'}
            navigation={navigation}
          />
          <UlasimCard
            logo={thy}
            fiyat={'200'}
            tarih={'30.03.2021'}
            saat={'12.40'}
            navigation={navigation}
          />
          <UlasimCard
            logo={pegasus}
            fiyat={'240'}
            tarih={'30.03.2021'}
            saat={'15.20'}
            navigation={navigation}
          />
          <UlasimCard
            logo={thy}
            fiyat={'200'}
            tarih={'30.03.2021'}
            saat={'12.40'}
            navigation={navigation}
          />
          <UlasimCard
            logo={pegasus}
            fiyat={'240'}
            tarih={'30.03.2021'}
            saat={'15.20'}
            navigation={navigation}
          />
          <UlasimCard
            logo={thy}
            fiyat={'200'}
            tarih={'30.03.2021'}
            saat={'12.40'}
            navigation={navigation}
          />
          <UlasimCard
            logo={pegasus}
            fiyat={'240'}
            tarih={'30.03.2021'}
            saat={'15.20'}
            navigation={navigation}
          />
        </ScrollView>
      </View>
   );
 };
 
 const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f1f1f1',
      },
 });
 
 export default Ulasim;