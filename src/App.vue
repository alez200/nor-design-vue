<template>
  <div id="app">

    <Header :config-site="configSite"></Header>
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
