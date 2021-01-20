import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native'

const OrderDelivery = ({route}) => {

    // const renderMap = () => {
        
    // }
    const [res, setRes] = useState([]);
    useEffect(() => {
        setRes(route.params.resturant)
    },[])
    console.log("route...",res);
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
                    // keyExtractor={item => 1  }
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
                    }}>Currentlt, We are providing COD only. Within 30 min we will reach your address</Text>
            </View>
        </View>
    )
}

export default OrderDelivery;