import React from 'react'
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Screen from "../components/Screen";
// import 
// import { AppForm, TextInput, SubmitButton } from "../components/forms";



// const validationSchema = Yup.object().shape({
//     matricNo: Yup.string().required().label("Matric No"),
//     password: Yup.string().required().min(4).label("Password"),
//   });
  

export default function LoginScreen() {
    const [matricNo, setMatricNo] = useState("")
    const [password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    return (
        <Screen style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.heading}> New Here? </Text>
                <Text style={styles.p}> Welcome Back we are very glad to have you here </Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // icon="account"
                    keyboardType="default"
                    name="matricNo"
                    placeholder="Email"
                    textContentType="text"
                />
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="Confirmpassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    textContentType="password"
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity >
                    <Text style={styles.btn} > REGISTER </Text>
                </TouchableOpacity>
            </View>
      </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    heading: {
        fontSize: 30,
        marginBottom: 10,
        color: "#282534",
        alignItems: "flex-start",
        fontWeight: "700"
        // : 700,
    },
    p: {
        width: "90%",
        marginBottom: 40,
        fontSize: 15,
        // marginBottom: 30,
        color: "#464352",
        alignItems: "flex-start",
        // : 700,
    },
    input: {
        width: "100%",
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#282534", 
    },
    btn: {
        fontWeight: "bold",
        fontSize: 15,
        backgroundColor:  "#282534",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        padding: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#dad7e6", 
        elevation: 10

        // marginBottom: 20,
    }
})
