import { View, Text, StyleSheet } from "react-native"
import theme from "../themes/themes"

export default function Info({ fullName, description, language }) {

    const styles = StyleSheet.create({
        text: {
            fontSize: theme.fontSizes.body,
            alignSelf: "flex-start",
        },
        language: {
            fontSize: theme.fontSizes.body,
            backgroundColor: theme.colors.primary,
            color: "white",
            alignSelf: "flex-start",
            padding: 5,
            fontWeight: theme.fontWeights.normal,
            borderRadius: 5
        },
        textHeader: {
            fontSize: theme.fontSizes.subheading,
            fontWeight: theme.fontWeights.bold,
        },
        containerTitles: {
            flexShrink: 1,
            display: 'flex',
            flexDirection: "col",
            justifyContent: "flex-start",
            gap: 7,
            paddingRight: 5
        },
    })
    return (
        <View style={styles.containerTitles}>
            <Text style={styles.textHeader}> {fullName}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.language}>{language}</Text>
        </View>
    )

}