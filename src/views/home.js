import { observer } from 'mobx-react';
import React from 'react';
import { View } from 'react-native';
import homeC from '../controllers/homeC';
import { homePageS } from './style';
import splashC from '../controllers/splashC';
import Splash from './splash';
import TopArea from './topArea';
import Companies from './company';

class home extends React.Component {

    componentDidMount = homeC.cDMount; //app starting 
    componentDidUpdate = homeC.cDUpdate;// Updating app 
    componentWillUnmount = homeC.cDWUnmount; // app close

    render() {
        const durum = splashC.durum;
        return (
            <View style={[homePageS.C, durum && homePageS.C2]}>

                {
                    durum === 3 &&
                    <>
                        <TopArea />

                        <Companies />
                    </>
                }


                <Splash />
            </View>
        );
    }

}

export default observer(home);

/*
<View style={!sa && homePageS.logoC}>
    <Resim
        source={require('../../assets/sub_logo.png')}
        height={phoneH.W(sa ? 60 : 20)}
    />
</View>

*/