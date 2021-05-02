import React from 'react'
import { Text, View } from 'react-native';
import Card from '../components/card'
import Navbar from '../components/navbar'

const NereyeGidilir = (navigation) => {
    return (
        <View>
            <Navbar title={'Nereye Gidilir?'}/>
            <Card img={require('../img/nereyeGidilir/bilim.jpg')} title={'Bilim Merkezi'} puan={'3.9'} category={'Müzeler'} {...navigation}/>
            <Card img={require('../img/nereyeGidilir/kelebek.jpg')} title={'Kelebekler Bahçesi'} puan={'4.6'} category={'Parklar'}  {...navigation}/>
        </View>
    )
}


export default NereyeGidilir;