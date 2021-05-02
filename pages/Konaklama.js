import React from 'react'
import { Text, View } from 'react-native';
import KonaklamaCard from '../components/konaklamaCard'
import Navbar from '../components/navbar'

const Konaklama = ({navigation}) => {
    return (
        <View>
            <Navbar title={'Konaklama'}/>
            <KonaklamaCard img={require('../img/otel/grand.jpg')} title={'Grand Otel'} price={300} location={14.2} star={5} puan={'8.0'} navigation={navigation}/>
            <KonaklamaCard img={require('../img/otel/anemon.jpg')} title={'Anemon Otel'} price={250} location={2.5} star={5} puan={'7.5'} navigation={navigation}/>
        </View>
    )
}


export default Konaklama;