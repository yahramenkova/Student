import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default function LaunchScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Начальная прозрачность

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // 2 секунды
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Добро пожаловать!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ea',
  },
  text: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
