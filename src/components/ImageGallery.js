import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ImageGallery({ images, onSelectImage }) {
  return (
    <View style={styles.container}>
      {images.map((image) => (
        <TouchableOpacity key={image.id} onPress={() => onSelectImage(image)}>
          <Image source={{ uri: image.filePath }} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "48%",
    height: 150,
    marginBottom: 10,
  },
});
