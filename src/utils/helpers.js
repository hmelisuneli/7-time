// Пример вспомогательной функции для генерации уникального идентификатора
export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  // Пример вспомогательной функции для форматирования даты
  export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  // Другие вспомогательные функции могут быть добавлены здесь в зависимости от потребностей вашего приложения