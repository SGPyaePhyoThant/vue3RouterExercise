<template>
  <nav>
    <router-link to="/">横浜市</router-link> |
    <router-link to="/about">詳細</router-link> |
    <router-link :to="{name:'kanagawaken'}">神奈川県</router-link> 
  </nav>
  <button class="btnDirection" @click="redirect">転送</button>
  <button class="btnDirection" @click="backward">逆光</button>
  <button class="btnDirection" @click="forward">前方</button>
  <router-view/>
</template>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push({name:'home'})
    },
    backward(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 12px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: #c51919;
}

.btnDirection{
  padding: 10px;
  margin: 5px;
  background: #c51919;
  color: #ffd000;
  border: 0px;
  border-radius: 5px;
}
</style>
