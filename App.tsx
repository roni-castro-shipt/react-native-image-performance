import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Button, View} from 'react-native';

function App() {
  const [showImage, setShowImage] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={showImage ? 'Hide Image' : 'Show Image'}
          onPress={() => setShowImage(!showImage)}
        />
      </View>
      {showImage && (
        <Image
          // resizeMethod="resize" // this solves the issue on Android
          style={styles.image}
          source={{
            uri: 'https://roniccastro.s3.us-east-1.amazonaws.com/crash.jpg',
          }}
          onError={console.log}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default App;
