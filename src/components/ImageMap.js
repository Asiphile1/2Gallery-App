import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default function ImageMap({ images }) {
  return (
    <MapView style={styles.map}>
      {images.map((image) => (
        <Marker
          key={image.id}
          coordinate={{ latitude: image.latitude, longitude: image.longitude }}
          title={image.timestamp}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
