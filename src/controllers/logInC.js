import { observable, action, decorate } from 'mobx';
import splashC from './splashC';


class logInC {
    cDMount = () => {

    }
    cDUpdate = () => {
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { }

    set = (k, v) => this[k] = v;

    register = () => {
        splashC.set('durum', splashC.durum === 1 ? 2 : 1);
    }
}



decorate(
    logInC,
    {
        cDMount: observable,
        cDUpdate: observable,
        set: action,
        register: action
    }

);

export default new logInC();