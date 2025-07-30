import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

export default function App() {
  console.log("App executed!");

  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,

    }}>
      <Card
        title="Red jacket for sale" 
        subTitle="£79" 
        image={require('./app/assets/jacket.jpg')}
      />

    </View>
  );
}

