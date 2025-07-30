import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  console.log("App executed!");

  return (
    <WelcomeScreen />
  );
}

