import api from "./api";

export const authAPI = {
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

  login: async (credentials) => {
    try {
      const response = await api.post("/user/login", {
        login: credentials.login,
        password: credentials.password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка авторизации" };
    }
  },
};
