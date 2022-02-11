import React, { Component } from 'react';
import { Alert, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Player from '../components/PlayerView';
import { bao, bg, bua, keo, player, bot } from '../GameApp/assets'
import PlayerSelectItem from '../components/PlayerSelect/index';
import Btn from '../components/button';


class GameApp extends Component {
     Arr = [keo,bua,bao]
     state = {
         selectType : keo,
         botType : bao,
         score : 0,
         times : 10
     }

     handleChangeType = (type) => {
         this.setState({
             selectType : type
         })
     }
     resultGame = (botType, playerType) => {
         let bot = botType
         let player = playerType
        if (bot === keo) {
            if (player === keo){
                alert('Hoa')
            }else if (player === bao){
                alert('thua')
                this.setState({
                    score : this.state.score - 1,
                    times : this.state.times -1
                })
            }else {
                alert('thang')
                this.setState({
                    score : this.state.score + 1
                })
            }    
     }else if (bot === bua) {
         if (player ===bua){
            alert('Hoa')
         }else if (player === bao){
            alert('Thua')
            this.setState({
                score : this.state.score - 1,
                times : this.state.times -1
            })
         }else {
            alert('thang')
            this.setState({
                score : this.state.score + 1
            })
         }
     }else {
         if (player === bao) {
            alert('Hoa')
         }else if (player === bua){
            alert('Thua')
            this.setState({
                score : this.state.score - 1,
                times : this.state.times -1
            })
         }else {
            alert('Thang')
            this.setState({
                score : this.state.score + 1
            })
         }
     }
    }
     randomType = () => {
          let a = Math.floor(Math.random() * 3)
          this.setState({
              botType : this.Arr[a]
          }, () => this.resultGame(this.state.botType,this.state.selectType))
     }
     handlePlay = () => {
         this.randomType()

     }

     handleReset = () => {
         this.setState({
             score : 0,
             times : 10
         })
     }
    render() {
        
        return (
            <ImageBackground source={bg} style={styles.container} >
                <View style={styles.overlay}>
                    <StatusBar barStyle='light-content' />
                    <SafeAreaView style={styles.appContent}>
                        <View style={styles.playerView}>
                            <Player ResultSrc={this.state.selectType}  PlayerSrc={player}/>
                            <Player ResultSrc={this.state.botType} PlayerSrc={bot}/>
                        </View>
                        <View style={styles.selectView}>        
                            {
                                this.Arr.map((img, index) => <PlayerSelectItem SelectImg={img} 
                                key={index} handleChangeType={this.handleChangeType}/>)
                            }
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.infoText}>
                                Score: {this.state.score}
                            </Text>
                            <Text style={styles.infoText}>Times: {this.state.times}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Btn Title = "Play" bgColor = "pink" handleCLickBtn={this.handlePlay}/>
                            <Btn Title = "Reset" bgColor = "yellow" handleCLickBtn={this.handleReset}/>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    appContent: {
        flex : 1
    },
    playerView: {
        flex: 2,
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 20
    },
    selectView: {
        flex: 0.7,
        flexDirection : 'row',
        justifyContent : 'space-around',
        paddingHorizontal : 40
    },
    infoView: {
        flex: 0.6,
        alignItems : 'center',
    },
    buttonView: {
        flex: 1.4,
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 30
    },
    infoText : {
        color : '#19F7CA',
        fontSize : 30,
        fontWeight : '800'
    }
})
export default GameApp;