import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import {splashS as S} from './style';
import Resim from '../components/Resim';
import phoneH from '../helps/phoneH';
import splashC from '../controls/splashC';

class Splash extends React.Component {
    componentDidMount = splashC.cDMount;
    componentDidUpdate = splashC.cDUpdate;
    componentWillUnmount = splashC.cWUnmount;

    // guncelle() {
    //     codePush.sync({ installMode: codePush.InstallMode.IMMEDIATE });
    // }

    render() {
        const durum = splashC.durum;

        let logoH;

        if (durum === 0) logoH = 60;
        else if (durum === 1) logoH = 35;
        else if (durum === 2) logoH = 35;
        else if (durum === 3) logoH = 20;


        return (
            <View
                style={[
                    S.K,
                    durum === 3 && S.K2,
                    (durum === 1 || durum === 2) && phoneH.klavye.durum && { justifyContent: 'flex-end' }
                ]}
            >
                <TouchableOpacity>
                    <Resim
                        source={require('../../assets/logo/logo.png')}
                        height={phoneH.W(logoH)}
                    />
                </TouchableOpacity>

                {(durum === 1 || durum === 2) && <LogIn />}
            </View>
        );
    }
}

export default observer(Splash);