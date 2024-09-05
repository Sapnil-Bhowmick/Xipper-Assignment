
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors'

import IndiaLogo from "../../assets/images/India.svg"


import auth from '@react-native-firebase/auth';
import { AuthProfile } from '../../context/authContext.js'


const WelcomeScreen = ({ navigation }) => {

    const {setConfirm} = AuthProfile()
    const [phoneno, setphonoNo] = useState('')
    const [countryCode , setCountryCode] = useState('91')
   

    const signInWithPhoneNumber = async () => {

        if (phoneno.length === 10) {
            try {
                const confirmation = await auth().signInWithPhoneNumber("+" + countryCode + phoneno);
                setConfirm(confirmation)
                setphonoNo('')
                navigation.navigate("OTP" , {phone_no: phoneno})
                // console.log('confirmation', confirmation)
            }
            catch (error) {
                console.log('Error Obtained', error)
            }
        }
        
    }




    return (
        <View style={styles.main}>
            <Image source={require("../../assets/Welcome.png")} style={styles.welcome} />

            <View style={styles.phoneView}>
                <Text style={styles.title}>Sign Up or Login</Text>

                <View style={styles.phoneWrapper}>
                    <View style={styles.codeWrapper}>
                        <IndiaLogo width={30} height={30} />
                        <Text style={styles.countryCode}>+{countryCode}</Text>
                    </View>

                    <View style={styles.phoneInp}>
                        <TextInput
                            style={styles.placeholderText}
                            placeholder='Please enter your number'
                            placeholderTextColor={colors.subTitle}
                            inputMode="numeric"
                            value={phoneno}
                            onChangeText={(ph) => setphonoNo(ph)}
                            maxLength={10}
                            cursorColor={"#828d9e"}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={signInWithPhoneNumber} disabled={phoneno.length === 10 ? false : true}>
                    <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>


                <View style={styles.referralWrapper}>
                    <Text style={styles.text1}> Have a </Text>
                    <TouchableOpacity>
                        <Text style={styles.ReferralText}> Referral Code ?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.footer1}>
                    <Text style={styles.footerText}> By continuing you agree to apps </Text>
                    <TouchableOpacity>
                        <Text style={[styles.footerText, { textDecorationLine: 'underline' }]}> Terms of Services </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer2}>
                    <Text style={styles.footerText}> and </Text>
                    <TouchableOpacity>
                        <Text style={[styles.footerText, { textDecorationLine: 'underline' }]}> Privacy Policy </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
    },

    welcome: {
        width: 183,
        height: 103,
        top: 100
    },

    phoneView: {
        top: 250,
        // backgroundColor: 'yellow',
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.white,
        textAlign: 'center',
        marginBottom: 20
    },

    phoneWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    codeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 81,
        height: 41,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },

    phoneInp: {
        backgroundColor: colors.white,
        padding: 5,
        width: 250,
        height: 41,
        borderRadius: 10,
    },


    countryCode: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.title,
        marginLeft: 6
    },

    placeholderText: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10,
        letterSpacing: 0.5
    },

    btn: {
        height: 41,
        borderRadius: 10,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },

    btnText: {
        fontSize: 12,
        color: colors.primaryColor,
        fontWeight: '400'
    },

    referralWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },

    text1: {
        fontSize: 14,
        color: colors.white
    },
    ReferralText: {
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: colors.white
    },

    footer: {
        top: 350
    },

    footer1: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    footer2: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    footerText: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white
    }
})
