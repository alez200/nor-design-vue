<template>
  <div id="app">

    <Header/>
    <Cover/>
    <ClaimRow/>
    <PictureContainer/>

    <Footer/>
  </div>
</template>

<script>

import HelloWorld from './components/hello-word';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Footer,
  },

  data(){
    return {

      pippo: 'ciao'

    };
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
