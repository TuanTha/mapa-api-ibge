export default httpClient => ({
  // Função assíncrona para pegar todos os estados
  getAll: async ({ state }) => {
    // Utilizando o método HTTP Get para pegar os municipios
    const query = { state }
    const response = await httpClient.get(
      'estados/' + { params: query } + '/municipios'
    )
    return { data: response.data }
  }
})
