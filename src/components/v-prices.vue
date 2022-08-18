<template>
   <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">Цены</div>

                    <div class="pricelist">

                        <div class="pricelist__col pricelist__col--main">
                            <div class="pricelist__text">
                                {{INFO.price_info_sec}}
                            </div>

                            <div class="pricelist__prices">
                               

                                <v-price-item
                            v-for="price in PRICES"
                            :key="price.id"
                            :price_itm="price"
                            />

                            </div>
                        </div>

                        <div class="pricelist__col pricelist__col--calc">
                            <div class="pricelist__text">
                                {{INFO.price_info_sec}}
                            </div>

                            <div class="pricelist__calc">
                                <button class="btn btn-aqua btn-mid">Рассчитать цену</button>
                            </div>
                        </div>

                    </div>


                </div>
                <!--bordered content-->

            </div>
</template>

<script>
import vPriceItem from "./v-price-item.vue"
import { mapActions, mapGetters} from 'vuex'
export default {
    name: 'v-prices',
    components: { vPriceItem},
        props: {
        },
        data() {
            return {
                smth: {},
            }
        },
        computed: {
            ...mapGetters([
                'PRICES',
                'INFO'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRICES_FROM_API',
                'GET_INFO_FROM_API'
                
            ]),
    },
    async created() {
      await this.GET_PRICES_FROM_API()
      await this.GET_INFO_FROM_API()

    }
}
</script>

<style>
@import "../assets/css/style.css";

</style>