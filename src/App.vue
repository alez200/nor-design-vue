<template>
  <div id="app">

    <Header :config-site="configSite"/>


    <Footer :config-site="configSite" />

  </div>
</template>

<script>

//config site
import { configSite } from './config.site';

import { Header, Footer } from './components/layout/';
/*import Cover from './components/layout/header';
import ClaimRow from './components/claim-row';
import PictureSlot from './components/picture-slot';*/

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    //ClaimRow,
    //Cover,
    //PictureSlot,
  },

  data(){
    return {

      configSite: configSite,

    };
  },


}
</script>

<style>

</style>
