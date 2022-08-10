<template>
<div>
     <div class="pricelist__item">
        <div class="pricelist__one">
            <span class="pricelist__imgContainer">
                <img class="pricelist__img" 
                    :src="price_itm.tattoo_image">
                    </span>
            <span class="pricelist__price">{{price_itm.price}}</span>
        </div>
    </div>

</div>
</template>

<script>

export default {
    name: 'v-price-item',
    components: {},
        props: {
            price_itm: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data() {
            return {
                smth: {},
            }
        },
        computed: {},

        methods: {},
    async created() {}
}
</script>

<style>
</style>