import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import Resim from '../components/Resim'
import homeC from '../controls/homeC';
import phoneH from '../helps/phoneH';
import { homePageS } from './style'
class home extends React.Component {

    componentDidMount = homeC.cDMount; //app starting 
    componentDidUpdate = homeC.cDUpdate;// Updating app 
    componentWillUnmount = homeC.cDWUnmount; // app close

    render() {
        return (
            <View style={homePageS.C}>
                <Resim
                    source={require('../../assets/sub_logo.png')}
                    height={phoneH.W(60)}
                />
            </View>
        );
    }

}

export default home;