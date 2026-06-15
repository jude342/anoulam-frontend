// Library for sending requests
import axios from "axios";

// URL's for the API endpoints
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const RECOMMENDATION_URL = `${BASE_URL}/recommendations`;

// Methods
export async function fetchRecommendations(ingredients) {
  try {
    const response = await axios.post(RECOMMENDATION_URL, ingredients, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch {
    // Remove any console log for security.
    // Insert any console logs when there's an issue that need to be address
  }
}

export async function fetchDishById(dishId) {
  try {
    const response = await axios.get(`${BASE_URL}/${dishId}`);

    return response.data;
  } catch {
    // Remove any console log for security.
    // Insert any console logs when there's an issue that need to be address
  }
}








// =========== FOR FUTURE FEATURE (TOP DISHES, RATING FEATURE) ===========
// export async function fetchTopDishById(dishIds) {
//   try {
//     if (!dishIds || dishIds.length === 0) {
//       return [];
//     }

//     const encodedIds = encodeURIComponent(dishIds.join(","));
//     const response = await axios.get(`${BASE_URL}/list/${encodedIds}`);

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching top dishes:", error);

//     if (error.response) {
//       console.error("Status:", error.response.status);
//       console.error("Data:", error.response.data);
//     }

//     throw error;
//   }
// }
