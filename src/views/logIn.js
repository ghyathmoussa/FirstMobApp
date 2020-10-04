import { observer } from 'mobx-react';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import logInC from '../controllers/logInC';
import Resim from '../components/Resim';
import { loginS } from './style';
import phoneH from '../helpers/phoneH';
import { Input, Button, SocialIcon, Icon } from 'react-native-elements';
import Ikon from '../components/Ikon';
import temaH from '../helpers/temaH';
import splashC from '../controllers/splashC';

class LogIn extends React.Component {
    componentDidMount = logInC.cDMount;
    componentDidUpdate = logInC.cDUpdate;
    componentWillUnmount = logInC.cWUnmount;

    render() {
        const durum = splashC.durum;
        return (
            <View style={[loginS.C, durum === 2 && phoneH.klavye.durum && { flex: 1 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        placeholder={'E-mail'}
                        leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'email-open'} c={'black'} />}
                        secureTextEntry={true}
                        keyboardType={'email-address'}
                        maxLength={60}
                    />
                    {
                        durum === 2 &&
                        <Input
                            placeholder={'Full Name'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                            secureTextEntry={true}
                            maxLength={50}
                        />
                    }
                    {
                        durum === 2 &&
                        <Input
                            placeholder={'Username'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                            secureTextEntry={true}
                            maxLength={50}
                        />
                    }
                    <Input
                        placeholder={'Password'}
                        leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />}
                        secureTextEntry={true}
                        keyboardType={'email-address'}
                        maxLength={60}
                    />
                    {
                        durum === 2 &&
                        <Input
                            placeholder={'RePassword'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />}
                            secureTextEntry={true}
                            keyboardType={'email-address'}
                            maxLength={60}
                        />
                    }

                </ScrollView>

                <Button
                    type={'solid'}
                    title={durum === 1 ? 'Sign In' : 'Register'}
                    containerStyle={loginS.signInBtn}
                    buttonStyle={loginS.signInBtn_1}
                />
                <Button
                    type={'clear'}
                    title={durum === 1 ? 'If you do not have an account Register now' : 'If you have an account Login now'}
                    onPress={() => logInC.register()}
                />
                {
                    durum != 2 &&
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                }
                {
                    durum != 2 &&
                    <SocialIcon
                        title='Sign In With Twitter'
                        button
                        type='twitter'
                    />
                }
            </View>
        );
    }

}

export default observer(LogIn);