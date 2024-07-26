import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes/themes';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useContext } from "react";
import LoginContext from "../contexts/LoginContext";

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

    const authStorage = useAuthStorage();
    const client = useApolloClient();
    const {login, setLogin} = useContext(LoginContext)
    const signOut = async () => {

        try {
            authStorage.removeAccessToken();
            setLogin(false)
            await client.resetStore();
            console.log('Store reset successfully');
        } catch (error) {
            console.error('Error resetting store:', error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/">
                    <Text style={styles.text}>Repositories</Text>
                </Link>

                    <Link to="/signin">
                        {!login ? <Text style={styles.text}>Sign In</Text> : <Text style={styles.text} onPress={signOut}>Sign Out</Text>}
                    </Link> 
            </ScrollView>
        </View>)
};

export default AppBar;