import React, { useState } from 'react';
import { COLORS, SIZES, FONTS, icons, dummyData } from '../constants';
import {
    View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Text, FlatList
} from 'react-native'


const Home = ({navigation}) => {

    const { initialCurrentLocation, categoryData, restaurantData } = dummyData;

    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(restaurantData);

    const onSelectCategory = (category) => {
        const resturantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(resturantList);
        setSelectedCategory(category)

    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30, height: 30
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1, alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        // paddingLeft: SIZES.padding,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderMainCategories = () => {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id === item.id) ? COLORS.primary : COLORS.secondary,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: (selectedCategory?.id === item.id) ? COLORS.white : COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <Text style={{
                        marginTop: SIZES.padding,
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        ...FONTS.body5
                    }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View
                style={{
                    padding: SIZES.padding * 2
                }}
            >
                <Text style={{
                    justifyContent: 'center', alignItems: 'center', paddingLeft: SIZES.padding * 3, ...FONTS.h2
                }}>Satyam Food Delivery App</Text>
                {/* <Text style={{ ...FONTS.h1 }}>Delivery App</Text> */}
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    const renderResturantList = () => {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginBottom: SIZES.padding * 2
                }}
                onPress={() => navigation.navigate("Resturant", {
                    item,
                    currentLocation
                })}
            >
                <View
                    style={{ marginBottom: SIZES.padding * 2 }}
                >
                    <Image
                        source={item.photo}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
                <View
                    style={{ flexDirection: 'row', marginTop: SIZES.padding }}
                >
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            marginRight: 10,
                            tintColor: COLORS.primary
                        }}
                    />
                    <Text style={{
                        ...FONTS.body3
                    }}>{item.rating}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >#</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderResturantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})

export default Home;