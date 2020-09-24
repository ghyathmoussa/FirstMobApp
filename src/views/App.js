import React from 'react';
import {View,Text, ScrollView,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {observer} from 'mobx-react';

class App extends React.Component{
  navigasyon() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'home'} component={Anasayfa} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
}

export default observer(App);
