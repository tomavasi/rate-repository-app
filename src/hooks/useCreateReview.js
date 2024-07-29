import { GET_ME } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { Alert } from "react-native";


export const useCreateReview = () => {

    const [review] = useMutation(CREATE_REVIEW);
    const { data } = useQuery(GET_ME)
    const me = data ? data.me : null

    const createReview = async ({ ownerName, rating, repositoryName, text }) => {
        if (me) {
            try {
                return await review({ variables: { review: { ownerName, rating, repositoryName, text } } })
            } catch (e) {
                console.error(e)
            }
        } else {
            Alert.alert("Please sign in before you can leave a review")
        }
    };

    return [createReview];
}