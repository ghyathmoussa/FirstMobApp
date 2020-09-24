import { observer } from 'mobx-react';
import React from 'react';
import {} from 'react-native';
import logInC from '../controls/logInC';

class LogIn extends React.Component{
    componentDidMount = logInC.cDMount();
    componentDidUpdate = logInC.cDUpdate();
    componentWillUnmount = logInC.cWUnmount();
    
}

export default observer(LogIn);