/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Icon from 'react-native-vector-icons/dist/Octicons';
 import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
 
 
 
 const Navbar = (props) => {
   return (
    <View style={styles.background}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
   );
 };
 
 const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f1f1f1',
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#457b9d'
      },
      title:{
          fontSize:22,
          fontWeight:'bold',
          color:'#1d3557'
      }
      
 });
 
 export default Navbar;