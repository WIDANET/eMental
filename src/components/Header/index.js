import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';  // Importando o LinearGradient

import {useNavigation} from '@react-navigation/native';

function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={36} color="#696969" />
            </TouchableOpacity>
            
            {/* Adicionando a imagem no meio */}
            <Image 
                source={require('../../assets/logo.jpeg')} // Substitua pela URL ou pelo caminho da sua imagem
                style={styles.image}
            />
            
            <TouchableOpacity style={styles.button}>
                <Feather name="message-circle" size={36} color="#696969" />
            </TouchableOpacity>

            {/* Degradê na parte inferior */}
            <LinearGradient
                colors={['transparent', '#FFFFFF']}  // Degradê que vai de transparente para branco
                style={styles.gradient}  // Estilo para o degradê
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: "#F7CAC9",  // Cor de fundo da barra
        flexDirection: 'row',  // Organiza os itens na horizontal
        justifyContent: 'space-between',  // Espaça os itens com espaço entre
        alignItems: 'center',  // Alinha os itens verticalmente no centro
        paddingHorizontal: 10,  // Espaçamento interno nas laterais
        position: 'relative',  // Necessário para o posicionamento do degradê
    },
    image: {
        width: 100,  // Tamanho da imagem (ajuste conforme necessário)
        height: 100,  // Tamanho da imagem
        resizeMode: 'contain',  // Ajusta a imagem sem distorção
    },
    gradient: {
        position: 'absolute',  // Posiciona o degradê no fundo
        bottom: 0,  // Alinha o degradê na parte inferior
        left: 0,
        right: 0,
        height: 60,  // Altura do degradê
    },
    button: {
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
    },
});
