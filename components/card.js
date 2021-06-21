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
 
 
 
 const Card = (props) => {
    const createStar = () => {
        let star = []
        for (let i = 0; i < props.puan; i++) {
          
          star.push(<Icon name="primitive-dot" size={25} color="#fcbf49" />)
        }
        return star
      }

   return (
    <View style={styles.background}>
        <TouchableOpacity style={styles.cards} onPress={() => props.navigation.push('Detail',
        {title:props.title,
        img:props.img,
        puan:props.puan,
        category:props.category,
        page:props.page})}>
          <View style={styles.imgArea}>
            <Image style={styles.img} source={props.img} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{props.title}</Text>
            <View style = {styles.div}>
                {createStar()}
                <Text> {props.puan}</Text>
            </View>
            <Text>{props.category}</Text>
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
        paddingHorizontal: 10,
      },
      img: {
        height: 80,
        width: 100,
        resizeMode: 'cover',
        
      },
      imgArea:{
          flex:1
      },
      title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize:18,
        marginLeft:10
      },
      div:{
        flexDirection:'row',
        padding:5,
      },
      info:{
        alignItems: 'center',
        justifyContent:'center',
        flex:3,
      }
 });
 
 export default Card;