import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Keyboard, Linking } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import EmployeeCard from "./EmployeeCard";



const Home = () => {
    const [name, setName] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [searching, setSearching] = useState(false);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const employees = [
        {
            id: 1,
            name: "John Doe",
            dob: "1990-05-15",
            role: "Software Engineer"
        },
        {
            id: 2,
            name: "Jane Smith",
            dob: "1988-12-30",
            role: "Project Manager"
        },
        {
            id: 3,
            name: "Michael Johnson",
            dob: "1995-03-10",
            role: "Data Analyst"
        },
        {
            id: 4,
            name: "Emily Brown",
            dob: "1992-08-20",
            role: "UI/UX Designer"
        },
        {
            id: 5,
            name: "David Wilson",
            dob: "1987-06-25",
            role: "Software Developer"
        },
        {
            id: 6,
            name: "Sarah Taylor",
            dob: "1993-09-18",
            role: "Marketing Manager"
        },
        {
            id: 7,
            name: "Matthew Anderson",
            dob: "1991-04-05",
            role: "Financial Analyst"
        },
        {
            id: 8,
            name: "Jennifer Garcia",
            dob: "1989-11-12",
            role: "HR Manager"
        },
        {
            id: 9,
            name: "William Martinez",
            dob: "1994-02-28",
            role: "Frontend Developer"
        },
        {
            id: 10,
            name: "Emma Hernandez",
            dob: "1996-07-07",
            role: "Graphic Designer"
        },
        {
            id: 11,
            name: "Daniel Lopez",
            dob: "1990-10-22",
            role: "Product Owner"
        },
        {
            id: 12,
            name: "Olivia Wilson",
            dob: "1988-01-19",
            role: "Business Analyst"
        },
        {
            id: 13,
            name: "Alexander Brown",
            dob: "1992-06-08",
            role: "Software Engineer"
        },
        {
            id: 14,
            name: "Sophia Davis",
            dob: "1995-03-27",
            role: "Content Writer"
        },
        {
            id: 15,
            name: "James Rodriguez",
            dob: "1986-12-14",
            role: "Database Administrator"
        },
        {
            id: 16,
            name: "Isabella Martinez",
            dob: "1993-08-09",
            role: "UI/UX Designer"
        },
        {
            id: 17,
            name: "Liam Hernandez",
            dob: "1985-05-02",
            role: "Full Stack Developer"
        },
        {
            id: 18,
            name: "Mia Gonzalez",
            dob: "1994-09-11",
            role: "Digital Marketing Specialist"
        },
        {
            id: 19,
            name: "Ethan Perez",
            dob: "1991-02-17",
            role: "Project Coordinator"
        },
        {
            id: 20,
            name: "Ava Flores",
            dob: "1997-10-30",
            role: "Software Tester"
        }
    ];

    const handleCall = () => {
        const phoneNumber = '+91 9123839434'; // Replace with your actual phone number
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl);
    }

    const handleText = (text) => {
        setName(text);
        if (text.length < 2)
            setSearching(false);
    }

    const handleSearch = () => {
        Keyboard.dismiss();
        console.log(name);
        const filtered = employees.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));
        setFilteredEmployees(filtered);
        if (filtered) {
            setSearching(true);
        }
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

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
                <View style={styles.search}>
                    <TextInput style={styles.input} value={name} onChangeText={(text) => handleText(text)} placeholder="Search with name" placeholderTextColor='white' onSubmitEditing={handleSearch} />
                    <TouchableOpacity onPress={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} color="#FFFFFFB3" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={[styles.scrollView, { paddingTop: keyboardOpen ? 80 : 0 }]}>
                <View style={styles.employeeData}>
                    {!searching && employees?.map((employee, index) => <EmployeeCard key={index} index={index} employee={employee} />)}
                    {searching && filteredEmployees.map((employee, index) => <EmployeeCard key={index} index={index} employee={employee} />)}
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.8,
    },
    corner: {
        position: 'absolute',
        top: 55,
        right: 20,
        height: 50,
        width: 50,
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
    search: {
        top: 110,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-evenly',
        backgroundColor: '#5E5E5E82',
        borderColor: '#595959',
        borderWidth: 1,
        borderRadius: 20,
        opacity: 0.4,
        elevation: 10,
    },
    input: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        width: 200,
    },


    scrollView: {
        flex: 1,
        paddingTop: 80,
    },
    employeeData: {
        padding: 10,
        gap: 20,
        marginBottom: 10,
        overflow: 'hidden'
    },

})

export default Home;