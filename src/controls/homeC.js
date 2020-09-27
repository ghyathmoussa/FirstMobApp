import { observable, action, decorate } from 'mobx';

class homeC {
    splashActive = true; // true:show splash, false:close splash
    cDMount = () => { //startinng app
        
    }
    cDUpdate = () => { // updating app
        
    }
    cDWUnmount = () => { //closing app
        
    }
}

decorate(
    homeC,
    {
        splashActive:observable,
        cDMount:action,
        cDUpdate:action,
        cDWUnmount:action

    }
);


export default new homeC();