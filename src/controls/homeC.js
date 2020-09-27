import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class homeC {
    splashActive = true; // true:show splash, false:close splash
    cDMount = () => { //startinng app
        setTimeout(() =>  this.splashActive = false, 2000 );
    }
    cDUpdate = () => { // updating app
        LayoutAnimation.easeInEaseOut();
    }
    cDWUnmount = () => { //closing app

    }
}

decorate(
    homeC,
    {
        splashActive: observable,
        cDMount: action,
        cDUpdate: action,
        cDWUnmount: action

    }
);


export default new homeC();