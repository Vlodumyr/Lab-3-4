<template>
    <section>
      <span>
        <img :src="obj.Image" alt="dish photo"/>
        <span style="font-size: 3rem;top: -5rem">{{ obj.Name }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ obj.Price }}$</span>
        <span style="color: #abab20; font-size: 2rem;">{{ obj.Details }}&nbsp;{{ obj.Season }}<button v-on:click="confirmt()">+</button></span>
      </span>
    </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    obj: Object
  },
  methods: {
    orderPOST: function(){
      let xhr= new XMLHttpRequest();
      xhr.onreadystatechange=()=>{
        if(xhr.status===200 && xhr.readyState===4){
          var curr = JSON.parse(JSON.stringify(this.obj))
          var obj = JSON.parse(xhr.responseText)
          try{
            // eslint-disable-next-line no-constant-condition
            while(true){
              obj = JSON.parse(obj)
            }
          }catch{
            curr.Id = obj.Id
            curr.OrderId = obj.OrderId
            this.pushOrder(curr)
            console.log('Success',curr);
          }
        }
      };
      xhr.open('POST','http://localhost:80/api/PL/');
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify([{
        Id: this.obj.Id,
        Name: this.obj.Name,
        OrderId: this.obj.OrderId
      }]))
    },
    orderPUT: function(){
      let xhr= new XMLHttpRequest();
      xhr.onreadystatechange=()=>{
        if(xhr.status===200 && xhr.readyState===4){
          console.log('Success',xhr.responseText);
          this.pushGet(this.obj)
        }
      };
      xhr.open('PUT','http://localhost:80/api/PL/');
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        Id: this.obj.Id,
        Name: this.obj.Name,
        OrderId: this.obj.OrderId
      }))

    },
    confirmt: function(){
      let xhr= new XMLHttpRequest();
      xhr.responseType='';
      xhr.onreadystatechange=()=> {
        if (xhr.status === 200 && xhr.readyState === 4) {
          if(!(xhr.responseText[1]=="T"))
            if (confirm('There are no ready '+this.obj.Name+". Order it?")) {
              alert("Ordered")
              this.orderPOST()
              return
            } else {
              alert('Okey');
              return
            }
          alert("Ordered")
          this.orderPUT()
        }
      }
      xhr.open('GET','http://localhost:80/api/PL?action=Exist&name='+this.obj.Name);
      xhr.send();
    },
    pushOrder: function(obj){
      let array = localStorage.getItem("order");
      if(array){
        array = JSON.parse(array)
        array.push(obj)
        array = JSON.stringify(array)
        localStorage.setItem("order", array)
        return
      }
      array = []
      array.push(obj)
      array = JSON.stringify(array)
      localStorage.setItem("order", array)
    },
    pushGet: function(obj){
      let array = localStorage.getItem("orderGet");
      if(array){
        array = JSON.parse(array)
        array.push(obj)
        array = JSON.stringify(array)
        localStorage.setItem("orderGet", array)
        return
      }
      array = []
      array.push(obj)
      array = JSON.stringify(array)
      localStorage.setItem("orderGet", array)
    }
  }
}
</script>

<style scoped>
span img{
  max-height: 12em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>
  <style scoped>
  article span {
    text-align: left;
  }
section span {
  padding: 0.3rem;
}
span{
  display: grid;
  grid-template-rows: auto auto;
}
span p{
  text-align: left;
}
article{
  margin: 0rem 0 3rem;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: "Bebas Neue",monospace;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2, h3, h4{
  height: 1%;
  text-align: left;
  margin-left: 1rem;
}
i{
  color: yellow;
  font-size: 2rem;
}
p{
  height: 1%;
}
h3{
  margin-bottom: 0;
  margin-top: 0.3rem;
}
footer{
  text-align: right;
  margin-right: 1rem;
  color: gray;
}
footer sub{
  background-color: #8A2BE244;
  border-radius: 5px;
  padding: 3px;
}
section{
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1em;
  border-color: #999;
  border-width: 3px;
  border-style: solid;
  width: 95%;
  display: grid;
  grid-template-rows: auto auto 2rem;
  background-color: #000;
  box-shadow: 7px 7px 5px #333;
  transition: 0.4s ease-in-out;
}
section:hover{
  margin-top: -3px;
  margin-bottom: 6px;
  box-shadow: 10px 10px 5px #002634;
  border-color: #bbb;
  transition: 0.4s ease-in-out;
}
</style>
