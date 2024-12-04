import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../pages/Home'
import Consultas from '../../pages/Consultas'
import Perfil from '../../pages/Perfil'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator initialRouteName="home">
            <Tab.Screen 
                name = "Consultas"
                component={Consultas}
            />
            <Tab.Screen 
                name = "home"
                component={Home}
            />
            <Tab.Screen 
                name = "Perfil"
                component={Perfil}
            />
        </Tab.Navigator>
    )
}