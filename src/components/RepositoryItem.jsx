import { View, Text, Image, } from "react-native";
import { StyleSheet } from "react-native";

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
            alignItems: "flex-start"
        },
        containerTitles: {
            flexShrink: 1,
            display: 'flex',
            flexDirection: "col",
            gap: 7,
            paddingRight: 5
        },
        textHeader: {
            fontSize: 20,
            fontWeight: "bold",
        },
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
        language: {
            fontSize: 15,
            backgroundColor: "#0364d6",
            color: "white",
            alignSelf: "flex-start",
            padding: 5,
            fontWeight: "400",
            borderRadius: 5
        },
        image: {
            margin: 10,
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

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerOne}>
                <Image style={styles.image} source={{ uri: repositoryItem.ownerAvatarUrl }} />
                <View style={styles.containerTitles}>
                    <Text style={styles.textHeader}> {repositoryItem.fullName}</Text>
                    <Text style={styles.text}>{repositoryItem.description}</Text>
                    <Text style={styles.language}>{repositoryItem.language}</Text>
                    {/* <Button title={repositoryItem.language}/> */}
                </View>
            </View>
            <View style={styles.containerTwo}>
                <View style={styles.reviews}>
                    <Text style={styles.textStatistics}>{kFormatter(repositoryItem.forksCount)}</Text>
                    <Text style={styles.text}> Forks </Text>
                </View>
                <View style={styles.reviews}>
                    <Text style={styles.textStatistics}>{kFormatter(repositoryItem.stargazersCount)}</Text>
                    <Text style={styles.text}> Stars </Text>
                </View>
                <View style={styles.reviews}>
                    <Text style={styles.textStatistics}>{kFormatter(repositoryItem.ratingAverage)}</Text>
                    <Text style={styles.text}> Ratings </Text>
                </View>
                <View style={styles.reviews}>
                    <Text style={styles.textStatistics}>{kFormatter(repositoryItem.reviewCount)}</Text>
                    <Text style={styles.text}> Reviews </Text>
                </View>
            </View>
        </View>
    )
}