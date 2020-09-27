import {StyleSheet} from 'react-native';
import phoneH from '../helps/phoneH';

// C : Container
//SC : SubContainer
//B : Button
//BT : Button Text

export const homePageS = StyleSheet.create({
    C:{
        flex:1,
        borderWidth:2,
        borderColor:'red',
    },
    C2:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoC:{
        borderWidth:1,
        position:'absolute',
        left:phoneH.W(2),
        top:phoneH.H(2),
    },
    topArea:{
        height:200,
        width:phoneH.w,
        borderWidth:1,
        borderColor:'blue'
    }

});