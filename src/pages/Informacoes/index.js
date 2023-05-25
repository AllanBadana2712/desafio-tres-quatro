import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Informacoes() {
    return (
        <View style={style.container}>
            <Text style={style.H1}>Informações</Text>
            <Text style={{ margin: 20 }}>Desafio 03 de Allan e Ana Carolina do 3º NT  </Text>
        </View>
    )
}

const style = StyleSheet.create({
    H1: {
        fontSize: 23,
        fontWeight: '900',
        color: 'purple'
        
    },

    container: {
        height: '100vh',
        margin: 130
    }
}) 