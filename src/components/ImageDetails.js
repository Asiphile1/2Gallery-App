import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ImageDetails({ route }) {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.filePath }} style={styles.image} />
      <Text style={styles.text}>Location: {image.latitude}, {image.longitude}</Text>
      <Text style={styles.text}>Timestamp: {image.timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
