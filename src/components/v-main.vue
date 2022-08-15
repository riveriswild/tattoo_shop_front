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



<div v-if="this.cardMenu==3">
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

.header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
    margin-top: 82px;
}

.header__button {
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(left,  #ffffff 0%, #ffffff 50%, #75cfd0 51%, #75cfd0 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  #ffffff 0%,#ffffff 50%,#75cfd0 51%,#75cfd0 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  #ffffff 0%,#ffffff 50%,#75cfd0 51%,#75cfd0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#75cfd0',GradientType=1 ); /* IE6-9 */

}

.header__buttonContainer {
    text-align: right;
    background-color: #ffffff;
}


.widthContainer {
    max-width: 1452px;
}

@media only screen  and (max-width: 1000px) {
    .widthContainer {
        max-width: 1000px;
    }
}

/* .header {
    flex-basis:229px;
    flex-grow: 0;
    flex-shrink: 3;
}


.title {
    font-size: 48px;
    line-height: 59px;
} */



.header__button .btn {
    width: 241px;
}

@media only screen  and (max-width: 1165px) {
    .header__button .btn {
        width: 200px;
        font-size: 15px;
    }
}


.view {
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 548px;
}


.bottom {
    flex-basis: 164px;
    flex-grow: 0;
    flex-shrink: 2;
}


.bottom_button .btn {
    width: 450px;
    margin-top: -30px;
    top: -5px
}

/* bottom menu*/

.menu__item {
    flex-basis: 140px;
    flex-shrink: 1;
    flex-grow: 0;
    padding: 0;
}

.menu__itemContainer {
    height: 41px;
    font-size: 18px;
}


.menu__arrow.left {
    margin-right: 24px;
}
.menu__arrow.right {
    margin-left: 24px;
}

body {
    background: #ffffff;
    font-family: 'Raleway', sans-serif;
    height: 100vh;
    overflow-y: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
}

h1, h2, p {
    padding: 0;
    margin: 0;
}



@media only screen  and (max-width: 1165px) {
    .menu__item {
        flex-basis: 130px;
    }

    .menu__itemContainer {
        height: 41px;
        font-size: 15px;
    }

    .menu__arrow.left {
        margin-right: 20px;
    }
    .menu__arrow.right {
        margin-left: 20px;
    }
}

</style>