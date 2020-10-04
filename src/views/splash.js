import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import {splashS} from './style';
import Resim from '../components/Resim';
import phoneH from '../helpers/phoneH';
import splashC from '../controllers/splashC';
import LogIn from './logIn';

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
                    splashS.C,
                    durum === 3 && splashS.C1,
                    (durum === 1 || durum === 2) && phoneH.klavye.durum && { justifyContent: 'flex-end' }
                ]}
            >
                <TouchableOpacity>
                    <Resim
                        source={require('../../assets/sub_logo.png')}
                        height={phoneH.W(logoH)}
                    />
                </TouchableOpacity>

                {(durum === 1 || durum === 2) && <LogIn />}
            </View>
        );
    }
}

export default observer(Splash);