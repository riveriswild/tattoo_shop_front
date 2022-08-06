<template>
    <div class="full">

    <div class="header">
        <h1 class="title">Nati Tattoo</h1>

        <div class="header__button">
            <div class="header__buttonContainer widthContainer">
                <p>{{PROFILE.name}}</p>
                <a href="#" class="btn btn-aqua btn-mid btn-withArrowLeft"><span>Про нати</span></a>
            </div>
        </div>
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

</style>