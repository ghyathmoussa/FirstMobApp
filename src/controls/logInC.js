import { observable, action, decorate } from 'mobx';
import {keyboard} from 'react-native';
import phoneH from '../helps/phoneH';

class logInC {
    splashAktive = true;
    registerBtn = true;

    durum = 1;
    cDMount = () => {
        setTimeout(() => this.splashActive = false, 2000);
    }
    cDUpdate = () => {
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { }

    set = (k, v) => this[k] = v;

    register = () => {this.set('durum',this.durum == 1 ? 2 : 1)}
}



decorate(
    logInC,
    {
        cDMount: observable,
        cDUpdate: observable,
        registerBtn: observable,
        splashActive: observable,
        durum:observable,
        register: action,
        set:action,


    }

);

export default new logInC();