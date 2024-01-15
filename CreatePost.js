import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

export default class CreatePost extends Component {

    render(){
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}></View>
            <View style={styles.appIcon}></View>
            
            <Image
             source={require("../assetss/assets/logo.png")}
             style={styles.iconImage}></Image>
            
             <View style={styles.appTitleTextContainer}></View>
             <Text style={styles.appTitleTextContainer}>NEW POST</Text>

             <View style={styles.fieldsContainer}></View>
             <ScrollView>
                 <Image
                 source={preview_images[this.state.previewImage]}
                 style={styles.previewImage}
                 ></Image>


             </ScrollView>
             
             <View style={{height:RFValue(this.state.dropdownHeight)}}></View>

             <DropDownPicker
             items={[
                {label1:"Image 1",value:"Image_1"},
                {label2:"Image 2",value:"Image_2"},
                {label3:"Image 3",value:"Image_3"},
                {label4:"Image 4",value:"Image_4"},
                {label5:"Image 5",value:"Image_5"},
                {label6:"Image 6",value:"Image_6"},
                {label7:"Image 7",value:"Image_7"}
             ]}
            ></DropDownPicker>
              
             defaultValue={this.state.previewImage}
             containerStyle={{
                height:40,
                borderRadius:20,
                marginBottom:10
             }}
             onOpen={()=>{
                this.setState({dropdownHeight:170})
             }}

             onClose={()=>{
                this.setState({dropdownHeight:40})

             }}
             style={{backgroundColor:"transparent"}}
             itemStyle={{justifyContent:"flex-start"}}

             dropDownStyle={{backgroundColor:"2a2a2a"}}
             labelStyle={{
               color:"white"

             }}

             arrowStyle={{
               color:"white"
             }}

    onChangeItem={item=>
      this.setState({
         previewImage:item.value
      })
             }

             <TextInput
             style={styles.inputFont}
             onChangeText={caption=>this.setState({caption})}
             placeholder={"Caption"}
             placeholderTextColor="white"
             />
         <View style={{flex:0.08}}/>
        </View>
        
        

        )


    }
}
             
        
    
