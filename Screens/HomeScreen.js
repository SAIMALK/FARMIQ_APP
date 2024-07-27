import React from "react";
import { ScrollView, View, Button, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ExpertAdvice from "../Components/ExpertAdvice";
import PlantationGrid from "../Components/PlantationGrid";
import Icons from "../Components/Icons";
import Cards from "../Components/Cards"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <ScrollView style={styles.scrollContainer}>
        <Offers />
        <Icons />
        {/* <ExpertAdvice /> */}
        <Cards/>
        <View style={styles.buttonContainer}>
          <Button
            title="View All"
            onPress={() => navigation.navigate("AllCrops")}
            color="#000" // Optional: You can set a custom color
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flex: 1,
  },
  buttonContainer: {
    margin: 10,
  },
});

export default HomeScreen;
