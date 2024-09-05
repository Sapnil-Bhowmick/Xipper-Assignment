import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { colors } from '../constants/colors'

import { Images } from '../assets/catImages/Index'

const Categories = ({ listdata }) => {

    return (
        <View style={styles.main}>
            <View style={styles.titlewrapper}>
                <Text style={styles.titleText}> Top Categories </Text>
                <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                    <Text style={styles.btnText}> See all </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 , marginTop: 20}}>
                {
                    listdata.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} style={styles.categoryItem} activeOpacity={0.5}>
                                <View style={styles.imgContainer}>
                                    <View style={styles.imgView}>
                                        <Image source={Images[`${item.image}`]} style={styles.img} resizeMode="cover" />
                                    </View>
                                </View>
                                <Text style={styles.title}> {item.title} {item.image} </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


export default Categories






const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 10,
        marginTop: 20
    },

    titlewrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    titleText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.title
    },

    btn: {
        backgroundColor: colors.primaryColor,
        width: 83,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.white
    },

    categoryItem: {
        alignItems: 'center'
    },

    imgContainer: {
        position: 'relative',
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        elevation: 10,
        marginBottom: 15
    },

    img: {
        width: '100%',
        height: '100%',
    },

    title: {
        fontSize: 15,
        fontWeight: '400'
    }
})
