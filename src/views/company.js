import { observer } from 'mobx-react';
import React from 'react';
import { Text,View,ScrollView,SafeAreaView,TouchableOpacity,Image } from 'react-native';
import { homePageS } from './style';
import { View as ViewA} from 'react-native-animatable';
import temaH from '../helpers/temaH';
import phoneH from '../helpers/phoneH';
import Ikon from '../components/Ikon';

 
class Companies extends React.Component{

    companies() {
        return (

            <SafeAreaView style={homePageS.safArea}>
                <ScrollView>
                    <ViewA style={homePageS.companiesC} animation={'zoomIn'}>
                        {this.company()}
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
                    <TouchableOpacity>
                        <Text style={homePageS.companyTxt}>lorNisi incididunt in occaecat officia</Text>
                    </TouchableOpacity>
                    <Text style={homePageS.companyTxt}>Discreption</Text>
                    <View style={homePageS.notBtnC}>
                        <View style={homePageS.icon}>
                            <Ikon
                                is={'Ionicons'}
                                i={'location-outline'}
                                c={temaH.renkler.r1}
                                s={24}
                                golgeyok
                            />
                            <Text style={homePageS.txtBtn}>Istanbul</Text>
                        </View>
                        <View style={homePageS.icon}>
                            <Ikon
                                is={'FontAwesome'}
                                i={'newspaper-o'}
                                c={temaH.renkler.r1}
                                s={24}
                                golgeyok
                            />
                            <Text style={homePageS.txtBtn}>News</Text>
                        </View>
                        <View style={homePageS.icon}>
                            <Ikon
                                is={'SimpleLineIcons'}
                                i={'like'}
                                c={temaH.renkler.r1}
                                s={24}
                                golgeyok
                            />
                            <Text style={homePageS.txtBtn}>25</Text>
                        </View>
                        <View style={homePageS.icon}>
                            <Ikon
                                is={'SimpleLineIcons'}
                                i={'dislike'}
                                c={temaH.renkler.r1}
                                s={24}
                                golgeyok
                            />
                            <Text style={homePageS.txtBtn}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render(){
        return(
            <>
                {this.companies()}
            </>
        );
    }
}

export default observer(Companies);