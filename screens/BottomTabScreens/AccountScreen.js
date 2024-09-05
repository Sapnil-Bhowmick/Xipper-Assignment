
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AccountScreen = () => {
  return (
    <View style={styles.main}>
        <Text> Account Screen </Text>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
