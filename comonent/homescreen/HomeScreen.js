import React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';import Home from "./Home";
import Employee from "../employee/Employee";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'


const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator labeled={false}
        shifting={true}
            barStyle={{ backgroundColor: '#0F2323' }}
            screenOptions={({route})=>({
                    tabBarIcon: () => {
                    let iconName;
                    if(route.name === 'Home')
                        iconName=faHouse;
                    else
                        iconName=faUser;
                    return <FontAwesomeIcon icon={iconName} color="green" size={28} />
                }
            })}
            
        >
            <Tab.Screen name="Home"  component={Home} />
            <Tab.Screen name="Employee" component={Employee} />
        </Tab.Navigator>
    )
}

export default HomeScreen;