import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../../pages/Home';
import Consultas from '../../pages/Consultas';
import Perfil from '../../pages/Perfil';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF', // Cor do ícone quando selecionado
        tabBarInactiveTintColor: '#696969', // Cor do ícone quando não selecionado
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F7CAC9',  // Cor de fundo da barra de navegação
        },
        tabBarLabelStyle: {
          fontSize: 10,  // Tamanho da fonte das labels (caso queira)
        },
      }}
    >
      <Tab.Screen 
        name="Consultas"
        component={Consultas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather 
              name="calendar" 
              size={size} // Aumenta o tamanho do ícone
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather 
              name="home" 
              size={size} // Aumenta o tamanho do ícone
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather 
              name="user" 
              size={size} // Aumenta o tamanho do ícone
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
