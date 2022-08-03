<template>
   <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">Цены</div>

                    <div class="pricelist">

                        <div class="pricelist__col pricelist__col--main">
                            <div class="pricelist__text">
                                Текст какой-то про цены, или как выбрать что-то, какие тату и почему разница в цене.
                            </div>

                            <div class="pricelist__prices">
                                <div class="pricelist__item">
                                    <div class="pricelist__one">
                                        <span class="pricelist__imgContainer"><img class="pricelist__img" src="img/tattoo4.png"></span>
                                        <span class="pricelist__price">От 1500₽</span>
                                    </div>
                                </div>

                                <div class="pricelist__item">
                                    <div class="pricelist__one">
                                <span class="pricelist__imgContainer">
                                    <img class="pricelist__img" src="img/tattoo4.png">
                                </span>
                                        <span class="pricelist__price">
                                    От 3000₽
                                </span>
                                    </div>
                                </div>

                                <div class="pricelist__item">
                                    <div class="pricelist__one">
                                <span class="pricelist__imgContainer">
                                    <img class="pricelist__img" src="img/tattoo4.png">
                                </span>
                                        <span class="pricelist__price">
                                    От 4000₽
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pricelist__col pricelist__col--calc">
                            <div class="pricelist__text">
                                Еще что-то про расчет цены, текст текст и так далее, ну сюда напишем что-нибудь, понятно.
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
export default {
    name: 'v-prices'

}
</script>

<style>

</style>