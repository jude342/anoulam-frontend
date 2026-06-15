import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientDesign({ children, style }) {
    return (
        <LinearGradient
            colors={['#E8642E', '#F4A460', '#E8642E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.backgroundContainer, style]}
        >
            {children}
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        overflow: 'hidden',
    }
})