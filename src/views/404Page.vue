<template>
  <div id="main">
    	<div class="fof">
        		<h3>エラーが発生しました。 404ページ</h3>
    	</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
    transition: all 0.6s;
}

html {
    height: 100%;
}

body{
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
}

#main{
    display: table;
    width: 100%;
    text-align: center;
}

.fof{
	  display: table-cell;
	  vertical-align: middle;
}

.fof h3{
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .4s alternate infinite;
      color: rgb(255, 21, 0);
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}
</style>