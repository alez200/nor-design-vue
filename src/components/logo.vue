<template functional>
    <h1 :class="props.classLogo" >
      <a :href="props.href">
        <img
            :src="props.src"
            :alt="props.alt"
            :title="props.title"
        />
      </a>
    </h1>
</template>

<script>

  export default {

    name: 'Logo',
    props:{

        src:{
            type: String,
            required: true,
            default:'',
        },

        href:{
            type: String,
            required: true,
            default:'',
        },
        alt: {
            type: String,
            required: true,
            default:'',

        },

        title: {
            type: String,
            required: true,
            default:'',
        },

        classLogo:{
            type: String,
            required: false,
        },

        el: {
            type: String,
            required: true,
            default: 'div',
        }

    },

  }
</script>
