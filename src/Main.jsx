import {  StyleSheet, View } from "react-native";
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import { Route, Routes, Navigate, Link } from 'react-router-native';
import SignIn from "./components/SignIn";

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
            <Routes>
                <Route path="/" element={<RepositoryList />}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    )
}