<template>
  <h2>神奈川県</h2>
  <p>神奈川県（かながわけん）は、日本の関東地方に位置する県。県庁所在地は横浜市。都道府県別の人口では東京都に次ぐ第2位[1]、昼間人口及び人口密度は東京都、大阪府に次ぐ第3位である。
県内の市町村数は33で、うち市は19、町は13、村は1（清川村）である。県内の政令指定都市は全国で唯一の3市（横浜市・川崎市・相模原市）、中核市は横須賀市の1市、施行時特例市は小田原市・大和市・平塚市・厚木市・茅ヶ崎市の5市である。藤沢市は人口が30万人を超えているが、中核市に指定されていない。
県内総生産は東京都、愛知県、大阪府に次ぐ第4位となっている[2]。</p>
<div v-if="cities.length">
<div v-for="city in cities" :key="city.id" class="cityLink" >
    <router-link :to="{name:'kanagawakenCity',params:{id:city.id}}" >
    <h3>{{city.name}}</h3>
    </router-link>
</div>
</div>
<div v-else>
  <p class="dataWaitingMessage">データを検索しています。ちょっと待ってお願いいたします。。。。。。。</p>
</div>
</template>

<script>
export default {
 data(){
    return {
        cities:[]
    }
 },
 mounted(){
  fetch('http://localhost:3000/cities/')
  .then(res => res.json())
  .then(data => this.cities = data)
  .catch(error => console.log(error.message))
 }
}
</script>

<style scoped>
h3{
  padding: 10px;
  max-width: 600px;
  margin: 10px auto;
  background: #e5e5e5;
  border-radius: 10px;
  color: #b12020;
}
h3:hover {
 background: #b12020;
  color: #ffd000;
}
.cityLink a{
  text-decoration: none;
}
p{
  text-align: justify;
}
.dataWaitingMessage{
  padding: 10px;
  margin-top: 10px;
  margin: 10px auto;
  text-align: center;
}
</style>