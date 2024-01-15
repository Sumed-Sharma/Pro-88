import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class Logout extends Component {
 render(){
    return(
     toggleSwitch(){
        const previous_state = this.state.isEnabled;
        const theme=!this.state.isEnabled ? "dark": "light"
        var updates = {}
        updates["/users/"+firebase.auth().currentUser.uid+"/current_them"=theme]
        firebase.database().ref().update(updates);
        this.setState({isEnabled:!previous_state, light_theme:previous_state})
     }
    )
 }

}