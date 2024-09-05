
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'


import { categoryData, recommendationData } from '../../constants/data'

import Categories from '../../components/categories'
import Recommendations from '../../components/recommendations'
import { colors } from '../../constants/colors'






const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Categories listdata={categoryData} />
        <Recommendations listdata={recommendationData} />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.bgColor,
  }
})
