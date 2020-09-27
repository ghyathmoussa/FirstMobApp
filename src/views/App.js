import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import home from './home';

const Stack = createStackNavigator();

class App extends React.Component {

    navigasyon() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'Home'} component={home} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    render() {
        return (
            <>
                {this.navigasyon()}
            </>
        );
    }
}

export default App;
