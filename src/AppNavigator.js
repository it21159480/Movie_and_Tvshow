import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from './screens/Movies';
import TVshows from './screens/TVshows';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();

// function Welcome() {
//     console.log('Welcome screen loaded');
//     return (
//         <Tab.Navigator
//             initialRouteName='Movies'
//             screenOptions={{
//                 tabBarActiveTintColor: 'tomato',
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarStyle: { 
//                     position: 'absolute',  // Incorrect positioning styles could affect the placement
//                     top: 0                 // This would incorrectly place the tab bar at the top
//                   }
//             }}
//         >
//             <Tab.Screen
//                 name="Movies"
//                 component={Movies}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="movie" color={color} size={size} />
//                     ),
//                 }}
//             />
//             <Tab.Screen
//                 name="TVshows"
//                 component={TVshows}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="television" color={color} size={size} />
//                     ),
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }


function AppNavigator() {

    const BottomTab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>   */}
            <BottomTab.Navigator
                
            >
                <BottomTab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="movie" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="TVshows"
                    component={TVshows}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="television" color={color} size={size} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}


export default AppNavigator;
