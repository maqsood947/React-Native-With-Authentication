import { ID, Account, Client } from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();
const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID;

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;

  constructor() {
    console.log('Initializing Appwrite with endpoint:', APPWRITE_ENDPOINT); 
    console.log('Project ID:', APPWRITE_PROJECT_ID);

    if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
      throw new Error('Appwrite endpoint or project ID is missing. Check your .env file.');
    }

    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }

  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: createAccount() ::', error);
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: login() ::', error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite service :: getCurrentUser() ::', error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      console.log('Appwrite service :: logout() ::', error);
    }
  }
}

export default AppwriteService;