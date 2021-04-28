import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components
import BottomTab from '../components/BottomTab';

const Tab = createBottomTabNavigator();

// Screens
import Home from '../screens/Home';
import Repos from '../screens/Repos';
import Followers from '../screens/Followers';
import Following from '../screens/Following';

const AppRoutes: React.FC = () => {

    return (
        <NavigationContainer>
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
                    component={Followers}
                />
                <Tab.Screen
                    options={{ tabBarLabel: () => null }}
                    name="Following"
                    component={Following}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default AppRoutes;
