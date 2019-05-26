<template>
  <div id="app">

    <Header :config-site="configSite"></Header>

    <router-link to="/linea">Vai a linea</router-link>
    <router-link to="/collezione">Vai a collezione</router-link>

    <router-view></router-view>

    <Footer :config-site="configSite"></Footer>

  </div>
</template>

<script>

import { configSite } from './config.site';
import {
    Header,
    Footer
} from './Components/Layout/';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },

  data(){
    return {

      configSite: configSite,

    };
  },

}
</script>
