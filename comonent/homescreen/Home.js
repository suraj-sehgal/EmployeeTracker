import React from "react";
import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const Home = () => {
    const handleCall = () => {
        const phoneNumber = '+91 9123839434'; // Replace with your actual phone number
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl);
    }
    return (
        <LinearGradient colors={['#000000', '#000000']} style={{ flex: 1 }} >
            <View style={styles.header}>
                <TouchableOpacity onPress={handleCall}>
                    <Image style={styles.corner} source={{ uri: 'https://res.cloudinary.com/surajsehgal/image/upload/v1713009726/Group_46_2x_akhl4d.png' }} />
                </TouchableOpacity>
                <View style={styles.logo}>
                    <Image style={{ height: 90, width: 90 }} source={{ uri: 'https://res.cloudinary.com/surajsehgal/image/upload/v1713009735/moptro_logo_2x_d0tzzw.png' }} />
                    <View style={styles.four}>
                        <Text style={{ fontSize: 18, color: '#36A546', alignSelf: 'center' }}>4</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Employee Productivity Dashboard</Text>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 12, color: '#FFFFFF' }}>Productivity on Monday</Text>
                        <Text style={{ fontSize: 14, color: '#36A546' }}>20%</Text>
                    </View>
                    <View style={[styles.progressBar, { width: 40 }]}></View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 12, color: '#FFFFFF' }}>Productivity on Tuesday</Text>
                        <Text style={{ fontSize: 14, color: '#36A546' }}>92%</Text>
                    </View>
                    <View style={[styles.progressBar, { width: 184 }]}></View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 12, color: '#FFFFFF' }}>Productivity on Wednesday</Text>
                        <Text style={{ fontSize: 14, color: '#36A546' }}>120%</Text>
                    </View>
                    <View style={[styles.progressBar, { width: 240 }]}></View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 12, color: '#FFFFFF' }}>Productivity on Thursday</Text>
                        <Text style={{ fontSize: 14, color: '#36A546' }}>95%</Text>
                    </View>
                    <View style={[styles.progressBar, { width: 190 }]}></View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 12, color: '#FFFFFF' }}>Productivity on Friday</Text>
                        <Text style={{ fontSize: 14, color: '#36A546' }}>90%</Text>
                    </View>
                    <View style={[styles.progressBar, { width: 180 }]}></View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '500' }}>Productivity on Saturday</Text>
                        <Text style={{ fontSize: 14, color: '#36A546' }}>98%</Text>
                    </View>
                    <View style={[styles.progressBar, { width: 196 }]}></View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    corner: {
        position: 'absolute',
        top: 55,
        right: 20,
        height: 50,
        width: 50,
    },
    header: {

    },

    logo: {
        height: 120,
        width: 120,
        top: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    four: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#5E5E5EB5',
        borderColor: '#FFFEFE00',
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        opacity: 0.4,
    },
    container: {
        top: 130,
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#5E5E5E82',
        borderRadius: 20,
        paddingBottom: 40,
        gap: 30,
        opacity: 0.6,
        shadowOpacity: 10,
    },
    headingContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#1A2C2C99',
        borderRadius: 30,
    },
    heading: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#FFFFFFB3',
    },
    subcontainer: {
        width: '95%',
        gap: 5,
    },
    title: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 40,
        justifyContent: 'space-between',
    },
    progressBar: {
        height: 11,
        backgroundColor: '#36A54680',
        borderColor: '#36A546',
        borderWidth: 1,
        borderRadius: 4,
    }
})

export default Home;