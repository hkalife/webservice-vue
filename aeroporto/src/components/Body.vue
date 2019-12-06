<template>
  <div id="main" class="main col-12">
    <img alt="Vue logo" src="../assets/airport.png">
    <h1>{{ msg }}</h1>
    
    <div id="secaoRequisicao">
      <p>Digite o código IATA de um aeroporto: </p>
      <input type="text" placeholder="ex: POA" v-on:blur="buscar()" v-model="iataParaBuscar">
    </div>
    <div id="resultado">
      <div v-if="requisicaoOk" id="secaoResultado">
        <p>{{ nome }}</p>
        <p>Código ICAO: {{ icao }}</p>
        <p>{{ localizacao }}</p>
      </div>
    </div>
    <button v-if="requisicaoOk" id="botaoAcesso" type="button" class="btn btn-outline-light" v-on:click="acessarSite()">Acessar website</button> 
  </div>
</template>

<script>
import AeroportoApi from '../aeroportoApi.js';

export default {
  name: 'Body',
  data: () => {
    return {
      msg: 'Busca de Aeroportos',
      iataParaBuscar: '',
      nome: '',
      anterior: '0',
      avisoAnterior: false,
      icao: '',
      localizacao: '',
      website: '',
      requisicaoOk: false
    }
  },
  methods: {
    async buscar() {
      if (this.anterior !== this.iataParaBuscar) {
        const api = new AeroportoApi()
        const response = await api.buscar( this.iataParaBuscar )

        this.nome = response.nome
        this.icao = response.icao
        this.localizacao = response.localizacao
        this.website = response.website

        if (response !== null || response !== undefined) {
          this.requisicaoOk = true;
        }
      }
      else {
        this.avisoAnterior = true
      }
      this.anterior = this.iataParaBuscar
    },
    acessarSite(){
      window.open(this.website);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#botaoAcesso {
  background-color: #026F58;
  
}
#secaoResultado, #secaoRequisicao{
  padding-top: 2%;
}
#main {
  background-color: #FFFFFF;
  padding-bottom: 2%;
  padding-top: 2%;
  
}
</style>
