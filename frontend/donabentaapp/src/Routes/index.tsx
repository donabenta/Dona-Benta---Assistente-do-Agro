import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Cadastro from '../pages/Cadastro'
import Voice from '../pages/Voice'



const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator> 
            <Stack.Screen
            name= "Welcome"
            component={Welcome}
            options={{headerShown: false}}
           />
        
            <Stack.Screen
            name= "SignIn"
            component={SignIn}
            options={{headerShown: false}}
           />
            <Stack.Screen
            name= "Cadastro"
            component={Cadastro}
            options={{headerShown: false}}
           />
           <Stack.Screen
            name= "Voice"
            component={Voice}
            options={{headerShown: false}}
           />


           
        </Stack.Navigator>
    )  
 
}