import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes/themes';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backgroundBar,
        height: 100,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: 10
    },
    text: {
        paddingBottom: 10,
        paddingLeft: 10,
        color: "white",
        fontSize: theme.fontSizes.heading,
        fontWeight: theme.fontWeights.bold
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/">
                    <Text style={styles.text}>Repositories</Text>
                </Link>
                <Link to="/signin">
                    <Text style={styles.text}>Sign-In</Text>
                </Link>
            </ScrollView>
        </View>)
};

export default AppBar;