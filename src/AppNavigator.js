import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './screens/Movies';
import TVshows from './screens/TVshows';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Movies'
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarPosition: 'bottom', // This is not a valid property for bottom tabs but checking analogous properties
                    tabBarStyle: { 
                        position: 'absolute',  // Incorrect positioning styles could affect the placement
                        top: 0                 // This would incorrectly place the tab bar at the top
                      }
                }}
            >
                <Tab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="movie" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="TVshows"
                    component={TVshows}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="television" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
