import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedSlider from './components/AnimatedSlider';
import LaunchScreen from './components/LaunchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Лаунч-скрин будет виден 3 секунды
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Launch" component={LaunchScreen} />
        ) : (
          <Stack.Screen name="Slider" component={AnimatedSlider} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
