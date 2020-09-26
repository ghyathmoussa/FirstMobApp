import React from 'react';
import { Text, View } from 'react-native';
import Resim from '../components/Resim'
import phoneH from '../helps/phoneH';
class home extends React.Component {

    render() {
        return (

            <View>
                <Resim
                 source={require('../../assets/sub_logo.png')}
                 height={phoneH.W(60)}
                 />
            </View>

        );
    }

}

export default home;