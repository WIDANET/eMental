import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message} >Cadastre-se!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput 
                    placeholder="Digite seu nome..."
                    style = {styles.input}
                />
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite seu email..."
                    style = {styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder="Digite sua senha..."
                    style = {styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.registerText}>Já tenho uma conta!</Text>
                </TouchableOpacity>

            </Animatable.View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7CAC9',
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#696969'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#F7CAC9',
        width: '60%',
        borderRadius: 50,
        paddingVertical: 16,
        marginTop: 24,
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#696969',
        fontWeight: 'bold',
    },
    registerText: {
        marginTop: 14,
        alignSelf: 'center',
        fontSize: 15,
        color: '#696969',
        
    }
})