
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const OrderScreen = () => {
  return (
    <View style={styles.main}>
        <Text> Order Screen </Text>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
