import { useQuery } from "@apollo/client"
import RepositoryItem from "./RepositoryItem"
import { useParams } from "react-router-native"
import { SINGLE_REPO } from "../graphql/queries";
import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";
import theme from "../themes/themes";


export default function SingleItemPage () {
    const styles = StyleSheet.create({
        separator: {
          height: 10,
          color: "#d6d6d6",
          backgroundColor: theme.colors.backgroundMain
        },
      });
      
      const ItemSeparator = () => <View style={styles.separator} />;
      
    const params = useParams();
    const { data } = useQuery(SINGLE_REPO, {
        variables: { repositoryId : params.repoId },
        fetchPolicy: "cache-and-network"
    })

    const repository = data ? data.repository : null
 return (<>
    {repository && <FlatList
      data={repository.reviews.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
    //   keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem repositoryItem={repository} showButton={true}/>}
    />}
    </>
 )
}