import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

export const useSignIn = () => {
    const [authenticate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const result = authenticate({ variables: { credentials: { username, password } } })
        return result
    };

    return [signIn, result];
};