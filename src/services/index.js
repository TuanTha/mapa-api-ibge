// Camada de serviço que faz comunicação com a API

// Importando axios
import axios from 'axios'

// Importando camada que faz a requisição para a API:
import FilterStates from './filterStates'

// VARIÁVEIS DE AMBIENTE
const API_ENVS = {
  production: '',
  development: '',
  local: 'https://servicodados.ibge.gov.br/api/v1/localidades'
}

// Criando instância axios e usando a Base_URL (nesse caso, a local)
const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local
})

export default {
  filterStates: FilterStates(httpClient)
}
