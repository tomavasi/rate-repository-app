import { View, Image, Text, Pressable, Alert } from "react-native";
import { StyleSheet } from "react-native";
// import theme from "../themes/themes";
import Stats from "./Stats";
import Info from "./Info";
import * as Linking from 'expo-linking';
import theme from "../themes/themes";
import { useCallback } from "react";

export default function RepositoryItem({ repositoryItem, showButton }) {
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
        },
        button: {
            backgroundColor: theme.colors.primary,
            height: 40,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 5
        },
        buttonText: {
            color: 'white',
            fontSize: theme.fontSizes.subheading,
        }
    });

    const handlePress = useCallback(async () => {

            const supported = await Linking.canOpenURL(repositoryItem.url)

            if (supported) {
                await Linking.openURL(repositoryItem.url)
            } else {
                Alert.alert("Link could not open")
            }
    },[repositoryItem.url])

    return (
        <View style={styles.container}>
            <View style={styles.containerOne}>
                <Image style={styles.image} source={{ uri: repositoryItem.ownerAvatarUrl }} />
                <Info fullName={repositoryItem.fullName} description={repositoryItem.description} language={repositoryItem.language} />
            </View>
            <View style={styles.containerTwo}>
                <Stats reviewCount={repositoryItem.reviewCount} stargazersCount={repositoryItem.stargazersCount} forksCount={repositoryItem.forksCount} ratingAverage={repositoryItem.ratingAverage} />
            </View>
            {showButton && <Pressable onPress={handlePress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Open in Github</Text>
                </View></Pressable>}
        </View>
    )
}