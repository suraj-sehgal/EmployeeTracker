import React from "react";
import { View, Text, StyleSheet } from "react-native";


const EmployeeCard = ({index,employee}) => {
    
    
    

    return (
        <View  style={[index % 2 === 1 ? styles.oddEmployee : null,styles.cardContainer]}>
            <View style={styles.cornerCircle}><Text style={{ textAlign: 'center',color:'white', fontSize:12, }}>{index+1}</Text></View>
            <View style={styles.card}>
                <View style={styles.item}>
                    <Text style={styles.h3}>EMP ID :  </Text>
                    <Text style={[styles.h4,{color:'white'}]}>{employee.id}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.h3}>Name    :  </Text>
                    <Text style={[styles.h4,{color:'white'}]}>{employee.name}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.h3}>DOB       :  </Text>
                    <Text style={[styles.h4,{color:'#36A546'}]}>{employee.dob}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.h3}>Role       :  </Text>
                    <Text style={[styles.h4,{color:'#00FF2580'}]}>{employee.role}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '85%',
    },
    card:{
        width:'100%',
        backgroundColor: '#5E5E5E82',
        gap: 20,
        borderRadius: 20,
        padding: 15,
        opacity:0.6,
    },
    item: {
        flexDirection: 'row',
    },
    cornerCircle: {
        position:'absolute',
        top:10,
        right:10,
        height: 30,
        width: 30,
        backgroundColor: '#1c1717',
        borderRadius: 15,
        justifyContent: 'center',
        zIndex:100,
    },
    h3:{
        fontSize:12,
        color:'white'
    },
    h4:{
        fontSize:12,
        fontWeight:'bold',
    },
    oddEmployee: {
        marginLeft:30, // Add left margin for odd indexes
    },

})

export default EmployeeCard;