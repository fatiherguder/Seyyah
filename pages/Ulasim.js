/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UlasimCard from "../components/ulasimCard";
import Navbar from "../components/navbar";
import firestore from "@react-native-firebase/firestore";

const Ulasim = ({ navigation }) => {
  const [data, setData] = useState([]);
  const data1 = [];



  useEffect(() => {
    var tempData = [];
    const api = firestore()
      .collection("konya")
      .doc("ulasim")
      .collection("0")
      .onSnapshot((snapshot) => {
        snapshot.docs.map(doc => tempData.push(doc.data()))
        setData(tempData);
      });
  }, [])

  let thy = require("../img/thy.png");
  let pegasus = require("../img/pegasus.png");
  return (
    <View style={styles.background}>
      <Navbar title={"Ulaşım"} />
      {data != null ? (
        <ScrollView>
          {data.map(item =>  <UlasimCard
            logo={item.firma == 'thy' ? thy : pegasus}
            fiyat={item.fiyat}
            tarih={item.tarih}
            saat={item.saat}
            page={"ulasim"}
            firma={item.firma}
            navigation={navigation}
          />)}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f1f1f1",
  },
});

export default Ulasim;
