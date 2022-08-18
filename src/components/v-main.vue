<template>
<div>
    <div class="full">

    <div class="header">
        <h1 class="title">Nati Tattoo</h1>

        <div class="header__button">
            <div class="header__buttonContainer widthContainer">
                <a href="#" class="btn btn-aqua btn-mid btn-withArrowLeft"><span>Про нати</span></a>
            </div>
        </div>
    </div>

    <div class="view">

 <div v-if="this.cardMenu==0">      
<v-intro />
</div> 



<div v-if="this.cardMenu==1">
<v-profile />
</div>



<div  v-if="this.cardMenu==3">
<v-gallery />
</div>

<div v-if="this.cardMenu==4">
<v-faq />
</div>

<div v-if="this.cardMenu==6">
<v-reviews />
</div>

<div v-if="this.cardMenu==5">
<v-prices />
</div>

<div v-if="this.cardMenu==7">
<v-contacts />
</div>


<v-menu 
:cardMenu="cardMenu"
@toggle="toggleCard($event)"
 />
        <div class="footer">
            <div class="footer__container widthContainer">
                <div class="footer__copy">&copy; 2022 Nati Gaiduk</div>
                <div class="footer__by">
                    <a href="#" class="footer__link">design</a> & <a href="#" class="footer__link">code</a>
                    <a href="#" class="footer__link">design</a> & <a href="#" class="footer__link">code</a>
                </div>
            </div>
        </div>
        </div>
        </div>
</div>
</template>

<script>
import vMenu from "./v-menu.vue"
import vIntro from "./v-intro.vue"

import vProfile from "./v-profile.vue"
import vContacts from "./v-contacts.vue"
import vFaq from "./v-faq.vue"
import vPrices from "./v-prices.vue"
import vGallery from "./v-gallery.vue"
import vReviews from "./v-reviews.vue"
export default {
    name: 'v-main',
    data() {
    return {
        cardMenu: 0,
    }
    },
    components: {
        vIntro,
        vMenu,
        vProfile,
        vContacts,
        vFaq,
        vPrices,
        vGallery,
        vReviews
    },
    methods: {
        toggleCard(card) {
            this.cardMenu = card
            console.log(this.cardMenu)
        }
    }


}
</script>

<style>
@import "../assets/css/style.css";

</style>