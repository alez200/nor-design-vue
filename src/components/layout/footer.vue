<template>
  <footer class="[ footer ][ grid__row ]">

    <div class="grid__container">

      <div class="[ grid__col  grid__col--l50 ]">

        <Logo
          :src="configSite.logo.src"
          :href="configSite.logo.href"
          :title="configSite.logo.title"
          :alt="configSite.logo.alt"
          el="h1"
          class-logo="[ footer-logo ]"
        />

        <Info
          :items="configSite.info"
          el="div"
          class-info="[ contatti ]"
        />

      </div>

      <!--
      <div class="[ seo ] [ grid__col  grid__col--l50 ] ">

        <ul class="[ seo__link ]">
          <li><a href="" title="Progetti">Progetti</a></li>
          <li><a href="" title="Chi sono">Chi sono</a></li>
          <li><a href="" title="Contatti">Contatti</a></li>
        </ul>

        <h1 class="[ hidden ]">Social</h1>

        <ul class="[ seo__socialLink ]">
          <li><i class="fa fa-linkedin-square"></i></li>
          <li><i class="fa fa-pinterest-square"></i></li>
          <li><i class="fa fa-instagram"></i></li>
        </ul>

        <p class="[ seo__copy ]">© 2019 {{configSite.titleSite}}</p>
        <p class="[ seo__copy ]">
          Fotografie di <a href="https://it.linkedin.com/in/filippo-capodaglio-28892a8b" target="_blank">Filippo Capodaglio</a>.
        </p>

      </div>
      -->
    </div>
  </footer>
</template>

<script>

  import Logo from '../Logo'
  import Info from '../Info'

  export default {
    name: 'Footer',

    components: {

      Logo,
      Info

    },

    props:{

      configSite:{
        required: true,
        type: Object,
      }

    },

  }
</script>
