import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { colors } from '../constants/colors'

import Like from "../assets/images/like.svg"
import Menu from "../assets/images/menu.svg"

import { Images } from '../assets/RecImages'




const ListItem = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.mainItemView}>
                <Image source={Images[`${item.image}`]} style={styles.img} />
                <View style={styles.tag}>
                    <Text style={styles.tagText}> {item.tagText} </Text>
                </View>

                <View style={styles.iconsGrp}>
                    <TouchableOpacity>
                        <Like width={16} height={16} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Menu width={16} height={16} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.ratingView}>
                    <View style={styles.ratingBtn}>
                        <Text style={styles.ratingText}> {item.rating} </Text>
                    </View>

                    <View style={styles.ratingtextWrapper}>
                        <Text style={styles.ratingTextTitle}> {item.ratingText} </Text>
                        <Text style={styles.ratingNo}>({item.ratingsNo} ratings) </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.Wrapper}>
                        <Text style={[styles.titleText, { fontSize: 16 }]}>{item.name}</Text>
                        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                    </View>

                    <View style={[styles.Wrapper]}>
                        <View style={styles.locationTextView}>
                            <Text style={styles.location}>{item.state} . </Text>
                            <Text style={styles.location}>{item.city}</Text>
                        </View>
                        <Text style={styles.NewPrice}>${item.newPrice}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>

    )
}


const Recommendations = ({ listdata }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.titleText}> Recommended for you </Text>
            <Text style={styles.subTitleText}> We recommend these based on your past orders and searches</Text>

            <FlatList
                data={listdata}
                renderItem={ListItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Recommendations

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 100
    },
    titleText: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.title
    },

    subTitleText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.subTitle,
        marginTop: 5,
        marginBottom: 20
    },

    mainItemView: {
        marginRight: 20,
        width: 179,

    },

    tag: {
        width: 86,
        height: 22,
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: "center",

        position: 'absolute',
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8
    },

    tagText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.white
    },

    img: {
        width: 179,
        height: 201,
        borderRadius: 8,
        marginBottom: 10
    },

    ratingView: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    ratingBtn: {
        backgroundColor: colors.primaryColor,
        width: 30,
        height: 17,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ratingText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.white
    },

    ratingtextWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    ratingTextTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.primaryColor
    },

    ratingNo: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.title
    },

    Wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5

    },

    oldPrice: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.subTitle,
        textDecorationLine: 'line-through'
    },

    oldPrice: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.subTitle,
        textDecorationLine: 'line-through'
    },

    NewPrice: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.title,
    },

    locationTextView: {
        flexDirection: 'row',

    },

    location: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.subTitle
    },

    iconsGrp: {
        flexDirection: 'row',
        alignItems: 'center',


        position: 'absolute',
        right: 10,
        top: 10
    }
})
