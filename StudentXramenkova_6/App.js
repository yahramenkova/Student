import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from './components/ContactListScreen';
import ContactDetailsScreen from './components/ContactDetailsScreen';
import AddContactScreen from './components/AddContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactListScreen} options={{ title: 'Контакты' }} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={{ title: 'Детали контакта' }} />
        <Stack.Screen name="AddContact" component={AddContactScreen} options={{ title: 'Добавить контакт' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
