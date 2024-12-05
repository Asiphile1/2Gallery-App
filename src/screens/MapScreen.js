import ClusteredMapView from "react-native-maps-super-cluster";

export default function MapScreen() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  const mapData = images.map((image) => ({
    location: { latitude: image.latitude, longitude: image.longitude },
    title: image.timestamp,
  }));

  return (
    <ClusteredMapView
      style={{ flex: 1 }}
      data={mapData}
      renderMarker={(item) => (
        <Marker coordinate={item.location} title={item.title} />
      )}
    />
  );
}
