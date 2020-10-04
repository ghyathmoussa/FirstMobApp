import { StyleSheet } from 'react-native';
import phoneH from '../helpers/phoneH';
import temaH from '../helpers/temaH';

// C : Container
//SC : SubContainer
//B : Button
//BT : Button Text

export const homePageS = StyleSheet.create({
    C: {
        flex: 1,
        borderColor: 'red',
    },
    C2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoC: {
        position: 'absolute',
        left: phoneH.W(2),
        top: phoneH.H(2),

    },
    topArea: {
        minHeight: phoneH.H(20),
        width: phoneH.w,
        backgroundColor: temaH.renkler.r1,
    },
    topTxt: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'right',
        marginTop: phoneH.W(2)
    },
    safArea: {
        marginTop: phoneH.H(2),
    },
    companiesC: {
        width: phoneH.w,
    },
    company: {
        padding: phoneH.W(4),
        backgroundColor: temaH.renkler.r2,
        marginBottom: phoneH.W(2),
        flexDirection: 'row'
    },
    image: {
        width: phoneH.W(20),
        height: phoneH.H(10),
        flexDirection: 'row'
    },
    companyTxt: {
        marginLeft: phoneH.W(3),
        color: '#fff'
    },
    notBtnC: {
        flexDirection: 'row',
        marginLeft: phoneH.W(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: phoneH.W(2)
    },
    icon: {
        paddingRight: phoneH.W(6),
        marginRight: phoneH.W(3),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    txtBtn: {
        color: temaH.renkler.r1
    },

});

export const splashS = StyleSheet.create({
    C:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        flex:1
    },
    C1:{
        width:null,
        position:'absolute',
        left:phoneH.W(2),
        top:phoneH.H(2),
    },
});

export const loginS = StyleSheet.create({
    C:{
        width:phoneH.w,
        marginTop:phoneH.W(1)
    },
    signInBtn:{
        width:phoneH.W(90),
        borderRadius:60,
        marginLeft:phoneH.W(5),
        backgroundColor:temaH.renkler.r2
    },
    signInBtn_1:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:temaH.renkler.r2
    }
});

export const footerS = StyleSheet.create({
    C: {
        flex: 1,
        width: phoneH.w,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: temaH.renkler.r1,
        height: 48,
        left: 0,
        right: 0,
        bottom: 0

    },
    footerBtn: {
        height: 48,
        paddingRight: phoneH.W(8),
        backgroundColor: temaH.renkler.r1,
        color: temaH.renkler.r1,
        marginLeft:phoneH.W(8)
    },
    btnF:{
        justifyContent: 'center',
        alignItems: 'center',
    },
});