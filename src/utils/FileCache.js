import * as FileSystem from 'expo-file-system';

export const cacheImage = async (uri) => {
  const fileName = uri.split('/').pop();
  const localUri = `${FileSystem.documentDirectory}${fileName}`;
  await FileSystem.downloadAsync(uri, localUri);
  return localUri;
};
