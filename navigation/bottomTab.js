import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import AccountScreen from '../screens/BottomTabScreens/AccountScreen';
import OrderScreen from '../screens/BottomTabScreens/OrderScreen';
import InboxScreen from '../screens/BottomTabScreens/InboxScreen';

import { colors } from '../constants/colors';

import HomeIcon from "../assets/images/home.svg"
import Order from "../assets/images/orders.svg"
import Inbox from "../assets/images/inbox.svg"
import Account from "../assets/images/account.svg"
import Location from "../assets/images/location.svg"
import BSymbol from "../assets/images/bsymbol.svg"
import Notification from "../assets/images/notification.svg"
import Search from "../assets/images/search.svg"

import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CurrentLocation from '../services/locationService';


const Tab = createBottomTabNavigator();



const BottomTabLayout = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={
            ({ navigation }) => {
                return {
                    headerTitle: "",
                    tabBarStyle: styles.tabBarStyle,


                    tabBarLabelStyle: styles.tabBarLabelStyle,

                    tabBarActiveTintColor: colors.primaryColor,
                    tabBarInactiveTintColor: colors.subTitle,
                    tabBarHideOnKeyboard: true
                }
            }
        }>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => <HomeIcon width={30} height={30} color={focused ? colors.primaryColor : colors.subTitle} />,

                headerStyle: styles.headerStyle,

                headerLeft: () => {

                    return (
                        <View style={styles.headerContainer}>
                            <View style={styles.headerMainLocation}>
                                <View style={styles.locationContainer}>
                                    <View style={styles.locationWrapper}>
                                        <Location width={24} height={24} color={colors.white} />
                                        <CurrentLocation customStyle={styles.locationText} />
                                    </View>
                                    <CurrentLocation customStyle={styles.locationSubText} />
                                </View>

                                <View style={styles.iconsContainer}>
                                    <TouchableOpacity>
                                        <BSymbol height={28} width={28} color={colors.white} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Notification height={28} width={28} color={colors.white} style={styles.notification} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.searchContainer}>
                                <View style={styles.searchWrapper}>
                                    <Search width={24} height={24} color={colors.subTitle} />
                                    <TextInput placeholder="Search for 'Hotels'" placeholderTextColor={colors.subTitle} style={styles.placeholder} />
                                </View>
                                <TouchableOpacity>
                                    <Image source={require("../assets/images/Mic.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }

            }} />
            <Tab.Screen name="Orders" component={OrderScreen} options={{
                tabBarIcon: ({ focused }) => <Order width={30} height={30} color={focused ? colors.primaryColor : colors.subTitle} />
            }} />
            <Tab.Screen name="Inbox" component={InboxScreen} options={{
                tabBarIcon: ({ focused }) => <Inbox width={30} height={30} color={focused ? colors.primaryColor : colors.subTitle} />
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon: ({ focused }) => <Account width={30} height={30} color={focused ? colors.primaryColor : colors.subTitle} />
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabLayout;


const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: colors.white,
        height: 76,
        position: 'absolute',
        paddingBottom: 10,

        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 10,
    },

    tabBarLabelStyle: {
        marginTop: -20,
        fontSize: 12,
        fontWeight: '400'
    },

    headerStyle: {
        height: 244,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        elevation: 10,
        backgroundColor: colors.primaryColor,

        shadowColor: 'black',


    },

    headerContainer: {
        padding: 20,
    },

    headerMainLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.9,
    },


    locationContainer: {
        // backgroundColor: 'red',
        width: 220,
        textAlign: 'left'
    },

    locationWrapper: {
        flexDirection: 'row',
        width: 220,
        // backgroundColor:'green'
    },

    locationText: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.white,
    },

    locationSubText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.white,
        marginTop: 3
    },

    iconsContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },

    notification: {
        marginLeft: 10
    },



    searchContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 15,
        height: 52,
        marginTop: 30
    },

    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    placeholder: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10
    }
})