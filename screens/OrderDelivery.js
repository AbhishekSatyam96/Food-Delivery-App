import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native'
import { COLORS, SIZES, FONTS, icons, dummyData } from '../constants';

const OrderDelivery = ({route}) => {

    // const renderMap = () => {
        
    // }
    const [res, setRes] = useState([]);
    useEffect(() => {
        setRes(route.params.resturant)
    },[])

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
                        <Text style={{ ...FONTS.h3 }}>{res?.name}</Text>
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

    const renderItem = ({item, index}) => {
        return(
            <Text
                style={{
                    flex: 1,
                    color: 'green',
                    margin: 10,
                    fontSize: 20
                }}
            >{index + 1}-{item.name}</Text>
        )
    }
    return(
        <View style={{flex: 1}}>
            {/* {renderMap()} */}
            {renderHeader()}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
               <Text
                style={{
                    fontSize: 30,
                    color: 'red',
                }}
               >You are ordering </Text>
               <FlatList
                    data={res.menu}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
                <Text
                    style={{
                        flex: 1,
                        fontSize: 30,
                        color: 'green',
                    }}
                >From {res.name}</Text>
                <Text style={{
                        flex: 1,
                        fontSize: 30,
                        color: 'red',
                    }}>Thanks</Text>
                <Text style={{
                        flex: 1,
                        fontSize: 20,
                        color: 'red',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>Currently, We are providing COD only. Within 30 min we will reach your address</Text>
            </View>
        </View>
    )
}

export default OrderDelivery;