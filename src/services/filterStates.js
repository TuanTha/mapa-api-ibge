export default httpClient => ({
  // Função assíncrona para pegar todos os estados
  getAll: async state => {
    // Utilizando o método HTTP Get para pegar os municipios
    const response = await httpClient.get('estados/' + state + '/municipios')

    return { data: response.data }
  },

  getEstado: async () => {
    // Utilizando o método HTTP Get para pegar os estados
    const response = await httpClient.get('estados/')

    return { data: response.data }
  }
})
