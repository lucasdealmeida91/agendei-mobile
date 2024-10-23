
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Schedule from "../screens/schedule/schedule.jsx";
import { COLORS } from "../constants/theme.js";
const Stack = createNativeStackNavigator();
function RoutesAuth() {
    return <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Services" component={Services}
            options={{ 
                headerTitle: "Serviços",
                 headerTitleAlign: "center",
                 headerShadowVisible: false,
                 headerTintColor: COLORS.white,
                  headerStyle: { backgroundColor: COLORS.blue }}}
        />
        <Stack.Screen name="Schedule" component={Schedule}
          options={{ 
            headerTitle: "Fazer uma reserva",
             headerTitleAlign: "center",
             headerShadowVisible: false,
             headerTintColor: COLORS.blue,
              }}
        />
    </Stack.Navigator>
}
export default RoutesAuth