import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize"
import Ionicons from "react-native-vector-icons/Ionicons";

export default class AddPost extends  Component{
     
    render(){
        return(
            async addPost(){
                if(this.state.caption){
                    let postData={
                        previewImage : this.state.previewImage,
                        caption : this.state.caption,
                        author : firebase.auth().currentUser.displayName,
                        created_on:new Date(),
                        author_uid : firebase.auth().currentUser.uid,
                        profile_image : this.state.profile_image,
                        likes : 0

                    };
                    await firebase
                    .database()
                    .ref(
                        "/posts/"+
                        Math.random()
                        .toString(36)
                        .slice(2)


                    )
                    .set(postData)
                    .then(function(snapshot){});
                    this.props.setUpdateToTrue();
                    this.props.navigation.navigate("Feed";
                    )
                    
                }else{
                    Alert.alert(
                        "Error",
                        "All fields are required!",
                        [{text: "OK", onPress:()=> console.log("OK Pressed")}]
                        {cancelable : false}
                    );
                }
            }
            constructor(props){
                super(props);
                this.state={
                    light_theme:true,
                    post_id: this.props.post.key, 
                    post_data: this.props.post.value
                };
            }
        )
    }

}