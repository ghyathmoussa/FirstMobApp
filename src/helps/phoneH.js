import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class phoneH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    //W(d) { return this.w * d / 100;  }
    W = d => this.w * d / 100;
    H = d => this.h * d / 100;



    android = Platform.OS === 'android';
    ios = Platform.OS === 'ios';

    sbh = getStatusBarHeight(); //status bar for android 
    sbhi = getStatusBarHeight(true);// status bar for ios


    klavye = { durum: false, h: 0 };
    klavyeAcildi = d => {
        this.klavye = { durum: true, h: d.endCoordinates.height };
    }
    klavyeKapandi = () => this.klavye = { durum: false, h: 0 };
}

decorate(
    phoneH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,

        android: observable,
        ios: observable,

        sbh: observable,
        sbhi: observable,

        klavye: observable,
        klavyeAcildi: action,
        klavyeKapandi: action
    }
);


export default new phoneH();