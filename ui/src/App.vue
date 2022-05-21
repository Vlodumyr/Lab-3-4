<template>
  <button id="order" @click="showOrder()">🍱</button>
  <ul v-if="showOrders">
    <span>Your order:</span>
    <li :key="i" v-for="i in getls('order')">
      <span>{{ i.Name }}{{ i.Price }}<button @click="delorder(i,'order')">Delete</button></span>
    </li>
    <li :key="i" v-for="i in getls('orderGet')">
      <span>{{ i.Name }}{{ i.Price }}<button @click="delorder(i,'orderGet')">Delete</button></span>
    </li>
  </ul>
  <div id="preview" v-if="preview">
    <center><h1>Hi there</h1></center>
    <center><button @click="fetch()">Start</button></center>
  </div>
  <img alt="Vue logo" src="./assets/2.png">
  <h1 style="font-size:4rem; text-shadow: 2px 2px #fd6e00;">Ukrainian_food</h1>
  <input type="text" v-model="search" placeholder="Search">&nbsp;<button @click="p=!p">{{ p ? page1 : page2 }}</button>
  <article style="margin-bottom: 5rem" v-show="p">
    <Card v-bind:key="i" v-for="i in Scardsf" :obj="i"/>
  </article>
  <article style="margin-bottom: 5rem" v-show="!p">
    <CardT :key="i" v-for="i in Tcardsf" :obj="i"/>
  </article>
</template>

<script>
import Card from './components/Card.vue'
import CardT from './components/CardT.vue'

export default {
  name: 'App',
  components: {
    Card,
    CardT
  },
  watch:{
    search(){/*
      for(i in this.Scards){
        if(this.Scards[i].Name.includes(this.search))
      }*/
      this.Scardsf = this.Scards.filter(this.filtr)
      this.Tcardsf = this.Tcards.filter(this.filtr)
    }
  },
  methods: {
    filtr: function (s) {
      return s.Name.includes(this.search)
    },
    delorder: function(o,key){
      let xhr= new XMLHttpRequest();
      //xhr.setRequestHeader("Content-Type", "application/json");
      let form = new FormData();
      form.append('Id',o.Id)
      form.append('Name',o.Name)
      form.append('OrderId',o.OrderId)
      xhr.onreadystatechange=()=>{
        if(xhr.status===200 && xhr.readyState===4){

          if(xhr.responseText[1]=='T')
            alert('Deleted')
          else
            alert(xhr.responseText)
          this.showOrders = !false
        }
      };
      xhr.open('DELETE','http://localhost:80/api/PL/');
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify([{
        Id: o.Id,
        Name: o.Name,
        OrderId: o.OrderId
      }]))


      let l = JSON.parse(localStorage.getItem(key))
      let nw = []
      for(let i in l){
        if(l[i].Id !== o.Id)
          nw.push(l[i])
      }
      localStorage.setItem(key,JSON.stringify(nw))
      this.showOrders = false
    },
    removeElement: function(array, elem) {
      var index = array.indexOf(elem);
      if (index > -1) {
        array.splice(index, 1);
      }
    },
    getls: function (key) {
      return  JSON.parse(localStorage.getItem(key))
    },
    showOrder: function (){
      this.showOrders = ! this.showOrders
    },
    fetch: function(){
      let xhr= new XMLHttpRequest();
      xhr.responseType='';
      xhr.onreadystatechange=()=>{
        if(xhr.status===200 && xhr.readyState===4){
          let dat = JSON.parse(xhr.responseText)
          dat = JSON.parse(dat)
          dat = JSON.parse(dat)
          this.Scards = dat
          this.Scardsf = dat
          this.preview = false
          console.log(this.Scards)

          let xhr1= new XMLHttpRequest();
          xhr1.responseType='';
          xhr1.onreadystatechange=()=>{
            if(xhr1.status===200 && xhr1.readyState===4){
              let dat = JSON.parse(xhr1.responseText)
              dat = JSON.parse(dat)
              dat = JSON.parse(dat)
              this.Tcards = dat
              this.Tcardsf = dat
              this.preview = false
              console.log(this.Tcards)
            }
          };
          xhr1.open('GET','http://localhost:80/api/PL?action=Type&name=null');
          xhr1.send();
        }
      };
      xhr.open('GET','http://localhost:80/api/PL?action=Season&name=null');
      xhr.send();


    }
  },
  data: ()=>({
    showOrders: false,
    p: true,
    preview: true,
    page1: "Season dishes",
    page2: "Type dishes",
    Scards: [],
    Tcards: [],
    Scardsf: [],
    Tcardsf: [],
    search: ""
  })
}
</script>

<style>
#order{
  position: fixed;
  top: 5rem;
  left: 5rem;
}
ul{
  position: fixed;
  top: 7rem;
  left: 5rem;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  overflow: hidden;
  overflow-y: auto;
  height: 70%;
}
*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
#preview{
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}
@import url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9f5n4GCW5Om8Irwix-wL71h73dm7PklwcssmoGwM_n2wcrbqMoP4uIsBfjGNmhtm5Zo&usqp=CAU');
html, body { margin: 0; padding: 0; background-color: lightgray; background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9f5n4GCW5Om8Irwix-wL71h73dm7PklwcssmoGwM_n2wcrbqMoP4uIsBfjGNmhtm5Zo&usqp=CAU"); }
button{
  color: #465f7c;
  font-family: 'Macondo', cursive, sans-serif;
  font-size: 2rem;
  border-radius: 1rem;
  background-color: black;
  border-style: solid;
  border-color: lightgray;
  transition: 0.2s ease-in-out;
}
input{
  color: #465f7c;
  font-family: 'Macondo', cursive, sans-serif;
  font-size: 2rem;
  border-radius: 1rem;
  background-color: black;
  border-style: solid;
  border-color: lightgray;
  transition: 0.2s ease-in-out;
}
button:hover{
  transition: 0.4s ease-in-out;
  background-color: gray;
}
article {
  display: grid;
  grid-template-columns: 33% 34% 33%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
}
#app {
  font-family: 'Macondo', cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #465f7c;
  margin-top: 60px;
}
</style>
