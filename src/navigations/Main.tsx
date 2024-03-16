import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { StatusBar } from 'react-native';
import COLORS from '../constant/COLOR'
import DetailedScreen from '../screens/DetailScreen';
import { RootStackParamList } from '../../types';
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.background} />
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}