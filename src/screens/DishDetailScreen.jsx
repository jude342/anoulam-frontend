import React, { useState, useEffect } from "react";
import { fetchDishById } from "../services/api";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export const DishDetailScreen = () => {
  const router = useRouter();
  const { dishId } = useLocalSearchParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingData = async () => {
      try {
        const dishData = await fetchDishById(dishId);
        setDish(dishData);
      } catch(error) {
        // Remove any console log for security.
        // Insert any console logs when there's an issue that need to be address
      } finally {
        setLoading(false);
      }
    };

    loadingData();
  }, [dishId]);

  if (loading) {
    return (
      <View style={styles.centerFallback}>
        <ActivityIndicator size="large" color="#E05C2B" />
        <Text style={styles.feedbackText}>
          Kinukuha ang mga impormasyon ng ulam...
        </Text>
      </View>
    );
  }

  if (!dish) {
    return (
      <View>
        <TouchableOpacity>
          <Ionicons
            style={styles.backButton2}
            name="arrow-back"
            onPress={() => router.replace("/home")}
            size={28}
            color="#000000"
          />
        </TouchableOpacity>
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>
            Hindi ma load ang dishDetail, paki tignan po ang inyong internet,
            pasensya na po.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageBannerWrapper}>
        <Image source={{ uri: dish.imageUrl }} style={styles.bannerImage} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#2D3748" />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsSheet}>
        <Text style={styles.dishTitle}>{dish.name}</Text>

        <View style={styles.metaInfoRow}>
          <View style={styles.metaChip}>
            <Ionicons name="time-outline" size={16} color="#E05C2B" />
            <Text style={styles.metaChipText}>{dish.cooking_time}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeading}>Description</Text>
        <Text style={styles.bodyDescriptionText}>{dish.description}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionHeading}>Recipe Details</Text>
        <View style={styles.tutorialCard}>
          <Text style={styles.tutorialBodyText}>{dish.tutorial}</Text>
        </View>
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default DishDetailScreen;

const styles = StyleSheet.create({
  backButton2: {
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  centerFallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF8F5",
  },
  feedbackText: {
    color: "#718096",
    marginTop: 12,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  errorBanner: {
    marginTop: 50,
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  errorText: {
    color: "#B91C1C",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  imageBannerWrapper: {
    position: "relative",
    height: 280,
    width: "100%",
    backgroundColor: "#E2E8F0",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 100,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  detailsSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -30,
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  dishTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 12,
  },
  metaInfoRow: {
    flexDirection: "row",
    marginBottom: 24,
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF5F2",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  metaChipText: {
    fontSize: 13,
    color: "#E05C2B",
    fontWeight: "700",
    marginLeft: 6,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 10,
  },
  bodyDescriptionText: {
    fontSize: 15,
    color: "#4A5568",
    lineHeight: 24,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#EDF2F7",
    marginVertical: 20,
  },
  stepContainerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    gap: 14,
  },
  stepNumberCircle: {
    backgroundColor: "#E05C2B",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  stepNumberText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
  stepBodyText: {
    flex: 1,
    fontSize: 15,
    color: "#4A5568",
    lineHeight: 22,
  },
  tutorialCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginTop: 8,
  },
  tutorialBodyText: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: "System",
  },
});
