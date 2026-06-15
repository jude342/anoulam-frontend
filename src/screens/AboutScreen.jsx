import React from "react";
import { useRouter } from "expo-router";
import GradientDesign from "../components/GradientDesign";
import { ScrollView, View, Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AboutScreen = () => {
  const router = useRouter();

  return (
    <GradientDesign>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Ionicons
              style={styles.backButton}
              name="arrow-back"
              onPress={() => router.replace("/home")}
              size={28}
              color="#000000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.headText}>ABOUT ANOULAM</Text>
          <Text style={styles.secondaryText}>Purpose</Text>
          <Text style={styles.Text}>
            AnoUlam started when I finished learning JavaScript and APIs and
            wanted a project that would help me learn Spring Boot and React.
            While thinking of ideas, I asked my mom a simple question: “What is
            one problem you face in your daily life?” She told me that she often
            feels stressed trying to decide what to cook based on the
            ingredients left at home. That answer made me realize that many
            Filipino families, especially mothers who prepare meals every day,
            might be facing the same challenge. Inspired by my mom's experience,
            I created AnoUlam, an application that helps Filipinos discover
            suitable dishes based on the ingredients they already have
            available. Its goal is to make meal planning easier, reduce food
            waste, and simplify home cooking one recipe at a time. Beyond
            solving a real-world problem, AnoUlam also became an important
            milestone in my journey as a software developer, allowing me to
            apply and strengthen my skills in Spring Boot, React, API
            development, databases, and full-stack application design.
          </Text>
          <Text style={styles.secondaryText}>Version</Text>
          <Text style={styles.Text}>1.0</Text>
          <Text style={styles.secondaryText}>Developer</Text>
          <Text style={styles.Text}>Jude Rey C. Garcia</Text>
        </View>
      </ScrollView>
    </GradientDesign>
  );
};

export default AboutScreen;

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
});
