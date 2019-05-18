<template>
  <footer class="[ footer ]  [ grid__row ]">

    <div class="grid__container">

      <div class="[ grid__col  grid__col--l50 ]">

       <Logo :config-site-logo="configSite.logo"/>

        <div class="[ contatti ]">

          <ul>
            <li><a href="http://www.nor-design.com" title="www.nor-design.com">{{configSite.titleSite}}</a></li>
            <li><a href="mailto:info@nor-design.com" title="send mail to info@nor-design.com ">{{configSite.mailSite}}</a></li>
            <li><a href="tel:+39 3337931450" title="call me to +39 3337931450">{{configSite.phone}}</a></li>
          </ul>

        </div>

      </div>

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

    </div>
  </footer>
</template>

<script>

  import Logo from '../Logo'

  export default {
    name: 'Footer',

    components: {

      Logo,

    },

    props:{

      configSite:{
        required: true,
        type: Object,
      }

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
