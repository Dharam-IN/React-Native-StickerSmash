import { Image, StyleSheet} from 'react-native';

export default function ImageViewer({PlaceholderImageSourse, selectedImage}) {

    const imageSourse = selectedImage ? {uri: selectedImage} : PlaceholderImageSourse;

  return (
    <Image source={imageSourse} style={styles.image}/>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
});
