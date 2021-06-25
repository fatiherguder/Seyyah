import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, Dimensions,TextInput, Picker, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import Comment from '../components/comment'
import { useRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";
import { WebView } from 'react-native-webview';

const Detail = (navigation) => {

  const route = useRoute();

    const createStar = () => {
        let star = []
        for (let i = 0; i < route.params.puan; i++) {
          
          star.push(<Icon name="primitive-dot" size={25} color="#fcbf49" />)
        }
        return star
      }

      const [selectedValue, setSelectedValue] = useState("Puan");
      const [data, setData] = useState([]);
      var page = route.params.page
      var webUrl = route.params.webUrl
      var yorumIcerik
      var yorumName
      var img

      useEffect(() => {
        var tempData = [];
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
      route.params.title == "Tarihi Medrese Kahvehanesi" ? img  = require('../img/yemek/medrese.jpg') : img = require('../img/yemek/kandil.jpg')
      

    if(page == 'ulasim'){
      return (
          <WebView
        source={{ uri: webUrl }}
      />
    )
    }
    else{
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
        <View>
        <Text style={styles.commentTitle}>Yorum Yap</Text>
          <TextInput
          placeholder={'İsim - Soyisim'}
          placeholderTextColor="#000"
          value={yorumName}
          style={styles.inputName}/>
          <TextInput
          placeholder={'Yorum'}
          placeholderTextColor="#000"
          value={yorumIcerik}
          style={styles.inputComment}/>
          <Picker
              selectedValue={selectedValue}
              style={{ height: 20}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Puan" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
            <TouchableOpacity style={styles.button} onPress={() => {
              firestore()
              .collection("konya")
              .doc(page)
              .collection("0")
              .doc(item.id)
              .add({
                name: yorumName,
                icerik: yorumIcerik,
                puan: selectedValue,
              })
              .then(() => {
                console.log('Comment added!');
              });
            }} >
              <Text style={styles.btnText}>Yorumu Gönder</Text>
              </TouchableOpacity>
        </View>
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
        fontSize:14,
        marginTop:50
      },
      inputName: {
        borderColor: '#1d3557',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        height:30,
        fontSize:12,
        padding:5
      },
      inputComment: {
        borderColor: '#1d3557',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        height:150,
      },
      button: {
        backgroundColor: '#457b9d',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
      },
      btnText:{
        alignItems: 'center',
        color: '#f1faee',
      }
      
      

  });
  

export default Detail;