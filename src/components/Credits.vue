<template functional>
    <div>
        <div  v-for="( item, index ) in props.items" :key="index" class="[ seo ] [ grid__col  grid__col--l50 ] ">
            <p v-html="item" class="[ seo__copy ]">{{item}}</p>
        </div>
    </div>
</template>

<script>
	export default {
        name: "Credits",

        props: {

            items: {
                type: Array,
                required: true,
                default: () => ([]),
            },

        },
    }
</script>
