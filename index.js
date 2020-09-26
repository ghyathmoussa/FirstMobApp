/**
 * @format
 */

import {AppRegistry,UIManager} from 'react-native';
import App from './src/views/App';
import {name as appName} from './app.json';
import phoneH from './src/helps/phoneH';

if (phoneH.android) UIManager.setLayoutAnimationEnabledExperimental(true);

// const codepushAYARLAR = {
//     checkFrequency: codePush.CheckFrequency.MANUAL, //güncelleme kontrol sıklığı
// };

AppRegistry.registerComponent(appName, () => App);
