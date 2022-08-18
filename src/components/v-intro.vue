<template>
    <div class="full">
                     <div class="viewContent__item">

                сюда галерею

            </div>

                <!--bordered content-->

            </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'v-intro',
    components: {},
        props: {},
        data() {
            return {
                smth: {},
            }
        },
        computed: {
            ...mapGetters([
                'PROFILE',
                
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PROFILE_FROM_API',
                
            ]),
    },
    async created() {
      await this.GET_PROFILE_FROM_API()

    }
}

</script>

<style>
@import "../assets/css/style.css";
</style>