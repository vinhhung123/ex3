import React, { useState } from "react";
import { Button, StyleSheet, Text, View ,Image,ImageBackground} from "react-native";
import { TextInput } from "react-native-paper";

const Login = ()=>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./color.png') } resizeMode="cover" style={styles.bak}>
            <View style={styles.container}>    
            <Image style={styles.logo} source={require('./hsr.jpg')} />
            <Text style={{
                alignSelf:"center",
                fontSize:30,
                fontWeight: "bold",
                margin:10,
            }}>LOGIN</Text>
            <TextInput
                style={{  margin:10,}}
                placeholder="Nhap user name"
                onChangeText={(text)=> setUserName(text)}
                value={userName}
            />
             <TextInput
                style={{  margin:10,}}
                placeholder="Nhap password"
                onChangeText={(text)=> setPassword(text)}
                value={password}
            />
            <Button
                title="Đăng Nhập"
                onPress={()=> alert("Username "+ userName +" "+ "Password " + password )}
            />
            </View>
            </ImageBackground>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            padding:10
           
        },
        logo:{
            width:'100%',
            height:150
        },
        bak:{
            flex:1
        },
        

    }
)