import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/login/login"
import Account from "../screens/account/account"
const Stack = createNativeStackNavigator();
function RoutesUnauth() {
    return <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Account" component={Account}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
}
export default RoutesUnauth