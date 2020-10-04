import { action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth';

class fbH {
    addMember = (email, pass) => new Promise((resolve, reject) => {
        auth().createUserWithEmailAndPassword(email,pass)
        .then(d => resolve(d))
        .catch(e => reject(e));
    });

    siginMember = (email, pass) => new Promise((resolve, reject) => {
        auth().signInWithEmailAndPassword(email,pass)
        .then(d => resolve(d))
        .catch(e => reject(e));
    });
}
decorate(
    fbH,
    {
        addMember:action,
        siginMember:action,
        
    }
);


export default new fbH();