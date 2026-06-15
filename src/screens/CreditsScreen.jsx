import React from "react";
import { useRouter } from "expo-router";
import GradientDesign from "../components/GradientDesign";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreditsScreen = () => {
  const router = useRouter();

  return (
    <GradientDesign>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace("/home")}
          >
            <Ionicons name="arrow-back" size={28} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.headText}>CREDITS</Text>

          <Text style={styles.secondaryText}>App Credits & Attributions</Text>
          <Text style={styles.Text}>
            This application is built with gratitude for the platforms, tools,
            and creative assets that made the AnoUlam experience possible.
          </Text>

          <Text style={styles.secondaryText}>Visual Media & Photography</Text>
          <Text style={styles.Text2}>
            I express my gratitude to the creators and platforms that made the
            app's visual experience possible. Images used throughout this
            application are sourced from:
          </Text>

          <Text style={styles.Text2}>• AI-Generated Assets – Custom illustrations and prompt engineered for unique visual style.</Text>
          <Text style={styles.Text3}>• Pexels – High-quality open-source photography.</Text>
        </View>
      </ScrollView>
    </GradientDesign>
  );
};

export default CreditsScreen;

const styles = StyleSheet.create({
  backButton: {
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#eadede",
    textAlign: "center",
    margin: 20,
  },
  secondaryText: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    color: "#eadede",
    marginTop: 40,
  },
  Text: {
    fontSize: 22,
    textAlign: "justify",
    color: "#000000",
    lineHeight: 35,
    marginBottom: 100,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  Text2: {
    fontSize: 22,
    textAlign: "left",
    color: "#000000",
    lineHeight: 35,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  Text3: {
    fontSize: 22,
    textAlign: "left",
    color: "#000000",
    lineHeight: 35,
    marginBottom: 200,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  }
});