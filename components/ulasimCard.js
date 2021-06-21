/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
 

 const Ulasim = (props) => {

  return (
    <View style={styles.background}>
    <TouchableOpacity style={styles.cards} onPress={() => props.navigation.push('Detail',{
      img:props.logo,
      tarih:props.tarih,
      saat:props.saat,
      page:props.page,
      firma:props.firma
    })}>
      <View>
        <Image style={styles.img} source={props.logo} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>{props.tarih}</Text>
        <Text style={styles.text}>{props.saat}</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.textPrice]}>{props.fiyat} ₺</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};
 
 const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f1f1f1',
        borderWidth: 1,
        borderColor: '#f7f7f7',
      },
      cards: {
        width: '100%',
        height: 100,
        backgroundColor: '#e5e5e5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      img: {
        height: 50,
        width: 100,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
      },
      textPrice: {
        fontSize: 24,
        color: '#1d3557',
      },
 });
 
 export default Ulasim;