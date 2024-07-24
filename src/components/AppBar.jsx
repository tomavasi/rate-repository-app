import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        height: 80,
        display: "flex",
        justifyContent: "flex-end"
    },
    text: {
        paddingBottom: 10,
        paddingLeft: 10,
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <Pressable>
            <Text style={styles.text}>Repositories</Text>
        </Pressable>
    </View>;
};

export default AppBar;