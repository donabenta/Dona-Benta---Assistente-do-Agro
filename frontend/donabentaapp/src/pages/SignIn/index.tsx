import React from "react";
import{View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import usuarioRequests from "../../Requests/usuario.requests";

export default function SiginIn(){
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>

            <View>
            <animatable.Image
                 animation=""
                   source={require('../../Imagens/Logo.png')}
                   style={{width:350, height:300}}
                    resizeMode='center'
                    
                
                />
            </View>
            <animatable.View animation="fadeInLeft" delay={500} style={styles.containerheader}>
                <Text style={styles.message}>Bem Vindo (a)</Text>
            </animatable.View>

            <animatable.View animation="fadeInUp" style={styles.containerform}>
                <Text style={styles.title}>Email </Text>
                <TextInput
                placeholder="Digite seu email..."
                style={styles.input}
                />
                <Text style={styles.title}>Senha </Text>
                <TextInput
                placeholder="Sua senha..."
                style={styles.input}
                />
                 <TouchableOpacity style={styles.buttonEsqueceu}>
                    <Text style={styles.esqueceuText}>Esqueceu a senha?</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Voice')}
                >
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}
                onPress={() => navigation.navigate('Cadastro')}
                > 
                    <Text style={styles.registertext}>Não Possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>


            </animatable.View>
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:"#90ee90",

    },
    containerheader:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerform:{
    backgroundColor:"#fff",
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart:'5%',
    paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,

    },
    input:{
        borderLeftWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },
    buttonEsqueceu:{
        paddingVertical: 8,
        marginTop: 14,


    },
    esqueceuText:{
    color:'#00bfff',
    },

    button:{
        backgroundColor:"#90ee90",
        width: '100%',
        borderRadius: 7,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent:'center',
        alignItems:'center',

    },
    buttonText:{
        color:"#fff",
        fontSize: 18,
        fontWeight:'bold',

    },
    buttonRegister:{
        marginTop: 10,
        alignSelf:'center',

    },
    registertext:{
        marginTop: 5,
        color:'#00bfff',

    }
    
})