import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import home from './home';
import temaH from '../helpers/temaH';
import homeC from '../controllers/homeC';
import phoneH from '../helpers/phoneH';
import LogIn from './logIn';
import Footer from '../components/footer';
import splashC from '../controllers/splashC';

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
                <StatusBar
                    backgroundColor={homeC.splashActive ? 'transparent' : temaH.renkler.r2}
                    barStyle={'dark-content'} />

                <View
                    style={
                        {
                            backgroundColor: temaH.renkler.r2,
                            height: homeC.splashActive && phoneH.ios ? 0 : phoneH.sbhi
                        }
                    } />

                {this.navigasyon()}
   

                {(splashC.durum !== 0 && splashC.durum !== 1 && splashC.durum !== 2) && <Footer />}
            </>
        );
    }
}

export default observer(App);
