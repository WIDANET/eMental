import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from '../tab';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}> 
            <Drawer.Screen 
                name= "Inicio"
                component={TabRoutes}
                options={{
                    drawerIcon: () => <Feather name="home" />,
                    tabBarLabel: 'Inicio',
                }}
            />
        </Drawer.Navigator>
    )
}