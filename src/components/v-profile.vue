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

.view {
    overflow: hidden;
}

.viewContent {
    display: flex;
    position: relative;
}

.viewContent__item {
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 0;
}

/* CONTENT */

.contentTitle {
    font-size: 32px;
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 20px;

} 

.contentCols {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentCols--gallery {
    align-items: stretch;
}

.contentCols.top {
    align-items: flex-start;
}

.contentCols__item + .contentCols__item {
    padding-left: 20px;
}

.text {
    font-size: 18px;
    font-weight: 400;
    color: #000000;
}

.text p {
    margin-bottom: 10px;
}
</style>