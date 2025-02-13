import React, { useRef, useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const { width } = Dimensions.get('window');

export default function App() {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработчик скролла
  const handleScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(pageIndex);
  };

  // Функция для перехода на страницу по индексу
  const goToPage = (pageIndex) => {
    scrollViewRef.current.scrollTo({ x: width * pageIndex, animated: true });
    setCurrentIndex(pageIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
        style={styles.scrollView}
      >
        <PageOne />
        <PageTwo />
      </ScrollView>

      {/* Точки для переключения */}
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => goToPage(0)} style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
        <TouchableOpacity onPress={() => goToPage(1)} style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollView: { flex: 1 },
  pagination: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#ccc', marginHorizontal: 5 },
  activeDot: { backgroundColor: '#FFC107', width: 12, height: 12 },
});
