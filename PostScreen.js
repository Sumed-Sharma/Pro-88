import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize"
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostScreen extends Component {
     render(){
        toggleSwitch(){
            const previous_state = this.state.isEnabled;
            const theme=!this.state.isEnabled ? "dark": "light"
            var updates = {}
            updates["/users/"+firebase.auth().currentUser.uid+"/current_them"=theme]
            firebase.database().ref().update(updates);
            this.setState({isEnabled:!previous_state, light_theme:previous_state})
         }
     }
}