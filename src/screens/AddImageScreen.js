import * as ImageManipulator from "expo-image-manipulator";

const editImage = async (uri) => {
  const editedImage = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 800 } }],
    { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
  );
  setImage(editedImage.uri);
};
