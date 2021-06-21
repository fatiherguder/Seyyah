import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import Comment from '../components/comment'
import { useRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";

const Detail = (navigation) => {

  const route = useRoute();

    const createStar = () => {
        let star = []
        for (let i = 0; i < route.params.puan; i++) {
          
          star.push(<Icon name="primitive-dot" size={25} color="#fcbf49" />)
        }
        return star
      }

      const [data, setData] = useState([]);

      useEffect(() => {
        var tempData = [];
        var page = route.params.page
        const api = firestore()
          .collection("konya")
          .doc(page)
          .collection("0")
          .onSnapshot((snapshot) => {
            snapshot.docs.map(doc => tempData.push(doc.data()))
            setData(tempData);
          });
      }, [])

      
      console.log(route.params)

    return (
        <ScrollView style={styles.background}>
            {data != null ? (
              <View>
                {data.map(item => item.title == route.params.title && (item.firma == route.params.firma && item.saat == route.params.saat) ? (
                  <View>
                  <Image style={styles.img} source={route.params.img}/>
            <View style={styles.info}>
                <Text style={styles.title}>{route.params.title}</Text>
                <View style={styles.div}>
                    <View style = {styles.star}>
                        {createStar()}
                        <Text> {route.params.puan}</Text>
                    </View>
                    <Text style={{paddingLeft:10}}>- {route.params.category}</Text>
                </View>
                <Text>{item.bilgi}</Text>
          </View>
          <Text style={[styles.commentTitle, {paddingTop:20}]}>Adres:</Text>
          <Text style={{paddingHorizontal:10}}>{item.adres}</Text>
          <View style={styles.commetArea}>
            <Text style={styles.commentTitle}>Seyehat Edenlerin Yorumları</Text>
            {
              item.yorum != null ? (
                <View>
                  {item.yorum.map(yorum => <View>
                    <Comment name={yorum.name} icerik={yorum.icerik} puan={yorum.puan}/>
                  </View>)}
                </View>
              ): null
            }
          </View>
                </View>
                ):null)}
              </View>
            ) : null}
        </ScrollView>
    )
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#f1f1f1',
      },
      img: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
      },
      info: {
          justifyContent:'center',
          alignItems:'center',
          paddingTop:10,
          paddingHorizontal:10
      },
      title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize:24
      },
      star:{
        flexDirection:'row',
        padding:5,
      },
      div:{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
      },
      commetArea:{
        marginTop:20
      },
      commentTitle:{
        paddingLeft:10,
        fontWeight:'700',
        fontSize:14
      }
      

  });
  

export default Detail;