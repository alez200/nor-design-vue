<template functional>
    <div :class="props.classInfo">

        <ul v-for="( item, index ) in props.items" :key="index">
            <li>
                <a :href="item.href"
                   :title="item.title">
                    {{item.label}}
                </a>
            </li>
        </ul>

    </div>
</template>

<script>

  export default {

    name: 'Info',

    props:{

        items:{
            type: Object,
            required: true,
            default:() => ({
            }),
        },

        classInfo:{
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
