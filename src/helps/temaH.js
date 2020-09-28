import { observable, action, decorate } from 'mobx';

class temaH {
    renkler = {
        r1: '#fff',
        r2: '#F30C0C',
        r3: '#000000',
    };

    notRenkleri = {
        r1: '#eb4034',
        r2: '#ff7e75',
        r3: '#ffbc75',
        r4: '#ffff75',
        r5: '#d4edbb',
        r6: '#b9fa78',
        r7: '#4bebd3',
        r8: '#9b4beb',
    }
}

decorate(
    temaH,
    {
        renkler: observable,
        notRenkleri: observable,
    }
);

export default new temaH();