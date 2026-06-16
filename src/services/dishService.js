import apiService from "./apiService";

// Methods
export async function fetchRecommendations(ingredients) {
  try {
    const response = await apiService.post("/recommendations", ingredients, {});
    return response.data;
  } catch (error) {
    if (error.response?.status === 429) {
      alert("Whoa, slow down Bro! You are clicking too fast.");
    }
  }
}

export async function fetchDishById(dishId) {
  try {
    const response = await apiService.get(`/${dishId}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 429) {
      alert("Whoa, slow down Bro! You are clicking too fast.");
    }
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
