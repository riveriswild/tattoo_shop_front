<template>
  
    <div class="view">
        <div class="viewContent" style="left: -600vw;">
            <!--СЛАЙД-->
            <div class="viewContent__item">

                сюда галерею

            </div>
            <!--СЛАЙД-->

            <!--СЛАЙД-->
            <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">О мастере</div>

                    <div class="contentCols">
                        <div class="contentCols__item">
                            <img src="../assets/img/photo1.png" alt="Nati">
                        </div>
                        <div class="contentCols__item">
                            <div class="text">
                                <p>{{INFO.info}}</p>
                            </div>
                        </div>
                        <div class="contentCols__item">
                            <img src="../assets/img/photo2.png" alt="Tattoo">
                        </div>
                    </div>


                </div>
                </div>
        </div>
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
                'INFO',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PROFILE_FROM_API',
                'GET_INFO_FROM_API',
            ]),
    },
    async created() {
      await this.GET_PROFILE_FROM_API()
       await this.GET_INFO_FROM_API()

    }
}

</script>

<style>

</style>