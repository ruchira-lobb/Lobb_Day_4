import Constants from 'expo-constants';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || Constants.expoConfig?.extra?.apiUrl;

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  TIMEOUT: 10000, 
  RETRY_ATTEMPTS: 3,
};

export default API_CONFIG;
