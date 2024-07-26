import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawAuthToken = await AsyncStorage.getItem(
        `${this.namespace}: authTokens`
    )

    return rawAuthToken ? JSON.parse(rawAuthToken) : [];

  }

  async setAccessToken(accessToken) {
    const currentTokens = await this.getAccessToken();
    const newToken = [...currentTokens, accessToken];

    await AsyncStorage.setItem(
        `${this.namespace}: authTokens`,
        JSON.stringify(newToken)
    )
    console.log("something")
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}: authTokens`)
  }
}

export default AuthStorage;