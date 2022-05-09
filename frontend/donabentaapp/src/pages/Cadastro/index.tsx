import React from "react";
import{
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
TextInput
} from 'react-native';
import * as animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Cadastro(){
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>

        <View>
        <animatable.Image
             animation="zoomInUp"
               source={require('../../Imagens/Logo.png')}
               style={{width:350, height:300}}
                resizeMode='center'
                
            
            />
        </View>

        <animatable.View animation="fadeInLeft" delay={500} style={styles.containerheader}>
            <Text style={styles.message}>Cadastre-se</Text>
        </animatable.View>
        <animatable.View animation="fadeInUp" style={styles.containerform}>
               <TextInput
                placeholder="Nome Completo"
                style={styles.input}
                />
                
                <TextInput
                placeholder="Digite seu email"
                style={styles.input}
                />

                <TextInput
                placeholder="Digite sua senha"
                style={styles.input}
                />
                <TextInput
                placeholder="Cofirme sua senha"
                style={styles.input}
                />
                 

                
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("SignIn")}
                >
        
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

               <TouchableOpacity >
                    <Text style={styles.buttonBack}onPress={() => navigation.navigate('Welcome')}
                    >Voltar</Text>
                </TouchableOpacity>
            </animatable.View>

            
            
           
        </View>
    )

}
const styles= StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#90ee90"
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
    backgroundColor:"#90ee90",
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart:'5%',
    paddingEnd: '5%',
    },
    input:{
        backgroundColor: "#fff",
        borderLeftWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 60,

    },

    button:{
        bposition: 'center',
        backgroundColor:'#000000',
        borderRadius: 60,
        paddingVertical: 20,
        marginTop: 14,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:"#ffff",
        fontSize:18,
        fontWeight: 'bold',
    },

    buttonBack:{
        position: 'absolute',
        fontSize: 15,
        width: 100,
        height: 650,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        right: 230,
        bottom: 30,
        color: '#ffff'
    }
})