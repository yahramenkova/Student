import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookCard() {
  return (
    <View style={styles.container}>
      {/* Верхний блок с заголовком */}
      <View style={styles.header}>
        <Text style={styles.title}>5 книжных новинок октября</Text>
      </View>
<View style={styles.subtitleContainer}>
  <Text style={styles.subtitle}>
          «Кадиш.com» Натан Ингландер. Издательство «Книжники»
        </Text>
</View>
      {/* Нижний блок с описанием на сером фоне */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, 
          репортаж британской журналистки о будущем человечества, дебютный роман Оушена 
          Вуонга и журналистское расследование о создании «Моссада». В нашей подборке 
          рассказываем о пяти замечательных книжных новинках, которые достойны того, 
          чтобы появиться на ваших полках.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    padding: 0,
    marginTop:0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitleContainer:{
    backgroundColor: '#DCDCDC',
    marginTop: 15,
    width:'100%',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    marginTop:15,
  },
  descriptionContainer: {
    width: '100%',
    backgroundColor: '#A9A9A9',
    padding: 15,
    height:'100%',
    alignSelf: 'center',
    
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
