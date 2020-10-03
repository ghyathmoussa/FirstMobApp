import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ikon from './Ikon';
import temaH from '../helps/temaH';
import { footerS } from '../views/style'

const Footer = () => {
    return (
        <View style={footerS.C}>
            <View style={footerS.footerBtn}>
                <TouchableOpacity style={footerS.btnF}>
                    <Ikon is={'AntDesign'} i={'home'} s={40} c={temaH.renkler.r3} />
                </TouchableOpacity>
            </View>
            <View style={footerS.footerBtn}>
                <TouchableOpacity style={footerS.btnF}>
                    <Ikon is={'AntDesign'} i={'home'} s={40} c={temaH.renkler.r3} />
                </TouchableOpacity>
            </View>
            <View style={footerS.footerBtn}>
                <TouchableOpacity style={footerS.btnF}>
                    <Ikon is={'AntDesign'} i={'home'} s={40} c={temaH.renkler.r3} />
                </TouchableOpacity>
            </View>
            <View style={footerS.footerBtn}>
                <TouchableOpacity style={footerS.btnF}>
                    <Ikon is={'AntDesign'} i={'home'} s={40} c={temaH.renkler.r3} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Footer;
