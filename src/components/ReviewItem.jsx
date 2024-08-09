import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import theme from "../themes/themes";
import { useQuery } from "@apollo/client";
import { SINGLE_REPO } from "../graphql/queries";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";
import { useDeleteReview } from "../hooks/useDeleteReview";


export default function ReviewItem({ review, refetch }) {

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
        ratingText: {
            fontSize: theme.fontSizes.subheading,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.primary
        },
        rightContainer: {
            width: "80%"
        },
        text: {
            alignSelf: "flex-start",
            fontSize: theme.fontSizes.body,
            marginTop: 5
        },
        username: {
            fontWeight: theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading,
        },
        date: {
            color: "grey"
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            gap: 20
        },
        viewButton: {
            backgroundColor: theme.colors.primary,
            height: 40,
            paddingHorizontal: 30,
            borderRadius: 5,
            justifyContent: "center"
        },
        delButton:{
            backgroundColor: theme.colors.error,
            height: 40,
            paddingHorizontal: 30,
            borderRadius: 5,
            justifyContent: "center"
        },
        textButton: {
            color: 'white',
            fontSize: theme.fontSizes.body
        }

    })
    const date = new Date(review.createdAt);
    const navigate = useNavigate();
    let repo;

    if (review.repositoryId) {
        let { data } = useQuery(SINGLE_REPO, {
            fetchPolicy: 'cache-and-network',
            variables: { repositoryId: review.repositoryId }
        })
        repo = data
    }
    const deleteReview = useDeleteReview();

    const alertBtn = () => {
        Alert.alert('Delete Review', 'Are you certain you want to delete this review?',[
            {
                text: 'Cancel',
                onPress: () => console.log('Delete was cancelled'),
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress: async () => {await deleteReview({reviewId: review.id}); refetch()}
            }
        ])
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>{review.rating}</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    {review.user && <Text style={styles.username}>{review.user.username}</Text>}
                    {repo && <Text style={styles.username}>{repo.repository.fullName}</Text>}
                    <Text style={styles.date}>{date.toLocaleDateString('fi-FI')}</Text>
                    <Text style={styles.text}>{review.text}</Text>
                </View>
            </View>
            {repo && (
                <View style={styles.buttons}>
                    <Pressable onPress={() => { navigate(`/${repo.repository.id}`) }}>
                        <View style={styles.viewButton}>
                            <Text style={styles.textButton}>View Repository</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={alertBtn}>
                        <View style={styles.delButton}>
                            <Text style={styles.textButton}>Delete Repository</Text>
                        </View>
                    </Pressable>
                </View>
            )}
        </>
    )
}