<template >
<section class="flex fixed bg-cover min-h-full min-w-full lg:w-auto h-auto flex-col background">

<!-- PRELOADER -->
<Preloader class="relative"> </Preloader>
<!-- FIM DO PRELOADER -->

<!-- HEADER -->
<div class="w-full"> 
<header id="header" class="bg-white w-10/12 h-10 rounded text-center ml-10 mt-4 pt-1 lg:w-11/12 lg:ml-14 lg:h-12 pp:ml-7 ip:ml-16  ">
      <h3 class="texto-header text-xl font-sans lg:text-2xl"><b>BUSQUE POR UM ESTADO</b></h3>
    </header>
    </div>
<!-- FIM DO HEADER -->

<!-- IMAGENS (div geral) -->
    <div class="interface  lg:mt-5 ml-1 lg:ml-12 sm:ml-12 pp:ml-5 ip:ml-32 xl:mt-5">
    <!-- IMAGENS (ilustrações) -->
      <div id="imagens" >
        <div id="icons" class="hidden lg:w-6/12 xl:w-7/12  lg:ml-10 lg:mt-2 lg:flex">
          <img class="mt-2 mr-4" src="../images/Ilustrações.png" alt="ilustrações" />
        </div>
   
        <div class="fixed xl:ml-20  xl:pt-16  mr-5 mt-1 lg:pt-4 lg:ml-6 lg:pl-10 md:ml-5">
         <mapa  @click="getStateList"></mapa>
        </div>
      </div>
      <!-- FIM DAS IMAGENS (ilustrações) -->
      </div>
<!-- FIM DAS IMAGENS (div geral) -->

<!-- BARRA DE BUSCA --> 
      <div class=" xl:ml-gd ml-10 mt-at md:mt-at md:ml-16 pp:ml-5 sm:ml-12 absolute pt-0 lg:mt-64 lg:ml-es ip:mt-al">

      <p class="ml-10 hidden lg:flex lg:text-left text-lg xl:text-2xl pt-2 lg:pt-4 lg:text-2xl lg:ml-0 lg:" id="texto-interface"><b>INFORME O NOME DA UF</b></p>

       <div class="ip:pl-6 lg:pl-0 ip:mt-10 lg:mt-0 lg:flex ip:w-full fixed ip:ml-20 lg:ml-0 ">
       <div class=" lg:w-96 ip:w-bt lg:relative  mb-1 mt-2 lg:mt-3 xl:w-mp ">

    <Multiselect
      v-model="state"
      placeholder="Selecione um estado"
      v-on:keyup.enter="getStateList(state); open()"
      @select="showModal =true; getStateList(state);"
      :closeOnSelect="true"
      :searchable="true"
      :options="estados"
      :track-by="'state_name'"
      label="state_name"
      value-prop="state_abbr"
      openDirection="top"
      :classes="{
        containerActive: 'ring ring-green-900 ring-opacity-10',
        container: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none'}"
      class="py-3 "
    />
  </div>
      <div id="bottom" class="lg: lg:mt-2">
        <button  @click="getStateList(state); open()" id="botao" class="w-tm rounded mt-0 lg:mt-1 lg:w-14  lg:ml-2 lg:p-2 ip:w-bt ip:px-14">
        <img id="lupa" class="w-10 my-1 ml-32 py-0 lg:ml-1 lg:w-8 " src="../images/lupa.png" alt="" />  
        </button>
      </div>
</div>

      </div>
<!-- BARRA DE BUSCA FIM --> 

</section>

 <div>
    <vue-final-modal
      id="Mood"
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
      @click-outside="ClearData(); clearInput();"
    >
      <button  class="modal__close mt-2" @click="ClearData(); showModal = false; clearInput()">
<p class="mr-4">X</p>
      </button>

<div id="teste">
            <input v-model="filterText" onfocus="this.value=''" type="text" class="py-2 pl-8 pr-2 rounded w-64 bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Busque" />
            <svg class="focus:hidden ml-20 w-4 h-5 absolute top-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path id="lupa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>  
    </div> 

      <div class="modal__content mb-96">
        <div id="list" class="">
          <ul id="myUL">
           <a  class="pointer" @click="showModal2= true;"> <li id="item" class="pl-14" v-for="(muni, index) in filteredMuni" :key="muni.id" @click="nomeCidade(index)">
              {{ muni.city_name }} 
            </li> </a>
          </ul>
        </div>
        </div>
      
    </vue-final-modal>
  </div>

  <!-- MODAL DE RESULTADO -->

  <div>

    <vue-final-modal
      v-model="showModal2"
      classes="modal-container"
      content-class="modal-content"
    >
      <div>
      <div class="modal__content">
      <nav id="navmodal" class="h-px"><h5 class="pt-2 text-white"> {{ cidade }} / {{ state[0] }} </h5></nav>
      
      <section class="mt-24 mr-5 ml-5   lg:ml-5 lg:mr-5 lg:mt-10">
      
      <table>
  <tr>
    <td class="flex"><img src="../images/habitantes.svg" class="w-10 mr-2" alt="">Habitantes</td>
    <td>1589</td>  
  </tr>
  <tr>
    <td class="flex"><img src="../images/ativos.svg" class="w-7 mr-5" alt=""> Clientes Ativos</td>
    <td>200</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/market.svg" class="w-7 mr-5" alt="">Market Share</td>
    <td>50%</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/pin.svg" class="w-5 mr-7" alt="">Penetração</td>
    <td>20%</td>
  </tr>
  <tr>
    <td class="flex"><img src="../images/churn.svg" class="w-6 mr-6" alt="">Churn</td>
    <td>2%</td>
  </tr>
