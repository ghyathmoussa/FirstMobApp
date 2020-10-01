import { observer } from 'mobx-react';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import logInC from '../controls/logInC';
import Resim from '../components/Resim';
import { loginS } from './style';
import phoneH from '../helps/phoneH';
import { Input, Button, SocialIcon, Icon } from 'react-native-elements';
import Ikon from '../components/Ikon';
import temaH from '../helps/temaH';

class LogIn extends React.Component {
    componentDidMount = logInC.cDMount;
    componentDidUpdate = logInC.cDUpdate;
    componentWillUnmount = logInC.cWUnmount;

    render() {
        sa = logInC.splashActive;
        register = logInC.registerBtn;
        durum = logInC.durum;
        return (
            <>
                <View style={!sa && loginS.logInSplash}>
                    <Resim
                        source={require('../../assets/sub_logo.png')}
                        height={phoneH.W(sa ? 60 : 30)}
                    />
                </View>
                <View style={loginS.formC}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={loginS.input}>

                            <Input
                                keyboardType={'email-address'}
                                placeholder={'Email'}
                                leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'email-open'} c={'black'} />}

                            />
                            {logInC.durum == 2 && <Input

                                keyboardType={'email-address'}
                                placeholder={'Username'}
                                leftIcon={<Ikon is={'FontAwesome5'} i={'user-alt'} c={'black'} />}


                            />}
                            <Input
                                autoCompleteType={'password'}
                                placeholder={'Password'}
                                keyboardType={'number-pad'}
                                leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />}
                            />
                            {logInC.durum == 2 && <Input
                                autoCompleteType={'password'}
                                placeholder={'RePassword'}
                                keyboardType={'number-pad'}
                                leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />}
                            />}
                        </View>
                    </ScrollView>
                    <View style={loginS.inputB}>
                        <Button
                            title={durum === 1 ? 'Sign In' : 'Register'}
                            type='solid'
                            buttonStyle={{ borderRadius: 60, backgroundColor: temaH.renkler.r2 }}
                            raised
                        />
                        <Button
                            title={logInC.durum === 1 ? 'If you do not have an acoount Register now' : 'If have an acoount Login now'}
                            type='clear'
                            onPress={logInC.register}
                        />
                    </View>


                    {logInC.durum === 1 && <View style={loginS.inputSocialC}>
                        <SocialIcon
                            title='Sign In With Twitter'
                            button
                            type='twitter'
                            style={loginS.inputSocial}
                        />
                        <SocialIcon
                            title='Sign In With Facebook'
                            button
                            type='facebook'
                            style={loginS.inputSocial}
                        />
                    </View>}
                </View>
            </>
        );
    }

}

export default observer(LogIn);