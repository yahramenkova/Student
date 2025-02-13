import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AddContactScreen = ({ route, navigation }) => {
  const { setContacts, contacts } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { id: String(contacts.length + 1), name, phone }]);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Имя" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Телефон" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <TouchableOpacity style={styles.saveButton} onPress={addContact}>
        <Text style={styles.saveButtonText}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9F9F9' },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  saveButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
