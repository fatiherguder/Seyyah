import React from 'react'
import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Octicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import Comment from '../components/comment'

const Detail = (navigation, route) => {

    const createStar = () => {
        let star = []
        for (let i = 0; i < 5; i++) {
          
          star.push(<Icon name="primitive-dot" size={25} color="#fcbf49" />)
        }
        return star
      }

    return (
        <ScrollView style={styles.background}>
            <Image style={styles.img} source={require('../img/nereyeGidilir/bilim.jpg')}/>
            <View style={styles.info}>
                <Text style={styles.title}>Bilim Merkezi</Text>
                <View style={styles.div}>
                    <View style = {styles.star}>
                        {createStar()}
                        <Text> 4.3</Text>
                    </View>
                    <Text style={{paddingLeft:10}}>- Müze</Text>
                </View>
                <Text>Konya Büyükşehir Belediyesi’nin TÜBİTAK desteğiyle yapımını sürdürdüğü Türkiye’nin ilk Bilim Merkezi.1.7.Konya Bilim Merkezi: Konya Büyükşehir Belediyesi’nin TÜBİTAK desteğiyle yapımını sürdürdüğü Türkiye’nin ilk Bilim Merkezi.</Text>
          </View>
          <Text style={[styles.commentTitle, {paddingTop:20}]}>Adres:</Text>
          <Text style={{paddingHorizontal:10}}>Büyükkayacık, Ankara Cd. No:292, 42250 Büyükkayacık Osb/Selçuklu/Konya</Text>
          <View style={styles.commetArea}>
            <Text style={styles.commentTitle}>Seyehat Edenlerin Yorumları</Text>
            <Comment/>
            <Comment/>
          </View>
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