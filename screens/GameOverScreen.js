import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";
import Colors from "../constants/color";
import MainButton from './../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <View style={styles.imageContainer}>
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
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  }
});

export default GameOverScreen;
