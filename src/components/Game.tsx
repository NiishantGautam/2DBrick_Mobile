// This File contains all the Game mechanics and game logic

import {theme} from "@/../theme"
import { boardHeight } from '@/constants';
import { SafeAreaView, View, StyleSheet } from 'react-native';

export default function Game() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.board}>
                {/* TODO: Add game elements */}
            </View>
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
});
