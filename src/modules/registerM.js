import { action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth';

class resiterM {
    addMemberM  = () => {

    }
    siginMemberM  = () => {
        
    }
}
decorate(
    resiterM,
    {
        addMemberM:action,
        siginMemberM:action,
    }
);


export default new resiterM();