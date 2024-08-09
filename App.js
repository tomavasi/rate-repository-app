import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from "@apollo/client";
import createApolloClient from './src/utils/apolloClient';
import Main from './src/Main';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { PaperProvider } from 'react-native-paper';


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);


export default function App() {


  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <PaperProvider>
              <Main />
            </PaperProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>

  );
}


