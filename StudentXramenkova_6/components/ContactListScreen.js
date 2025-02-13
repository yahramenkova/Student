import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Иван Иванов', phone: '123-456-789' },
    { id: '2', name: 'Мария Петрова', phone: '987-654-321' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.contactCard} 
            onPress={() => navigation.navigate('ContactDetails', { contact: item })}
            activeOpacity={0.7}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddContact', { setContacts, contacts })}
      >
        <Text style={styles.addButtonText}>+ Добавить контакт</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9F9F9' },
  contactCard: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  phone: { fontSize: 16, color: '#666' },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
