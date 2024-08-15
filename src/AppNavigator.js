import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from './screens/Movies';
import TVshows from './screens/TVshows';
import Icon from 'react-native-vector-icons/Feather';


const Stack = createNativeStackNavigator();




function AppNavigator() {

    const BottomTab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>   */}
            <BottomTab.Navigator
                initialRouteName='Movies'
                screenOptions={{
                    tabBarActiveTintColor: '#980808',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,

                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                }}
            >
                <BottomTab.Screen
                    name="Movies"
                    component={Movies}
                    options={{

                        tabBarLabel: 'Movies',
                        tabBarIcon: ({ focused }) => (
                            <Icon name="film" color={focused ? '#980808' : 'gray'} size={focused ? 25 : 18} />
                        ),
                        tabBarLabelStyle: {
                            fontSize: 16,
                            fontWeight: 'bold'
                        }

                    }}
                />
                <BottomTab.Screen
                    name="TVshows"
                    component={TVshows}
                    options={{
                        tabBarLabel: 'TV Shows',
                        tabBarIcon: ({ focused }) => (
                            <Icon name="tv" color={focused ? '#980808' : 'gray'} size={focused ? 25 : 20} />
                        ),
                    }}

                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}


export default AppNavigator;
