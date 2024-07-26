import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from "@apollo/client";
import createApolloClient from './src/utils/apolloClient';
import Main from './src/Main';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import LoginContext from './src/contexts/LoginContext';
import { useState } from 'react';


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);


export default function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <LoginContext.Provider value={{login, setLogin}}>
              <Main />
            </LoginContext.Provider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>

  );
}


