import { observer } from 'mobx-react';
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

    topArea() {
        const sa = homeC.splashActive;
        return (
            <View style={[homePageS.topArea, { display: sa ? 'none' : 'flex' }]}>
                <Text style={homePageS.topTxt}>LoremCillum pariatur laborum aliquip </Text>
                <Text style={homePageS.topTxt}>LoremCillum pariatur laborum aliquip </Text>
                <Text style={homePageS.topTxt}>LoremCillum pariatur laborum aliquip </Text>
            </View>
        );
    }

    render() {
        const sa = homeC.splashActive;
        return (
            <View style={[homePageS.C, sa && homePageS.C2]}>

                {this.topArea()}

                <View style={!sa && homePageS.logoC}>
                    <Resim
                        source={require('../../assets/sub_logo.png')}
                        height={phoneH.W(sa ? 60 : 20)}
                    />
                </View>

            </View>
        );
    }

}

export default observer(home);