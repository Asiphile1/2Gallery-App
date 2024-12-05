import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ImageGallery from "../components/ImageGallery";
import { fetchImages } from "../database/database";

export default function HomeScreen({ navigation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  const handleImageSelect = (image) => {
    navigation.navigate("ImageDetails", { image });
  };

  return (
    <View style={styles.container}>
      <ImageGallery images={images} onSelectImage={handleImageSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
