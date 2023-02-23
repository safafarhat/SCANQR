import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// components
import ScanPage from './comp/ScanPage';
//import FormModal from './comp/FormModal';
import SettingsScreen from './comp/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Scan') {
              iconName = focused ? 'ios-barcode' : 'ios-barcode-outline';
            } else if (route.name === 'Paramètres') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#dc3545',
          tabBarInactiveTintColor: '#6c757d',
        })}
      >
        <Tab.Screen name="Scan" component={ScanPage} />
      
        <Tab.Screen name="Paramètres" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}