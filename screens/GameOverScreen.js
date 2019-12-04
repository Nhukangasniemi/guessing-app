import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Image, Dimensions, ScrollView } from "react-native";
import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";
import Colors from "../constants/color";
import MainButton from './../components/MainButton';

const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height)
      setAvailableDeviceWidth(Dimensions.get('window').width)
    }
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is over!</TitleText>
        <View style={{
          ...styles.imageContainer, ...{
            width: availableDeviceWidth * 0.7,
            height: availableDeviceWidth * 0.7,
            borderRadius: availableDeviceWidth * 0.7 / 2,
            marginVertical: availableDeviceHeight / 30
          }
        }}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2017/01/03/05/25/bee-1948684_1280.jpg"
            }}
          //   source={require("../assets/success.png")}
          />
        </View>
        <View style={{ ...styles.resultContainer, ...{ marginVertical: availableDeviceHeight / 60 } }}>
          <BodyText style={{ ...styles.resultText, ...{ fontSize: availableDeviceHeight < 400 ? 16 : 20 } }}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <BodyText>Number was: {props.userNumber}</BodyText>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView >

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
  }
});

export default GameOverScreen;
