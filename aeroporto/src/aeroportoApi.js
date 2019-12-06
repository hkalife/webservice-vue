import Aeroporto from './aeroporto.js'

export default class AeroportoApi {
    constructor() {
      this.url = "https://airport-info.p.rapidapi.com/airport"
    }
  
    async buscar( iata ) {
      let urlAeroporto = `${ this.url }?iata=${ iata }`
      
      return new Promise( resolve => {
        fetch(urlAeroporto, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "airport-info.p.rapidapi.com",
                "x-rapidapi-key": "40d38d0a69msh47619cff54e96bdp184687jsn03897a24b184"
            }
        })
        .then( j => j.json() )
        .then( a => {
            const aeroporto = new Aeroporto(a)
            // return "assícrono",
            // vai jogar o valor de aeroporto para quem chamou utilizá-lo de forma assíncrona
            resolve(aeroporto)
        })
      })
      //
    }
}
  