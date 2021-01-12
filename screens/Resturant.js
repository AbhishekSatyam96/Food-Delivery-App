import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image, Animated } from 'react-native'
import { COLORS, SIZES, FONTS, icons, dummyData } from '../constants';

const Resturant = ({ route, navigation }) => {

    const [resturant, setResturant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        const { item, currentLocation } = route.params;
        setResturant(item);
        setCurrentLocation(currentLocation)
    }, [])

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{resturant?.name}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
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

    const renderFoodInfo = () => {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
            >
                {resturant?.menu.map((item, index) => (
                    <View
                        key={`menu-${index}`}
                        style={{ alignItems: 'center' }}
                    >
                        <View style={{ height: SIZES.height * 0.35 }}>
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{
                                    width: SIZES.width,
                                    height: '100%'
                                }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: -20,
                                    width: SIZES.width,
                                    height: 50,
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25
                                    }}
                                >
                                    <Text style={{ ...FONTS.body1 }}>-</Text>
                                </TouchableOpacity>
                                <View style={{
                                    width: 50,
                                    backgroundColor: COLORS.white,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{ ...FONTS.h2 }}>5</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25
                                    }}
                                >
                                    <Text style={{ ...FONTS.body1 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Resturant;