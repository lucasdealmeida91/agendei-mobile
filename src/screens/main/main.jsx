import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";
import icon from "../../constants/icon";
import { Image, Text } from "react-native";

const Tab = createBottomTabNavigator();

function Main() {
    return <>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={
                {
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{ width: 125, height: 29 }} />
                    },
                    tabBarShowLabel: false,
                    unmountOnBlur: true,

                    tabBarIcon: ({ focused }) => {
                        return <Image source={icon.home} style={{
                            width: 25, height: 25,
                            opacity: focused ? 1 : 0.5
                        }} />
                    }
                }
            } />
            <Tab.Screen name="Calendar" component={Calendar}
                options={
                    {
                        headerTitleAlign: "center",
                        headerTitle: () => {
                            return <Text>Minhas Reservas</Text>
                        },
                        tabBarShowLabel: false,
                        unmountOnBlur: true,
                        tabBarIcon: ({ focused }) => {
                            return <Image source={icon.calendar} style={{
                                width: 25, height: 25,
                                opacity: focused ? 1 : 0.5
                            }} />
                        }
                    }
                } />
            <Tab.Screen name="Profile" component={Profile} options={
                {
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{ width: 125, height: 29 }} />
                    },
                    tabBarShowLabel: false,
                    unmountOnBlur: true,

                    tabBarIcon: ({ focused }) => {
                        return <Image source={icon.profile} style={{
                            width: 25, height: 25,
                            opacity: focused ? 1 : 0.5
                        }} />
                    }
                }
            } />
        </Tab.Navigator>
        </>
 
}

export default Main