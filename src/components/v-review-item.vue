<template>
<div class="review__item">

        <div class="review__image">

           <img :src="clt_review.client_image" class="review__photo">
            <img :src="clt_review.tattoo_image" class="review__tattoo">
        </div>

        <div class="review__name">{{clt_review.client_name}}</div>

        <div class="review__text">
            {{clt_review.client_review}}
            check
        </div>

    </div>
                           
</template>

<script>

export default {
    name: 'v-review-item',
    components: {},
        props: {
            clt_review: {
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