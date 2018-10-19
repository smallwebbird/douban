<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content'
export default {
  name: 'App',
  components:{Header, Content}
}
</script>
<style>
  body{
    border: 1px solid grey;
    width: 1200px;
    margin: 0 auto;
  }
</style>



