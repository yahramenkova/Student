import React from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function PageTwo() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Stay informed</Text>

      {/* Картинка в круге */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/pic2.jpg')} style={styles.image} />
      </View>

      <Text style={styles.text}>
        Yandex.Flights will inform you via push notifications if your flight is delayed or canceled.
      </Text>
      <Button title="Got it, thanks" color="#FFC107" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { width: width, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 20 },

  // Картинка в круге
  imageContainer: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 60,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
     borderWidth: 3, // Толщина рамки
    borderColor: '#FFA500', 
  },
   image: {
    width: 120,
    height: 120,
    resizeMode: 'cover', // Заполняет весь круг
  },
});
