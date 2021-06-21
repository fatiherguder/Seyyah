import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native';
import KonaklamaCard from '../components/konaklamaCard'
import Navbar from '../components/navbar'
import firestore from "@react-native-firebase/firestore";

const Konaklama = ({navigation}) => {

    const [data, setData] = useState([]);



    useEffect(() => {
        var tempData = [];
        const api = firestore()
          .collection("konya")
          .doc("konaklama")
          .collection("0")
          .onSnapshot((snapshot) => {
            snapshot.docs.map(doc => tempData.push(doc.data()))
            setData(tempData);
          });
      }, [])



      return (
        <View>
          <Navbar title={"Konaklama"} />
          {data != null ? (
            <ScrollView>
              {data.map(item =>  <KonaklamaCard
            img={require('../img/otel/grand.jpg')}
            title={item.title}
            price={item.fiyat}
            location={item.uzaklık}
            star={5}
            puan={item.puan}
            category={item.category}
            page={"konaklama"}
            navigation={navigation}/>)}
            </ScrollView>
          ) : null}
        </View>
      );
}


export default Konaklama;