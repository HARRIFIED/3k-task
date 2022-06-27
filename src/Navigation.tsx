import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import OnBoarding from './screens/onBoarding';
import Portfolio from './screens/Potfolio'


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'fade_from_bottom',
                }}
            >
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Portfolio" component={Portfolio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}