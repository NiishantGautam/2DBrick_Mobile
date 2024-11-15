

import {theme} from "@/../theme"
import {ballRadius, ballSpeed, boardHeight} from '@/constants';
import {SafeAreaView, View, StyleSheet, Button, useWindowDimensions} from 'react-native';
import Animated, {
    useSharedValue, useAnimatedStyle, withSpring, withTiming, useFrameCallback,
} from "react-native-reanimated";
import {BallData} from "@/types";
import {GameContext} from "@/GameContext";
import {Ball} from "@/components/Ball";


export default function Game() {


    const {width} = useWindowDimensions()

    const ball = useSharedValue<BallData>({
        x: width / 2,
        y: boardHeight - ballRadius,
        r: ballRadius,
        dx: -1,
        dy: -1
    })


    return (
        <GameContext.Provider value={{ball}}>
        <SafeAreaView style={styles.container}>
            <View style={styles.board}>
                {/* TODO: Add game elements */}

                <Ball />

            </View>


            <Button title="Move Ball"  />
        </SafeAreaView>
        </GameContext.Provider>

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
    }
});
