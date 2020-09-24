import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Keyboard } from 'react-native';
import logInC from './logInC';
import 

class splashC {
    cDMount = async () => {
        Keyboard.addListener('keyboardDidShow', tlfnH.klavyeAcildi);
        Keyboard.addListener('keyboardDidHide', tlfnH.klavyeKapandi);

        const x = await strgH.getirOturumBilgileri();
        if (x && x.oturumDurumu === 'acik') {
            logInC.set('email', x.email);
            logInC.set('sifre', x.sifre);
            await logInC.oturumAc();
        }
        else setTimeout(() => this.durum = 1, 1000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }


    durum = 0; //0: splash, 1: oturumaç, 2: üyeol, 3:anasayfa


    set = (k, v) => this[k] = v;
}

decorate(
    splashC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        durum: observable,

        set: action,
    }
);


export default new splashC();