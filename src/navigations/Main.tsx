import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { StatusBar } from 'react-native';
import COLORS from '../constant/COLOR'
const Stack = createNativeStackNavigator()
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.background} />
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}