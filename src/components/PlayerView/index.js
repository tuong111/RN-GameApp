import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

class Player extends Component {


    render() {
        const { ResultSrc, PlayerSrc } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.imgContainer}>
                        <Image source={ResultSrc} style={styles.img} />
                    </View>
                    <View style={styles.triangle}></View>

                        <Image source={PlayerSrc} style={styles.Playerimg} />


                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {

    },
    content: {
        alignItems: 'center'
    },
    imgContainer : {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderColor: '#c0bf2c',
        borderWidth: 2,
        borderRadius: 10,
        padding : 5
    }
    ,
    img: {
        width: 100,
        height: 100,
    },
    Playerimg: {
        width: 100,
        height: 100
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 15,
        marginBottom: 5,
        borderRightColor: 'transparent',
        borderTopColor: '#c0bf2c',
        borderLeftColor: 'transparent',
    }
})
export default Player;