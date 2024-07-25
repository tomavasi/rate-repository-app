import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from "@apollo/client";
import createApolloClient from './src/utils/apolloClient';
import Main from './src/Main';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

export default function App() {

  console.log(Constants.expoConfig.extra.env)

  return (
    <>
      <NativeRouter>
        <ApolloProvider client = {apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>

  );
}


