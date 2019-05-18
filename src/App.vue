<template>
  <div id="app">

    <Header :config-site="configSite"></Header>

  </div>
</template>

<script>

import { configSite } from './config.site';
import {
  Header,
} from './Components/Layout/';

export default {
  name: 'App',
  components: {
    Header,
  },

  data(){
    return {

      configSite: configSite,

    };
  },

}
</script>
