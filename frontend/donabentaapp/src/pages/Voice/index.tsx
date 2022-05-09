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

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



let listening = false;


export default function Voice(){
    const { transcript } = useSpeechRecognition()
    const { resetTranscript } = useSpeechRecognition()

    return(
        <View style={styles.container}>
           

            <animatable.View animation="fadeInDown" delay={500} style={styles.containerHeader}>
               
                <Text style={styles.message}>
                    Olá, eu sou a Dona Benta
                </Text> 
                
                

            </animatable.View>
             
            <animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>
                <Text style={styles.title}>Em que posso te ajudar?</Text>
                <View>
                <button style={{backgroundColor: '#98fb98', border: 0}} onClick = {() => {
                    if (listening === false) {
                        listening = true;
                        SpeechRecognition.startListening();

                    }
                    else {
                        listening = false;
                        console.log(transcript); // Uso do transcript: Requisição para API
                        resetTranscript();
                        SpeechRecognition.stopListening();
                    }

                }}>
                    <animatable.Image
                    animation="flipInY" delay={30}
                    source={require('../../Imagens/Logo1.png')}
                    style={{width: 300, height:200, marginTop: '10%', marginLeft: "-12px"}}
                        resizeMode='center'
                        
                    />
                </button>
                
            </View>
                
            </animatable.View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
    },

    containerHeader:{
        marginTop: '50%',
        marginBottom: '8%',
        paddingStart: '5%',
        backgroundColor: '#000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },

    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: '-10%',
        marginBottom: '50%'
    },

    containerForm:{
        marginTop: '-20%',
        paddingStart: '10%',
        paddingEnd: '10%',

        backgroundColor: '#98fb98',
        flex: 2,
    },

    title:{
        fontSize: 20,
        marginTop: 70,
        paddingLeft: 30
    },

    buttonBack:{
        position: 'absolute',
        fontSize: 15,
        width: 100,
        height: 600,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        right: 200,
        bottom: 30,
        color: '#ffff'
    }

});
