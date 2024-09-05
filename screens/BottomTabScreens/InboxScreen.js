
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InboxScreen = () => {
  return (
    <View style={styles.main}>
        <Text> Inbox Screen </Text>
    </View>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
