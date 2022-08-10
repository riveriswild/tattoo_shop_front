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
.pricelist {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pricelist__col--main {
    flex-basis: 686px;
    padding-top: 37px;
}

.pricelist__col--calc {
    width: 450px;
}

.pricelist__text {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 50px;
}

.pricelist__prices {
    display: flex;
    justify-content: space-between;
}

.pricelist__imgContainer {
    width: 215px;
    height: 215px;
    overflow: hidden;
    display: block;
}

.pricelist__img {
    width: 100%;
}

.pricelist__price {
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    margin-top: 10px;
    display: block;
}

.pricelist__calc .btn {
    width: 333px;
}

</style>