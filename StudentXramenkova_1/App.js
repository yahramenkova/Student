import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import HelloWorld from './components/HelloWorld';

export default function App() {
  return (
    <SafeAreaView >
      <Card>
        <HelloWorld />
      </Card>
    </SafeAreaView>
  );
}

