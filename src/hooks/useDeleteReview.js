import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"


export const useDeleteReview = () =>{

    const [deleteRvw] = useMutation(DELETE_REVIEW);

    const deleteReview = async ({reviewId}) => {
        try {
            await deleteRvw(
                {variables: {deleteReviewId : reviewId}}
            )
        } catch (e) {
            console.error(e)
        }
    }
    return deleteReview
}