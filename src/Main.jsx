import { StyleSheet, View } from "react-native";
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from "./components/SignIn";
import SingleItemPage from "./components/SingleItemPage";
import CreateReview from "./components/CreateReview";
import SignUp from "./components/SignUp";
import ReviewsList from "./components/ReviewsList";


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    }
})

export default function Main() {

    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />}>
                </Route>
                <Route path="/:repoId" element={<SingleItemPage />} />
                <Route path="/review" element={<CreateReview />}/>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reviewlist" element={<ReviewsList/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    )
}