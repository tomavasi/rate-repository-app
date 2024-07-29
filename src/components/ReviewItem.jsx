import { View, Text, StyleSheet } from "react-native";
import theme from "../themes/themes";


export default function ReviewItem({ review }) {

    const styles = StyleSheet.create({
        container: {
            margin: 20,
            display: 'flex',
            flexDirection: "row",
        },
        leftContainer: {
            marginRight: 15,
        },
        ratingContainer: {
            borderWidth: 3,
            borderColor: theme.colors.primary,
            alignItems: "center",
            justifyContent: 'center',
            width: 65,
            height: 65,
            borderRadius: 50,
            padding: 15
        },
        ratingText:{
            fontSize: theme.fontSizes.subheading,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.primary
        },
        rightContainer:{
            width: "80%"
        },
        text: {
            alignSelf: "flex-start",
            fontSize: theme.fontSizes.body,
            marginTop: 5
        },
        username:{
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading
        },
        date: {
            color: "grey"
        }
        
    })

    const date = new Date(review.createdAt);

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>{review.rating}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.username}>{review.user.username}</Text>
                <Text style={styles.date}>{date.toLocaleDateString('fi-FI')}</Text>
                <Text style={styles.text}>{review.text}</Text>
            </View>
        </View>

    )
}