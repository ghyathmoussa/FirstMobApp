import { observer } from 'mobx-react';
import React from 'react';
import { Text, View } from 'react-native';
import logInC from '../controls/logInC';
import Resim from '../components/Resim';
import { loginS } from './style';
import phoneH from '../helps/phoneH';
import { Input, Button, SocialIcon, Icon } from 'react-native-elements';
import Ikon from '../components/Ikon';


class LogIn extends React.Component {
    componentDidMount = logInC.cDMount;
    componentDidUpdate = logInC.cDUpdate;
    componentWillUnmount = logInC.cWUnmount;

    render() {
        sa = logInC.splashActive;
        return (
            <>
                <View style={!sa && loginS.logInSplash}>
                    <Resim
                        source={require('../../assets/sub_logo.png')}
                        height={phoneH.W(sa ? 60 : 40)}
                    />
                </View>
                <View style={loginS.formC}>
                    <View style={loginS.input}>
                        <Input
                            keyboardType={'email-address'}
                            placeholder={'Email'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'email-open'} c={'black'} />}

                        />
                        <Input
                            keyboardType={'email-address'}
                            placeholder={'Email'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'email-open'} c={'black'} />}

                        />
                        <Input
                            autoCompleteType={'password'}
                            placeholder={'Password'}
                            keyboardType={'number-pad'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />}

                        />
                    </View>
                    <View style={loginS.inputB}>
                        <Button
                            title='Sign In'
                            type='solid'
                        />
                        <Button
                            title='If you do not have an acoount Register now'
                            type='clear'
                        />
                    </View>


                    <View style={loginS.inputSocialC}>
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
                    </View>
                </View>
            </>
        );
    }

}

export default observer(LogIn);