<template>
    <h1 class="[ logo ] [ grid__col grid__col--w50 ]">
      <a :href="configSiteLogo.href">
        <img
            src="../assets/logoBianco.svg"
            :alt="configSiteLogo.alt"
            :title="configSiteLogo.title"
        />
      </a>
    </h1>
</template>

<script>

  export default {

    name: 'Logo',

    props:{

      configSiteLogo:{
        required: true,
        type: Object,
      }

    },

  }
</script>
