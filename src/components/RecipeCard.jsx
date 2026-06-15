import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RecipeCard = ({
  name,
  description,
  imageUrl,
  matchPercentage,
  cookingTime,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        <View style={styles.matchBadge}>
          <Text style={styles.matchBadgeText}>{matchPercentage}% Match</Text>
        </View>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.metaRow}>
          <Ionicons name="time-outline" size={16} color="#718096" />
          <Text style={styles.metaText}>{cookingTime} mins</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EDF2F7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  imageWrapper: {
    position: "relative",
    height: 220,
    width: "100%",
    backgroundColor: "#E2E8F0",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  matchBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#E05C2B",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  matchBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  cardInfo: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#718096",
    marginBottom: 12,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    fontSize: 12,
    color: "#718096",
    marginLeft: 6,
    fontWeight: "600",
  },
});
