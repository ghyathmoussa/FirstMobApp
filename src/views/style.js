import {StyleSheet} from 'react-native';
import phoneH from '../helps/phoneH';
import temaH from '../helps/temaH';

// C : Container
//SC : SubContainer
//B : Button
//BT : Button Text

export const homePageS = StyleSheet.create({
    C:{
        flex:1,
        borderColor:'red',
    },
    C2:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoC:{
        position:'absolute',
        left:phoneH.W(2),
        top:phoneH.H(2),

    },
    topArea:{
        minHeight:phoneH.H(20),
        width:phoneH.w,
        backgroundColor:temaH.renkler.r1,
    },
    topTxt:{
        fontWeight:'bold',
        fontSize:16,
        textAlign:'right',
        marginTop:phoneH.W(2)
    },
    safArea:{
        marginTop:phoneH.H(2),
    },
    companiesC:{
        width:phoneH.w,
    },
    company:{
        padding:phoneH.W(4),
        backgroundColor:temaH.renkler.r2,
        marginBottom:phoneH.W(2),
        flexDirection:'row'
    },
    image:{
        width:phoneH.W(20),
        height:phoneH.H(10),
        flexDirection:'row'
    },
    companyTxt:{
        marginLeft:phoneH.W(3)
    },
});