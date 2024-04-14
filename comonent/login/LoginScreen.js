import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';


const Login = () => {
    const navigation = useNavigation();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin = () =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            Snackbar.show({ text: 'Fill all the Fields', duration: Snackbar.LENGTH_SHORT, backgroundColor: 'green' });
            return;
        }

        if (!emailRegex.test(email)) {
            // Invalid email format, display an error or take appropriate action
            Snackbar.show({ text: 'Warning! Invalid Email Format', duration: Snackbar.LENGTH_SHORT, backgroundColor: 'green' });
            return;
        }
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.parent}>
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradient colors={['#000000', '#000E09']} style={{ flex: 1 }} >
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image style={styles.image} source={{ uri: 'https://res.cloudinary.com/surajsehgal/image/upload/v1713000695/Group_3_2x_f6ttkl.png' }} />
                        <Text style={styles.logoText}>#We are Electric</Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput style={styles.textInput} value={email} onChangeText={(text)=>setEmail(text)} placeholder="Email" placeholderTextColor="white" />
                        <TextInput style={styles.textInput} value={password} onChangeText={(text)=>setPassword(text)} placeholder="Password" placeholderTextColor="white" />
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={handleLogin} style={styles.button}>
                            <LinearGradient colors={['#00FF2580', '#36A54680', '#000000']} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                                <Text style={styles.text}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={styles.forgetText}>Forget Password?</Text>
                    </View>

                </View>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 45,
    },
    logo: {
        alignItems: 'center',
    },
    image: {
        height: 90,
        width: 90,
    },
    logoText: {
        fontSize: 16,
        color: '#36A546CC',
        fontWeight: '100',

    },
    input: {
        alignItems: 'center',
        gap: 25,
    },

    textInput: {
        width: 238,
        padding: 10,
        borderRadius: 20,
        elevation: 50,
        backgroundColor: '#1A2C2C99',
        opacity: 1,
        color:'white',
    },
    login:{
        gap:25,
    },
    button: {
        width: 238,
        borderRadius: 20,
        overflow: 'hidden',
        borderColor: '#8CFF0026',
        borderWidth: 2,
    },
    gradient: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF8C',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgetText: {
        color: '#36A546',
        fontSize: 15,
        alignSelf: 'center',
    }
})


export default Login;