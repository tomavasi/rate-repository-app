import { View, Text, StyleSheet } from "react-native";

export default function Stats({ forksCount, stargazersCount, ratingAverage, reviewCount}) {

    const styles = StyleSheet.create({
        textStatistics: {
            fontSize: 15,
            fontWeight: "bold",
            alignSelf: "center",
        }
        ,
        text: {
            fontSize: 15,
            alignSelf: "center",
        },
        reviews: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: "center"
        },
    })
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    return (
        <>
            <View style={styles.reviews}>
                <Text style={styles.textStatistics}>{kFormatter(forksCount)}</Text>
                <Text style={styles.text}> Forks </Text>
            </View>
            <View style={styles.reviews}>
                <Text style={styles.textStatistics}>{kFormatter(stargazersCount)}</Text>
                <Text style={styles.text}> Stars </Text>
            </View>
            <View style={styles.reviews}>
                <Text style={styles.textStatistics}>{kFormatter(ratingAverage)}</Text>
                <Text style={styles.text}> Ratings </Text>
            </View>
            <View style={styles.reviews}>
                <Text style={styles.textStatistics}>{kFormatter(reviewCount)}</Text>
                <Text style={styles.text}> Reviews </Text>
            </View>
        </>
    )
}