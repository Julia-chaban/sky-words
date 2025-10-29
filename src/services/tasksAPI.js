import api from "./api";

export const tasksAPI = {
  // Получение всех задач
  getTasks: async () => {
    try {
      const response = await api.get("/kanban");
      return response.data.tasks;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка загрузки задач" };
    }
  },

  // Создание задачи
  createTask: async (taskData) => {
    try {
      const response = await api.post("/kanban", taskData);
      return response.data.tasks;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка создания задачи" };
    }
  },

  // Обновление задачи
  updateTask: async (id, taskData) => {
    try {
      const response = await api.put(`/kanban/${id}`, taskData);
      return response.data.tasks;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка обновления задачи" };
    }
  },

  // Удаление задачи
  deleteTask: async (id) => {
    try {
      const response = await api.delete(`/kanban/${id}`);
      return response.data.tasks;
    } catch (error) {
      throw error.response?.data || { message: "Ошибка удаления задачи" };
    }
  },
};
