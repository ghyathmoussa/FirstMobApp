import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class homeC {
    cDMount = () => { //startinng app
        
    }
    cDUpdate = () => { // updating app
        // console.count('anasayfaC_cDUpdate');
        // console.timeEnd('Anasayfa_update');
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
        cDWUnmount: action,
    }
);


export default new homeC();