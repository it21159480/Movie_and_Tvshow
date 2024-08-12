import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from './screens/Movies';
import TVshows from './screens/TVshows';
import FeatherIcon from 'react-native-vector-icons/Feather';


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
                    headerShown:false,
                    tabBarLabelStyle: {
                        fontSize: 16,  // Set the font size for the tab labels here
                        marginBottom: 6, 
                        fontWeight:'bold' // Adjust the bottom margin to position the label correctly
                      },
                    tabBarStyle: {
                        height: 70,
                        
                        // This would incorrectly place the tab bar at the top
                    }
                }}
            >
                <BottomTab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                       
                        tabBarIcon: () => (
                            <FeatherIcon name='film' color={'#980808'} size={35} />
                        ),
                        tabBarLabel: 'Movies'  
                        
                    }}
                />
                <BottomTab.Screen
                    name="TVshows"
                    component={TVshows}
                    options={{
                        tabBarIcon: () => (
                            <FeatherIcon name="tv" color={'black'} size={35} />
                        ),
                        tabBarLabel: 'TVshows'  
                    }}
                    
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}


export default AppNavigator;
