<template>
   <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">Отзывы</div>
                   
                    <div class="review">
                       
                        <div class="review__content">
                            
                            <v-review-item
                            v-for="review in REVIEWS"
                            :key="review.client_name"
                            :clt_review="review"
                            />
                    </div>

                </div> 
                
            </div>
            </div>
</template>
 

<script>
import vReviewItem from "./v-review-item.vue"
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'v-reviews',
    components: {
        vReviewItem
    },
        props: {},
        data() {
            return {
                smth: {},
            }
        },
        computed: {
            ...mapGetters([
                'REVIEWS'
            ])
        },

        methods: {
            ...mapActions([
                'GET_REVIEWS_FROM_API'
            ])
        },
    async created() {
         await this.GET_REVIEWS_FROM_API()
    }
}

</script>

<style>
@import "../assets/css/style.css";
</style>