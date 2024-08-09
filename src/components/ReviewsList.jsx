import { useQuery } from "@apollo/client"
import { Text, View, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import { GET_ME } from "../graphql/queries"
import ReviewItem from "./ReviewItem"
import theme from "../themes/themes"



export default function ReviewsList() {

    const styles = StyleSheet.create({
        separator: {
          height: 10,
          color: "#d6d6d6",
          backgroundColor: theme.colors.backgroundMain
        },
      });

    const { data, refetch } = useQuery(GET_ME, {
        fetchPolicy: 'cache-and-network',
        variables: { includeReviews: true }
    })

    const ItemSeparator = () => <View style={styles.separator} />;

    const reviewsData = data ? data.me.reviews.edges.map(edge => edge.node) : []

    return (
        <FlatList
            data={reviewsData}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <ReviewItem review={item} refetch={refetch} />
            )} />
    )
}