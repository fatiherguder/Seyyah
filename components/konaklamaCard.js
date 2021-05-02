/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Icon from 'react-native-vector-icons/dist/FontAwesome';
 import Icon1 from 'react-native-vector-icons/dist/EvilIcons';
 import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
 
 
 
 const KonaklamaCard = (props) => {
    const createStar = () => {
        let star = []
        for (let i = 0; i < props.star; i++) {
          
          star.push(<Icon name="star" size={20} color="#fcbf49" />)
        }
        return star
      }

   return (
    <View style={styles.background}>
        <TouchableOpacity style={styles.cards} onPress={() => props.navigation.push('Detail')}>
          <View>
            <Image style={styles.img} source={props.img} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{props.title}</Text>


            <View style = {styles.div}>
                {createStar()}
            </View>


            <View style = {styles.div}>
            <Icon1 name="location" size={20} color="black"  />
            <Text style={styles.text}> Şehir merkezine {props.location}km</Text>
            </View>
            <Text><Text style={{fontWeight:'700'}}>Puan:</Text>{props.puan}</Text>
          </View>
          
          <View>
            <Text style={[styles.title, styles.textPrice]}>{props.price} ₺</Text>
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
        height: 150,
        backgroundColor: '#e5e5e5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      img: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        
      },
      title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize:18,
        marginLeft:10
      },
      textPrice: {
        fontSize: 24,
        color: '#1d3557',
      },
      div:{
        flexDirection:'row',
        padding:5,
      },
      info:{
        alignItems: 'flex-start'
      }
 });
 
 export default KonaklamaCard;