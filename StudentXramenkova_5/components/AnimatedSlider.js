import React, { useRef } from 'react';
import { View, Text, FlatList, Animated, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  { id: '1', title: 'Image - 1', src: 'https://i.pinimg.com/474x/b0/04/37/b0043785cb16e19f2f478283f0bf725e.jpg' },
  { id: '2', title: 'Image - 2', src: 'https://i.pinimg.com/474x/64/74/fd/6474fd16395c5cd31bbda70d2bd0a6a2.jpg' },
  { id: '3', title: 'Image - 3', src: 'https://i.pinimg.com/474x/c6/7c/d9/c67cd92f3d4fb848755abce9ca6175c6.jpg' },
  { id: '4', title: 'Image - 4', src: 'https://i.pinimg.com/474x/52/4e/88/524e88b708c8925fe4ea5b5416939cc6.jpg' },
];

export default function AnimatedSlider() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Animated.Image source={{ uri: item.src }} style={[styles.image, { transform: [{ scale: scaleAnim }] }]} />
            <Animated.Text style={[styles.imageTitle, { opacity: scaleAnim }]}>{item.title}</Animated.Text>
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Нажми на меня</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return <Animated.View key={index} style={[styles.dot, { opacity }]} 
          />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.8,
    height: 200,
    borderRadius: 10,
  },
  imageTitle: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff',
    padding: 8,
    borderRadius: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6200ea',
    marginHorizontal: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
