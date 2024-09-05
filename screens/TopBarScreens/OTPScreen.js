
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors'

import { AuthProfile } from '../../context/authContext'






const OTPScreen = ({ route, navigation }) => {


  const { confirm } = AuthProfile()

  const { phone_no } = route.params

  const inpRef_1 = useRef()
  const inpRef_2 = useRef()
  const inpRef_3 = useRef()
  const inpRef_4 = useRef()
  const inpRef_5 = useRef()
  const inpRef_6 = useRef()

  const [inp_1, setInp_1] = useState('')
  const [inp_2, setInp_2] = useState('')
  const [inp_3, setInp_3] = useState('')
  const [inp_4, setInp_4] = useState('')
  const [inp_5, setInp_5] = useState('')
  const [inp_6, setInp_6] = useState('')

  const [count, setCount] = useState(30)

  const verifyOTP = async (myotp) => {
    try {
      const res = await confirm.confirm(myotp);
      // console.log('Response in OTP Login', res)
      return res
    } catch (error) {
      // console.log('Invalid code.');
      return null
    }
  }


  const OTPValidationHandler = async () => {
    let OTP = inp_1 + inp_2 + inp_3 + inp_4 + inp_5 + inp_6
    console.log(OTP)
    const res = await verifyOTP(OTP)
    if (res !== null) {
      setInp_1('')
      setInp_2('')
      setInp_3('')
      setInp_4('')
      setInp_5('')
      setInp_6('')
      navigation.navigate("HomePage")
    }

    // **  Condition here
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval)
      }
      else {
        setCount((prev) => prev - 1)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count])






  return (
    <View style={styles.main}>
      <View style={styles.otpTextWrapper}>
        <Text style={styles.OTPText}>Verify OTP</Text>
        <Text style={styles.OTPSubtext}>Please enter OTP received at your mobile number {phone_no[0] + "******" + phone_no.slice(-3)}</Text>

        <View style={styles.OTPView}>
          <TextInput ref={inpRef_1} cursorColor={"blue"} style={[styles.OtpInput, { borderColor: inp_1.length === 1 ? colors.title : colors.OtpInactive }]} inputMode="numeric" maxLength={1} value={inp_1} onChangeText={(text) => {
            setInp_1(text)
            if (text.length === 1) { inpRef_2.current.focus() }
          }}
          />
          <TextInput ref={inpRef_2} cursorColor={"blue"} style={[styles.OtpInput, { borderColor: inp_2.length === 1 ? colors.title : colors.OtpInactive }]} inputMode="numeric" maxLength={1} value={inp_2} onChangeText={(text) => {
            setInp_2(text)
            if (text.length === 1) inpRef_3.current.focus()
            else if (text.length === 0) inpRef_1.current.focus()
          }} />
          <TextInput ref={inpRef_3} cursorColor={"blue"} style={[styles.OtpInput, { borderColor: inp_3.length === 1 ? colors.title : colors.OtpInactive }]} inputMode="numeric" maxLength={1} value={inp_3} onChangeText={(text) => {
            setInp_3(text)
            if (text.length === 1) inpRef_4.current.focus()
            else if (text.length === 0) inpRef_2.current.focus()
          }} />
          <TextInput ref={inpRef_4} cursorColor={"blue"} style={[styles.OtpInput, { borderColor: inp_4.length === 1 ? colors.title : colors.OtpInactive }]} inputMode="numeric" maxLength={1} value={inp_4} onChangeText={(text) => {
            setInp_4(text)
            if (text.length === 1) inpRef_5.current.focus()
            else if (text.length === 0) inpRef_3.current.focus()
          }} />
          <TextInput ref={inpRef_5} cursorColor={"blue"} style={[styles.OtpInput, { borderColor: inp_5.length === 1 ? colors.title : colors.OtpInactive }]} inputMode="numeric" maxLength={1} value={inp_5} onChangeText={(text) => {
            setInp_5(text)
            if (text.length === 1) inpRef_6.current.focus()
            else if (text.length === 0) inpRef_4.current.focus()
          }} />
          <TextInput ref={inpRef_6} cursorColor={"blue"} style={[styles.OtpInput, { borderColor: inp_6.length === 1 ? colors.title : colors.OtpInactive }]} inputMode="numeric" maxLength={1} value={inp_6} onChangeText={(text) => {
            setInp_6(text)
            if (text.length === 1) inpRef_6.current.focus()
            else if (text.length === 0) inpRef_5.current.focus()
          }} />
        </View>

        <View style={styles.autofetchWrapper}>
          <Text style={styles.fetchText}>Auto fetching</Text>
          <Text style={styles.fetchText}>{count}s</Text>
        </View>
      </View>

      <View style={styles.resendSubmitContainer}>
        <Text style={styles.receiveText}>Didn't receive an OTP</Text>
        <TouchableOpacity
          onPress={() => setCount(30)}
          disabled={count === 0 ? false : true}>
          <Text style={[styles.resendText, { color: count === 0 ? colors.primaryColor : "#bc96fa" }]}>Resend OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={OTPValidationHandler}
          style={[styles.submitBtn, {
            backgroundColor:
              inp_1 !== '' && inp_2 !== '' && inp_3 !== '' && inp_4 !== '' && inp_5 !== '' && inp_6 !== '' ? colors.primaryColor : "#bc96fa"
          }]}
          activeOpacity={0.6}
          disabled={inp_1 !== '' && inp_2 !== '' && inp_3 !== '' && inp_4 !== '' && inp_5 !== '' && inp_6 !== '' ? false : true}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 24
  },

  otpTextWrapper: {
    top: 100
  },

  OTPText: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.title,
    marginBottom: 10
  },

  OTPSubtext: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.subTitle,
    lineHeight: 22,
    marginBottom: 25
  },

  OTPView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20
  },

  OtpInput: {
    width: 42,
    height: 48,
    borderWidth: 1,
    color: colors.subTitle,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '400',
    color: colors.title,
  },

  autofetchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fetchText: {
    fontSize: 16,
    color: colors.subTitle,
    fontWeight: '500'
  },

  resendSubmitContainer: {
    top: 250,
    alignItems: 'center'
  },

  receiveText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.title,
    marginBottom: 5
  },

  resendText: {
    fontSize: 16,
    fontWeight: '500',
    // color: colors.primaryColor,
    textDecorationLine: 'underline',
  },

  submitBtn: {
    width: 283,
    height: 44,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },

  submitText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  }
})
