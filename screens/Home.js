import React from 'react';
import {COLORS, images, SIZES, FONTS, icons} from '../constants';
import {
    View, StyleSheet, SafeAreaView, TouchableOpacity, Image
} from 'react-native'

const Home = () => {
    const renderHeader = () => {
        return(
            <View style={{flexDirection: 'row', height: 50}}>
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
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
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