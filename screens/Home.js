import React from 'react';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Text, StyleSheet} from 'react-native'

const Home = () => {
    return(<Text>ddf</Text>)
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