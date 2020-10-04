import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, } from 'react-native';

class topAreaC {
    cDMount = async () => {
        
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }


    set = (k, v) => this[k] = v;
}

decorate(
    topAreaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        set: action,
    }
);


export default new topAreaC();