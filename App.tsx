import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { RegisterWait } from './src/screens/RegisterWait';
import { Main } from './src/screens/Main';
import { CreateSchedule } from './src/screens/CreateSchedule';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(80, 150, 205)',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>

          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterWait" component={RegisterWait} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="CreateSchedule" component={CreateSchedule} />
          </Stack.Navigator>
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}