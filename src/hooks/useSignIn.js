import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
export const useSignIn = () => {

    const authStorage = useAuthStorage();

    const [authenticate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        try {
            const {data} = await authenticate({ variables: { credentials: { username, password } } })
            
            authStorage.setAccessToken(data.authenticate.accessToken)

            console.log("Successfully AccessToken retreived")
        } catch (e){
            console.error(e)
        }
    };

    return [signIn, result];
};