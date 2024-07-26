import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
export const useSignIn = () => {

    const authStorage = useAuthStorage();
    const client = useApolloClient();
    const [authenticate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        try {
            const { data } = await authenticate({ variables: { credentials: { username, password } } })
            await authStorage.setAccessToken(data.authenticate.accessToken)
            client.resetStore();
            console.log("Successfully AccessToken retreived")
        } catch (e) {
            console.error(e)
        }
    };

    return [signIn, result];
};