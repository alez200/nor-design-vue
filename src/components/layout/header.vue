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

      <nav class="[ menu ] [ grid__col grid__col--w50 ]">
        <ul class="[ menu__item ]">
          <li><a href="" title="Progetti">Progetti</a></li>
          <li><a href="" title="Chi sono">Chi sono</a></li>
          <li><a href="" title="Contatti">Contatti</a></li>
        </ul>
      </nav>
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
