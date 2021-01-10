import React, { useState } from 'react';
import {
    Button, Text, View, Alert, StyleSheet, ActivityIndicator, Image, ImageBackground, Modal, StatusBar,
    TextInput, TouchableOpacity, Platform, SafeAreaView, ScrollView
} from 'react-native';

const First = ({ navigation }) => {
    // const { isModal, setModal } = useState(false);
    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={styles.titleText}>First Component!!!</Text>
                    <Text>Here...</Text>
                    <Button title="Open modal"
                        onPress={() =>
                            // console.log("plateform",Platform.OS)
                            navigation.navigate('Home')
                            // console.log("props here...",props)
                        }
                    />
                    {/* <ActivityIndicator size="large" color="blue"/> */}
                    <Image
                        style={styles.mainImage}
                        source={{
                            uri: 'https://cdn.neo91.com/e67b9c7117b44be9a863303435449f9e.png'
                        }}
                    />
                    <ImageBackground style={styles.backImgae}
                        source={{ uri: 'https://cdn.neo91.com/e67b9c7117b44be9a863303435449f9e.png' }}
                    ><Text style={styles.titleText}>I am above Image</Text></ImageBackground>
                    {/* <Modal
                visible={isModal}
                style={{flex: 1,
                    justifyContent: "center",
                    alignItems: "center"}}
                animationType="slide"
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModal(false)
                  }}
            >
                <Text>I am inside modal</Text>
            </Modal> */}
                    {/* <StatusBar hidden/> */}
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(e) => console.log(e)}
                    />
                    <TouchableOpacity
                        style={styles.buttonLayout}
                    // onPress={onPress}
                    ><Text>Press here</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    titleText: {
        color: 'green',
        // backgroundColor: 'yellow'
    },
    mainImage: {
        width: 500,
        height: 200,
        resizeMode: 'cover'
    },
    backImgae: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    buttonLayout: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
})

export default First;