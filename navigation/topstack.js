import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/TopBarScreens/WelcomeScreen.js';
import OTPScreen from '../screens/TopBarScreens/OTPScreen.js';

import BottomTabLayout from "./bottomTab.js"

const Stack = createNativeStackNavigator();

const TopBarLayout = () => {
    return (
        <Stack.Navigator screenOptions={
            () => {
                return {
                    headerTransparent: true,
                    headerTitle: ""
                }
            }
        }>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} options={{}} />
            <Stack.Screen name="HomePage" component={BottomTabLayout} options={{
                headerBackVisible: false
            }}/>
        </Stack.Navigator>
    )
}

export default TopBarLayout