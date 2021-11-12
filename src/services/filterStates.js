export default httpClient => ({

  // Função assíncrona para pegar todos os estados
  getAll: async () => {

    // Utilizando o método HTTP Get para pegar os municipios
    const response = await httpClient.get('/estados/RN/municipios')

    return { data: response.data }

  },

})