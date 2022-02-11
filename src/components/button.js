import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Btn extends Component {
    render() {
        const {Title, bgColor , handleCLickBtn} = this.props
        const clickBtn = () => {
            handleCLickBtn()
        }
        return (
            <TouchableOpacity onPress={() =>clickBtn()}>
                <View style={[styles.btnContainer, {backgroundColor : bgColor}]}>
                    <Text style={styles.btnText}>{Title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer : {
        height : 60,
        width : 160,
        borderRadius : 8,
        justifyContent : 'center',
        alignItems : 'center'
    },
    btnText : {
        fontSize : 30,
        fontWeight : 'bold',
        color : 'white'
    }
})
export default Btn;