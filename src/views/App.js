import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import home from './home';
import temaH from '../helps/temaH';
import homeC from '../controls/homeC';
import phoneH from '../helps/phoneH';
import LogIn from './logIn';

const Stack = createStackNavigator();

class App extends React.Component {

    navigasyon() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'Log In'} component={LogIn} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={homeC.splashActive ? 'transparent' : temaH.renkler.r2}
                    barStyle={'dark-content'} />
                
                <View 
                style={
                    {backgroundColor:temaH.renkler.r2,
                    height:homeC.splashActive && phoneH.ios ? 0 : phoneH.sbhi
                    }
                    } />

                {this.navigasyon()}
            </>
        );
    }
}

export default observer(App);
