import React from "react";
import { useRouter } from "expo-router";
import GradientDesign from "../components/GradientDesign";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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

          <Text style={styles.TextTwo}>
            • AI-Generated Assets – Custom illustrations and prompt engineered
            for unique visual style.
          </Text>
          <Text style={styles.TextTwo}>
            • Pexels – High-quality open-source photography.
          </Text>

          <Text style={styles.secondaryText}>Technology & Development</Text>
          <Text style={styles.Text2}>
            AnoUlam was developed using the following technologies and
            open-source tools:
          </Text>

          <Text style={styles.TextTwo}>• React Native</Text>
          <Text style={styles.TextTwo}>• Expo</Text>
          <Text style={styles.TextTwo}>• Spring Boot</Text>
          <Text style={styles.TextTwo}>• Java</Text>
          <Text style={styles.TextTwo}>• MySQL</Text>
          <Text style={styles.Text}>• Aiven.</Text>

          <Text style={styles.secondaryText}>Special Thanks</Text>
          <Text style={styles.Text3}>
            To my family, especially my mother, whose daily cooking challenges
            inspired the idea behind AnoUlam and motivated the creation of this
            application.
          </Text>
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
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  headText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#eadede",
    textAlign: "center",
    marginBottom: 40,
  },
  secondaryText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#eadede",
    marginTop: 80,
    marginBottom: 20,
  },
  Text: {
    fontSize: 16,
    textAlign: "justify",
    color: "#000000",
    lineHeight: 28,
    marginBottom: 60,
  },
  Text2: {
    fontSize: 16,
    textAlign: "justify",
    color: "#000000",
    lineHeight: 28,
    marginBottom: 15,
  },
  TextTwo: {
    fontSize: 16,
    textAlign: "left",
    color: "#000000",
    lineHeight: 28,
    marginBottom: 10,
  },
  Text3: {
    fontSize: 16,
    textAlign: "justify",
    color: "#000000",
    lineHeight: 28,
    marginBottom: 60,
  },
});