</table>
</section>

<div class="absolute top-96">
<a class="pointer" @click="showModal2=false" >
<img  src="../images/voltar2.svg" class="w-14 mt-14 ml-80 absolute" alt="">
<img id="efeito"  src="../images/voltar.svg" class="w-14 mt-14 ml-80 relative" alt="">
</a>
</div>
      </div>
      </div>
    </vue-final-modal>
  </div>

  <!-- FIM DO MODAL DE RESULTADO -->
</template>

<script>
import { ref, onMounted, reactive, computed } from "vue";
import services from "../services";
import Multiselect from '@vueform/multiselect'
import Preloader from '../components/Preloader.vue'
import mapa from '../components/mapa.vue'


export default {
  components: {
    Preloader,
    Multiselect,
    mapa
  },
  
  setup() {
    onMounted(() => {
      showState();
      estado();
    });

    //ABRIR MODAL//
    const cidade = ref('');
    const showModal = ref(false);
    const showModal2 = ref(false);
    const municipios = reactive([]);
    const state = reactive([]);
    const estados = reactive([]);
    const filterText = ref('');
    const indice = reactive([]);
    const filteredMuni = computed( () => {
			let filter = filterText.value
			if (!filter.length) return municipios
			return municipios.filter( muni => 
				muni.city_name.toLowerCase().includes(filter.toLowerCase())
			)
		});

    const nomeCidade = (index) => {
      const title = filteredMuni.value[index].city_name;
      cidade.value = title
    }

     function getStateList(payload) {
      state.shift();
      state.push(payload);
      showState(payload);
      showModal.value = true;
    };

    function ClearData() {
      municipios.splice(0, municipios.length);
    }
    
    function open(){
     if (state == '') {
       showModal.value = false;
     } else {
       showModal.value = true;
     }
    }

    function clearInput(){
      filterText.value = "";
    }

    function HandleModal() {
      showModal.value = true;
      showModal2.value = true;
    }
    
    const showState = async () => {
      const { data } = await services.filterStates.getAll(state);

      console.log(typeof(state));
      console.log(state)
      console.log()
    
      data.forEach((item) => {
       municipios.push({ city_name: item.nome, city_id: item.id });        
        
      });

      console.log(municipios.item);
      console.log(municipios);
      
    };
    
     const estado = async () => {
      const { data } = await services.filterStates.getEstado();
    
      data.forEach((item) => {
        estados.push({ state_name: item.nome, state_abbr: item.sigla});
      
      });
      console.log(estados)
      console.log(municipios);
    };

    return {
      showModal,
      showModal2,
      HandleModal,
      showState,
      estado,
      municipios,
      estados,
      getStateList,
      state,
      ClearData,
      open,
      indice,
      filterText,
      filteredMuni,
      clearInput,
      nomeCidade,
      cidade,
      
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style>

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";

.mainLoginInput::-webkit-input-placeholder { 
font-family: FontAwesome;
vertical-align: top;
display: inline-block !important;
padding-left: 5px;
padding-top: 2px;
}

table {
  font-family: Roboto-Bold, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #0a686c;
  color: white;
}

tr {
  font-size: 18px;
  color: #0a686c;
}

* {
    margin: 0%;
    padding: 0%;}

#item:hover{
color: white;
background-image: url(../images/lista.svg);
transition: 0.1s;
}

#navmodal{
  background-color: #0a686c;
  height: 40px;
}

#icone{
  background: url(../images/habitante.svg);
}

a.pointer{
text-decoration: none
}

a.pointer:hover{
text-decoration: none
}

#list::-webkit-scrollbar {
  width: 20px;
}

#list::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 200px;
}

#list::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: #0a686c;
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}


.background {
  background-image: url(../images/FUNDO.png);
  background-repeat: no-repeat;
}

#header {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.texto-header {
color: #0E959A
}

#imagens {
  display: flex;
}

#icons {
  position: relative;
}

.interface {
  display: flex;
  flex-direction: row;
}

#texto-interface {
  color: aliceblue;
}

#place {
  display: inline-block;
  border: 1px solid #F5F5F5;
  border-radius: 50px;
  background-color: #F5F5F5;
  outline: none;
}

#botao {
  border: none;
  background-color: #83d14f;
}

#botao:hover {
  background-color: #90e755;
}

svg path:hover {
  fill: #0e959a;
  transition: 0.3s;
}

/* MODAL */

#teste path:hover{
  fill: white;
}

#teste{
margin-top: 15px; 
}

#teste div{
  margin-top: 5px;
  position: absolute !important; 
  box-shadow: none !important;  
}

.modal-container div {
  width: 400px;
  height: 540px;
  border-radius: 10px;
}

.modal-container {
  margin-bottom: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  height: 100vh;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-left: 1px;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background-color: #fff;
}

.pointer {
  cursor: pointer;
}

/* FIM DO MODAL */

#list {
  width: 390px;
  height: 440px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 80px;
  padding-right: 10px;
  margin-left: -10px;
  position: absolute;
  margin-right: 10px
}

#item {
  list-style-type: none;
  margin-bottom: 20px;
  background-image: url(../images/list.svg);
  background-size: 400px;
  background-repeat: no-repeat;
  height: 100px;
  text-align: center;
  text-decoration: solid;
  border-radius: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #0a686c;
  padding-top: 33px;
}

#efeito:hover{
display: none;
transition: 1s;
}

</style>