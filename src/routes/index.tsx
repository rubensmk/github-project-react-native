import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTab from '../components/BottomTab';

import Home from '../screens/Home';
import Repos from '../screens/Repos';
import Followers from '../screens/Followers';
import Following from '../screens/Following';
import SignIn from '../screens/SignIn';
import User from '../screens/User';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function InitialStackScreen() {
    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}

function FollowersStackScreen() {
    return (
        <Stack.Navigator
            initialRouteName="Followers"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Followers" component={Followers} />
            <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
    )
}

function HomeTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: '#A5A5A5',
            }}
            tabBar={props => <BottomTab {...props} />}
        >
            <Tab.Screen
                options={{ tabBarLabel: () => null }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                options={{ tabBarLabel: () => null }}
                name="Repos"
                component={Repos}
            />
            <Tab.Screen
                options={{ tabBarLabel: () => null }}
                name="Followers"
                component={FollowersStackScreen}
            />
            <Tab.Screen
                options={{ tabBarLabel: () => null }}
                name="Following"
                component={Following}
            />
        </Tab.Navigator>
    )
};

const Routes: React.FC = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Auth" component={InitialStackScreen} />
                <Stack.Screen name="Home" component={HomeTabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;