import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';

const Comment = (props) => {

    const createStar = () => {
        let star = []
        for (let i = 0; i < 5; i++) {
          
          star.push(<Icon name="primitive-dot" size={20} color="#fcbf49" />)
        }
        return star
      }

    return (
          <View style={styles.commnetArea}>
              <View>
                  <Icon1 name="user" size={50} color="black" />
              </View>
              <View style={{paddingRight:30}}>
                  <Text style={styles.baslik}>{props.name}</Text>
                  <View style = {styles.star}>
                        {createStar()}
                        <Text style={{fontSize:12}}> {props.puan}</Text>
                    </View>
                  <Text style={styles.icerik}>{props.icerik}</Text>
              </View>
          </View>
    )
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
      commnetArea:{
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          backgroundColor:'#d8e3e7',
          padding:10,
          marginTop:5,
          marginHorizontal:10,
          borderRadius:5,
      },
      baslik:{
        fontWeight:'bold',
        paddingLeft:10
      },
      icerik:{
        paddingLeft:10 ,
      },
      star:{
        flexDirection:'row',
        paddingLeft:10
      },

  });
  

export default Comment;