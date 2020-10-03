import { observable, action, decorate } from 'mobx';
import {keyboard} from 'react-native';
import phoneH from '../helpers/phoneH';

class logInC {
    splashAktive = true;
    registerBtn = true;
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
        register: action,
        set:action,


    }

);

export default new logInC();