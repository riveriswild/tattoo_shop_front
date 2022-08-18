<template>
  
        
        <div class="viewContent">
            <!--СЛАЙД-->
            <!--СЛАЙД-->

            <!--СЛАЙД-->
            <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">О мастере</div>

                    <div class="contentCols">
                        <div class="contentCols__item">
                            <img :src="PROFILE.image" alt="Nati">
                        </div>
                        <div class="contentCols__item">
                            <div class="text">
                                <p>{{PROFILE.description}}</p>
                               
                            </div>
                        </div>
                        <div class="contentCols__item">
                            <img :src="PROFILE.image_work" alt="Tattoo">
                        </div>
                    </div>


                </div>
                </div>
        </div>
        
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'v-profile',
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
@import "../assets/css/style.css";
</style>