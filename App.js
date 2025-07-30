import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  console.log("App executed!");

  return (
    <ListingDetailsScreen />
  );
}

