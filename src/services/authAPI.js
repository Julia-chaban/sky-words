import api from "./api";

export const authAPI = {
  // Регистрация
  register: async (userData) => {
    try {
      const response = await api.post("/user", {
        login: userData.login,
        name: userData.name,
        password: userData.password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка регистрации" };
    }
  },

  // Авторизация
  login: async (credentials) => {
    try {
      const response = await api.post("/login", {
        login: credentials.login,
        password: credentials.password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка авторизации" };
    }
  },
};
