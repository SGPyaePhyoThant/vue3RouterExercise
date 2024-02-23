<template>
  <div v-if="city">
    <h3>ようこそお客様！</h3>
    <p class="cityDir">{{city.name}} からです。{{city.detail}}
    </p>   
  </div>
</template>

<script>
export default {
props:['id'],
data(){
    return {
        city:null
    }
 },
 mounted(){
  fetch('http://localhost:3000/cities/'+this.id)
  .then(res => res.json())
  .then(data => this.city = data)
  .catch(error => console.log(error.message))
 }
}
</script>

<style scoped>
.cityDir{
  background: #e8e8e8;
  padding: 20px;
  color: #c31111;
  text-align: justify;
}
</style>