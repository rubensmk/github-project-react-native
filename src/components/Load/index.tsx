import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/loading.json';
import theme from '../../global/theme';

export function Load() {
    return (
        <View style={styles.container}>
            <LottieView
                style={styles.animation}
                source={loadAnimation}
                autoPlay
                loop
                duration={3000}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    animation: {
        backgroundColor: theme.colors.background,
        width: 200,
        height: Dimensions.get('window').height,
    }
})
export default Load;