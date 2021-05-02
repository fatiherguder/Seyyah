import React from 'react'
import { Text, View } from 'react-native';
import Card from '../components/card'
import Navbar from '../components/navbar'

const NeYenir = (navigation) => {
    return (
        <View>
            <Navbar title={'Ne Yenir?'}/>
            <Card img={require('../img/yemek/kandil.jpg')} title={'Kandil Etliekmek Evi'} puan={'4.3'} category={'Etliekmek'} {...navigation}/>
            <Card img={require('../img/yemek/medrese.jpg')} title={'Tarihi Medrese Kahvehanesi'} puan={'3.5'} category={'Kafe'}  {...navigation}/>
        </View>
    )
}


export default NeYenir;