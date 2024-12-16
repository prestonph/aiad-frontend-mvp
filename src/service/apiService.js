import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.anyad.app/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;
    console.log("response here", response.data);
  } catch (error) {
    throw new Error(
      error.response?.status === 401 ? "Invalid credentials" : "Login failed"
    );
  }
};
