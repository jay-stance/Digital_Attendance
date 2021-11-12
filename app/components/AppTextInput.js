import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} /> }
            <TextInput {...otherProps} style={defaultStyles.text} />
        </View>
    )
}


const styles = StyleSheet.create({})
