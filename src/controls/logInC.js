import { observable, action, decorate } from 'mobx';

class logInC {
    cDMount = async () => { }
    cDUpdate = () => {
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { }
}

decorate(
    logInC,
    {
        cDMount: observable,
        cDUpdate: observable,
    }

);

export default new logInC();