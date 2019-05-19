<template>
  <header class="[ header  header--hidden ] [ grid__row ]">
    <div class="grid__container">

      <Logo
        :src="configSite.logo.src"
        :href="configSite.logo.href"
        :title="configSite.logo.title"
        :alt="configSite.logo.alt"
        el="h1"
        class-logo="[ logo ] [ grid__col grid__col--w50 ]"

      />

    </div>
  </header>
</template>

<script>

  import Logo from '../Logo'

  export default {
    name: 'Header',

    components: {

      Logo,

    },

    props: {

      configSite:{

        required: true,
        type: Object,

      }


    }

  }
</script>
