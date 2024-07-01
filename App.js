import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  
  const [selectedImage, setSelectedImage] = useState(null)

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled){
      console.log(result);
      setSelectedImage(result.assets[0].uri)
    }else{
      alert("You did not select any image.")
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}
        <ImageViewer PlaceholderImageSourse={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync}/>
        <Button label={"Use this photo"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
