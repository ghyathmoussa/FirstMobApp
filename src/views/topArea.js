import React from 'react';
import { observer } from 'mobx-react';
import {View ,Text}from 'react-native';
import {homePageS} from './style'
import topAreaC from '../controllers/topAreaC';
import homeC from "../controllers/homeC";
class TopArea extends React.Component {
    componentDidMount = topAreaC.cDMount;
    componentDidUpdate = topAreaC.cDUpdate;
    componentWillUnmount = topAreaC.cWUnmount;

    render() {
        const sa = homeC.splashActive;
        return (
            <View style={[homePageS.topArea, { display: sa ? 'none' : 'flex' }]}>
                <Text style={homePageS.topTxt}>LoremCillum pariatur laborum aliquip </Text>
                <Text style={homePageS.topTxt}>LoremCillum pariatur laborum aliquip </Text>
                <Text style={homePageS.topTxt}>LoremCillum pariatur laborum aliquip </Text>
            </View>
        );
    }
}

export default observer(TopArea);