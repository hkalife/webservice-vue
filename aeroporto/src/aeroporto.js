export default class Aeroporto {
    constructor( jsonVindoDaApi ) {
      this.nome = jsonVindoDaApi.name
      this.icao = jsonVindoDaApi.icao
      this.localizacao = jsonVindoDaApi.location
      this.website = jsonVindoDaApi.website
    }
}