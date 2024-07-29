import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import { useSignIn } from "./useSignIn";
export const useSignUp = () => {

    const [signIn] = useSignIn();
    const [createUser] = useMutation(CREATE_USER);

    const signUp = async ({ username, password }) => {
        try {
            await createUser({ variables: { user: { username, password } } })
            await signIn({username,password})
            console.log("Successfull registration")
        } catch (e) {
            console.error(e)
        }
    };

    return [signUp];
};