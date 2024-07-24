import {  StyleSheet, View } from "react-native";
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';

const styles =StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    }
})

export default function Main () {
    return (
        <View style={styles.container}>
            <AppBar/>
            <RepositoryList />
        </View>
    )
}