import React, { useEffect, useState } from 'react'
import { View,ScrollView } from 'react-native';
import Card from '../components/card'
import Navbar from '../components/navbar'
import firestore from "@react-native-firebase/firestore";

const NereyeGidilir = (navigation) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        var tempData = [];
        const api = firestore()
          .collection("konya")
          .doc("nereyeGidilir")
          .collection("0")
          .onSnapshot((snapshot) => {
            snapshot.docs.map(doc => tempData.push(doc.data()))
            setData(tempData);
          });
      }, [])

    
return (
    <View>
      <Navbar title={"Nereye Gidilir ?"} />
      {data != null ? (
        <ScrollView>
          {data.map(item =>  <Card
        img={require('../img/nereyeGidilir/bilim.jpg')}
        title={item.title}
        puan={item.puan}
        category={item.category}
        page={"nereyeGidilir"}
        {...navigation}/>)}
        </ScrollView>
      ) : null}
    </View>
  );
}


export default NereyeGidilir;