import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../../pages/Welcome'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import TabRoutes from '../tab';


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Home"
                component={TabRoutes}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )

}