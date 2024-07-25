import { View, Image, } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../themes/themes";
import Stats from "./Stats";
import Info from "./Info";

export default function RepositoryItem({ repositoryItem }) {
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            display: 'flex',
            flexDirection: "column",
        },
        containerOne: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        image: {
            margin: 15,
            height: 50,
            width: 50,
            borderRadius: 5
        },
        containerTwo: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            padding: 30,
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.containerOne}>
                <Image style={styles.image} source={{ uri: repositoryItem.ownerAvatarUrl }} />
                <Info fullName={repositoryItem.fullName} description={repositoryItem.description} language={repositoryItem.language}/>
            </View>
            <View style={styles.containerTwo}>
               <Stats reviewCount={repositoryItem.reviewCount} stargazersCount={repositoryItem.stargazersCount} forksCount={repositoryItem.forksCount} ratingAverage={repositoryItem.ratingAverage}/>
            </View>
        </View>
    )
}