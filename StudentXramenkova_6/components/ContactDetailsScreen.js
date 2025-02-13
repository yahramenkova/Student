import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactDetailsScreen = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9F9F9', alignItems: 'center' },
  detailCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  phone: { fontSize: 18, color: '#666', marginTop: 10 },
  backButton: {
    marginTop: 20,
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  backButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
