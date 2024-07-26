import useAuthStorage from "./useAuthStorage";
import { resetStore } from '@apollo/client';

const authStorage = useAuthStorage();

export default function singOut ()  {

    authStorage.removeAccessToken();
    resetStore();
}

