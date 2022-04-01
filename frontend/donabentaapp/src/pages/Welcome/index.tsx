import React from "react";
import{
View,
Text,
StyleSheet,
Image,
TouchableOpacity
} from 'react-native';
import * as animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
          
            <View>
                <animatable.Image
                 animation="flipInY" delay={30}
                   source={require('../../Imagens/Logo.png')}
                   style={{width: 350, height:300}}
                    resizeMode='center'
                    
                
                />
            </View>

            <animatable.View animation="fadeInUp" delay={20} style={styles.containerForm}>
                <Text style={styles.title}>Sua </Text>

                <Text style={styles.title2}>Assistente Virtual</Text>
                <Text style={styles.title3}>do agro</Text>
                

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>


            </animatable.View>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#98fb98"

    },
    containerLogo: {
        flex:2,
        backgroundColor:"#0000",
        justifyContent: 'center',
        alignItems: 'center',


    },
    containerForm:{
        flex:2,
        backgroundColor:"#f8f8ff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'10%',
        paddingEnd: '10%'

    },
    title: {
        fontSize:24,
        fontWeight:'bold',
        marginTop:100,
        marginBottom: 12,
        alignSelf: 'center',
        

    },
    title2: {
        fontSize:24,
        fontWeight:'bold',
        marginTop:2,
        marginBottom: 5,
        alignSelf: 'center',
        marginVertical:2,

    },
    title3: {
        fontSize:24,
        fontWeight:'bold',
        marginTop:2,
        marginBottom: 5,
        alignSelf: 'center',
        marginVertical:2,

    },
    

 

    text :{
        color: '#ffff'

    },
    button: {
        position: 'absolute',
        backgroundColor:'#000000',
        borderRadius: 60,
        paddingVertical: 20,
        width: '70%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText:{
        color:"#ffff",
        fontSize:18,
        fontWeight: 'bold',
    }
})