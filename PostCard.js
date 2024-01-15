import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize"
import Ionicons from "react-native-vector-icons/Ionicons";


export default class PostCard extends Component {
    render() {
        return (
        <View style ={styles.container}>
            <View style={styles.cardContainer}></View>
            <View style={styles.authorContainer}></View>
            <View style ={styles.authorImageContainer}></View>
            <Image
            source ={require("../assetss/profile_img.png")}
            style={styles.profileImage}
            ></Image>
            <View style={styles.authorNameContainer}></View>
            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
            <Image source={require("../assetss/post.jpeg")} style ={styles.postImage}></Image>
            <View style={styles.captionContainer}></View>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
            <View style={styles.actionContainer}></View>
            <View style={styles.likeButton}></View>
            <Ionicons name={"heart"} size={RFValue(30)} color={'white'}></Ionicons>
    </View>

        
            
        )
    }
}