<template>
  <div id="app">

    <Header/>
    <Cover/>
    <ClaimRow/>
    <PictureSlot/>

    <Footer/>
  </div>
</template>

<script>

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Cover from './components/layout/header';
import ClaimRow from './components/claim-row';
import PictureSlot from './components/picture-slot';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    ClaimRow,
    Cover,
    PictureSlot,
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
