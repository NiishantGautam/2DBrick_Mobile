// This File contains all the Game mechanics and game logic

import {theme} from "@/../theme"
import { boardHeight } from '@/constants';
import { SafeAreaView, View, StyleSheet, Button } from 'react-native';
import Animated, {
    useSharedValue, useAnimatedStyle, withSpring,
} from "react-native-reanimated";

export default function Game() {

    const x = useSharedValue(0)

    const moveBall = () => {
        x.value = x.value + 10

    }

    const ballStyle = useAnimatedStyle(() => {
        return {
            left: withSpring(x.value +100, {duration:1000})
        }
    })



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.board}>
                {/* TODO: Add game elements */}

                <Animated.View style={[styles.ball, ballStyle]}> </Animated.View>

            </View>

            <Button title="Move Ball" onPress={moveBall} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorDarkGray
    },
    board: {
        backgroundColor: theme.colorStrongDarkGray,
        height: boardHeight,
        marginVertical: 'auto',
        overflow: 'hidden',
    },
    ball: {
        width:50,
        height:50,
        backgroundColor: theme.colorWhite,
        borderRadius: 50,
        position: 'absolute',
        top: boardHeight/2,

    }
});
