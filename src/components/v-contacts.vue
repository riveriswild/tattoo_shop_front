<template>
   <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">Контакты</div>

                    <div class="contact">
                        <div class="contact__image">
                            <img src="../assets/img/photo-cont.png">
                        </div>

                        <div class="image__socmed"> 
                            <a href="#" class="contact_sm">{{INFO.vk}}<img src="../assets/svg/vk.svg"></a>
                            <a href="#" class="contact_sm">{{INFO.phone_number}}<img src="../assets/svg/tel.svg"></a>
                            <a href="#" class="contact_sm">{{INFO.telegram}}<img src="../assets/svg/tg.svg"></a>
                        </div>
                    </div>

                </div>
                <!--bordered content-->

            </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'v-contacts',
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