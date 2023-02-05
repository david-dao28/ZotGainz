import * as SecureStore from 'expo-secure-store';

export const updateBox = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value)
  } catch (e) {
    console.log(e)
  }
}

export const getBoxColor = async (key) => {
  try {
    const result = await SecureStore.getItemAsync(key);
    return result;
  } catch (e) {
    console.log(e)
  }
}
