import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
   mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
    accessToken
  }
}
`

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`
export const CREATE_USER = gql`
mutation Authenticate($user: CreateUserInput) {
  createUser(user: $user){
  username
  }
}`

export const DELETE_REVIEW = gql`
mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}`