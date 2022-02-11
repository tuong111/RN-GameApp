import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

class PlayerSelectItem extends Component {
    render() {
        const { SelectImg , handleChangeType} = this.props
        const selectType = (e) => {
            handleChangeType(e)
        }
        return (
            <TouchableOpacity onPress={() => selectType(SelectImg)}>
                <View style={styles.imgContainer}>
                    <Image source={SelectImg} style={styles.img} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imgContainer: {
        width: 77,
        height: 77,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderColor: '#c0bf2c',
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 52,
        height: 52,
    }
})
export default PlayerSelectItem;