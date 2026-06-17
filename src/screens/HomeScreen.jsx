import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import GradientDesign from "../components/GradientDesign";
import IngredientTag from "../components/IngredientTag";
import RecipeCard from "../components/RecipeCard";
import { fetchRecommendations } from "../services/dishService";
import DishDetail from "../../app/DishDetail";
import { useRouter, useNavigation } from "expo-router";
import HamburgerMenu from "../components/HamburgerMenu";

const HomeScreen = () => {
  // For navigation Purposes
  const router = useRouter();
  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [topDishes, setTopDishes] = useState([
    {
      id: 1,
      dishName: "Adobong Manok",
      imageUrl:
        "https://res.cloudinary.com/drm3snp72/image/upload/q_auto/f_auto/v1781255795/adobong_manok_-_pexels_uqjvto.jpg",
      matchPercentage: 100,
      cookingTime: "50 minutes",
    },
    {
      id: 6,
      dishName: "Nilagang Itlog",
      imageUrl:
        "https://res.cloudinary.com/drm3snp72/image/upload/q_auto/f_auto/v1781255795/nilagang_itlog_-_pexels_sx3so2.jpg",
      matchPercentage: 100,
      cookingTime: "15 minutes",
    },
    {
      id: 12,
      dishName: "Pinakbet",
      imageUrl:
        "https://res.cloudinary.com/drm3snp72/image/upload/q_auto/f_auto/v1781255797/pinakbet_-_AI_jynh5y.png",
      matchPercentage: 100,
      cookingTime: "40 minutes",
    },
    {
      id: 15,
      dishName: "Sinantolan",
      imageUrl:
        "https://res.cloudinary.com/drm3snp72/image/upload/q_auto/f_auto/v1781361252/sinantolan_-_AI_ctzxf1.png",
      matchPercentage: 100,
      cookingTime: "40 minutes",
    },
    {
      id: 19,
      dishName: "Kare-Kare",
      imageUrl:
        "https://res.cloudinary.com/drm3snp72/image/upload/q_auto/f_auto/v1781362499/kare-kare_-_AI_xlxdlf.png",
      matchPercentage: 100,
      cookingTime: "2 hours",
    },
  ]);

  // Hamburger menu and navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: false,
      headerStyle: { backgroundColor: "#ffffff" },
    });
  }, [navigation, setShowMenu]);

  // Sync backend for recommendation
  useEffect(() => {
    const syncBackendData = async () => {
      if (ingredients.length === 0) {
        return;
      }

      setLoading(true);
      try {
        setErrorMessage("");
        const backendResults = await fetchRecommendations(ingredients);
        setDishes(backendResults);
      } catch (error) {
        const isNetworkError = !error.response;
        setErrorMessage(
          isNetworkError
            ? "Walang internet connection o Hindi maabot ang server."
            : "Hindi maabot ang server. Subukan ulit mamaya.",
        );
      } finally {
        setLoading(false);
      }
    };

    syncBackendData();
  }, [ingredients]);

  // Handle added ingredient
  const handleAddIngredient = () => {
    const cleanInput = textInput.trim().toLowerCase();
    if (cleanInput !== "" && !ingredients.includes(cleanInput)) {
      setIngredients([...ingredients, cleanInput]);
      setTextInput("");
    }
  };

  // Handle remove ingredient
  const handleRemoveIngredient = (indexToRemove) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };

  const isSearching = ingredients.length > 0;
  const displayedDishes = isSearching ? dishes : topDishes;

  return (
    <ScrollView
      style={styles.mainBackground}
      showsVerticalScrollIndicator={false}
    >
      {/* Gradient Header Container Layout */}
      <GradientDesign style={styles.gradientRadius}>
        <View style={styles.headerContainer}>
          <View style={styles.fullHeader}>
            <View style={styles.logoHeader}>
              <Image
                style={styles.logo}
                source={require("../../assets/icon.png")}
              />
              <View>
                <Text style={styles.logoFonts}>AnoUlam</Text>
                <Text style={styles.logoSubFonts}>Find your perfect dish</Text>
              </View>
            </View>

            <HamburgerMenu onPress={() => setShowMenu((v) => !v)} />
          </View>

          <View style={styles.searchCard}>
            <View style={styles.searchBarRow}>
              <Ionicons
                style={styles.icon}
                name="search-outline"
                size={20}
                color="#718096"
              />
              <TextInput
                style={styles.searchFont}
                placeholder="Maglagay ng sangkap (e.g. itlog)"
                value={textInput}
                onChangeText={setTextInput}
                onSubmitEditing={handleAddIngredient}
                returnKeyType="done"
              />
            </View>

            <View style={styles.tagsContainer}>
              {ingredients.map((item, index) => (
                <IngredientTag
                  key={index}
                  name={item}
                  onRemove={() => handleRemoveIngredient(index)}
                />
              ))}
            </View>
          </View>
        </View>
      </GradientDesign>

      {showMenu && (
        <View style={styles.menuOverlayWrapper} pointerEvents="box-none">
          <View style={styles.menuOverlay}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowMenu(false);
                router.push("/home");
              }}
            >
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowMenu(false);
                router.push("/About");
              }}
            >
              <Text style={styles.menuText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setShowMenu(false);
                router.push("/Credits");
              }}
            >
              <Text style={styles.menuText}>Credits</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.menuOverlayBackdrop}
            onPress={() => setShowMenu(false)}
          />
        </View>
      )}

      {errorMessage ? (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}

      <View style={styles.recommendSection}>
        <View style={styles.recommendHeaderRow}>
          <Text style={styles.recommendTitle}>Recommended Dishes</Text>
          <Text style={styles.matchCount}>
            {displayedDishes.length} matches
          </Text>
        </View>

        {loading ? (
          <View style={styles.centerFeedback}>
            <ActivityIndicator size="large" color="#E05C2B" />
            <Text style={styles.feedbackText}>
              Naghahanap nang pinakamasarap na pagkain para sa iyo....
            </Text>
          </View>
        ) : displayedDishes.length === 0 ? (
          <View style={styles.centerFeedback}>
            <Text style={styles.feedbackText}>
              Parang walang matching na ulam 😅. Panatilihing tama ang spelling
              ng sangkap at isang sangkap lamang ang ilalagay.
            </Text>
            <Text style={styles.feedbackText} >TAMANG PAGLAGAY: sibuyas</Text>
            <Text style={styles.feedbackText} >MALING PAGLAGAY: sibuyas at paminta</Text>
          </View>
        ) : (
          displayedDishes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.dishName}
              description={
                "Tap to view instructions and full ingredient check lists."
              }
              imageUrl={recipe.imageUrl}
              matchPercentage={recipe.matchPercentage}
              cookingTime={recipe.cookingTime}
              onPress={() =>
                router.push({
                  pathname: "/DishDetail",
                  params: { dishId: recipe.id },
                })
              }
            />
          ))
        )}
      </View>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: "#FBF8F5",
  },
  gradientRadius: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 24,
    width: "100%",
  },
  logoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  fullHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  searchCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#E8642E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchBarRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2F7",
    paddingBottom: 8,
    marginBottom: 12,
    gap: 10,
  },
  icon: {
    color: "#718096",
  },
  searchFont: {
    fontSize: 15,
    color: "#2D3748",
    flex: 1,
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 12,
    marginRight: 15,
  },
  logoFonts: {
    fontSize: 24,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: -0.5,
  },
  logoSubFonts: {
    fontSize: 13,
    color: "#ffffff",
    opacity: 0.85,
    fontWeight: "500",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recommendSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  recommendHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  recommendTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3748",
  },
  matchCount: {
    fontSize: 14,
    color: "#A0AEC0",
    fontWeight: "600",
  },
  centerFeedback: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  feedbackText: {
    textAlign: "center",
    color: "#718096",
    marginTop: 12,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  errorBanner: {
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
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#E8642E",
    borderRadius: 20,
    shadowColor: "#E8642E",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    backgroundColor: "#E05C2B",
  },
  menuText: { color: "#ffffffdb", fontWeight: "700" },

  menuOverlay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
});
