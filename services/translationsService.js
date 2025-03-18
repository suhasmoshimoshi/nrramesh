import apiClient from "./apiClient";

// Function to create/replace translations
export async function createTranslations(translations) {
  try {
    const response = await apiClient.post("/translations/create", {
      translations,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating/replacing translations:",
      error.response?.data || error.message
    );
    throw error;
  }
}

// Function to read translations
export async function readTranslations() {
  try {
    const response = await apiClient.get("/translations/read");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching translations:",
      error.response?.data || error.message
    );
    throw error;
  }
}

// Function to update translations
export async function updateTranslations(updates) {
  try {
    const response = await apiClient.patch("/translations/update", { updates });
    return response.data;
  } catch (error) {
    console.error(
      "Error updating translations:",
      error.response?.data || error.message
    );
    throw error;
  }
}

// Function to delete translations
export async function deleteTranslations() {
  try {
    const response = await apiClient.delete("/translations/delete");
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting translations:",
      error.response?.data || error.message
    );
    throw error;
  }
}
