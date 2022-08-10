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

.review {
    overflow-x: auto;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.review::-webkit-scrollbar {
  display: none;
}

.review__content {
    display: flex;
}

.review__item {
    flex-basis: 450px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 100px;
    margin-bottom: 20px;
}

.review__image {
    font-size: 0;
    margin-bottom: 33px;
}

.review__image img {
    width: 45%;
}

.review__image img + img {
    margin-left: 19px;
}

.review__name {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 18px;
}

.review__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
}

</style>