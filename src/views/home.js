import { observer } from 'mobx-react';
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Resim from '../components/Resim'
import homeC from '../controls/homeC';
import phoneH from '../helps/phoneH';
import { homePageS } from './style';
import {View as ViewA,TouchableOpacity as TouchableOpacityA } from 'react-native-animatable';

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

    companies() {
        return (

            <SafeAreaView style={homePageS.safArea}>
                <ScrollView>
                    <ViewA style={homePageS.companiesC} animation={'zoomIn'}>
                        {this.company()}
                        {this.company()}
                        {this.company()}
                        {this.company()}

                    </ViewA>
                </ScrollView>
            </SafeAreaView>
        );
    }

    company() {
        return (
            <View style={homePageS.company}>
                <TouchableOpacity>
                    <Image
                        style={homePageS.image}
                        source={require('../../assets/20200111_174739.jpg')}
                        width={phoneH.W(20)}
                        height={phoneH.H(20)}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={homePageS.companyTxt}>lorNisi incididunt in occaecat officia esse labore ullamco sint dolore.</Text>
                    <Text style={homePageS.companyTxt}>Discreption</Text>
                    <View>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const sa = homeC.splashActive;
        return (
            <View style={[homePageS.C, sa && homePageS.C2]}>

                {!sa && this.topArea()}

                {!sa && this.companies()}
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