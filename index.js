import {AppRegistry,UIManager} from 'react-native';
// import 'react-native-console-time-polyfill';
import App from './src/views/App';
import {name as appName} from './app.json';
import phoneH from './src/helpers/phoneH';

if (phoneH.android) UIManager.setLayoutAnimationEnabledExperimental(true);

// const codepushAYARLAR = {
//     checkFrequency: codePush.CheckFrequency.MANUAL, //güncelleme kontrol sıklığı
// };

AppRegistry.registerComponent(appName, () => App);
