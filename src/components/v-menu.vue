<template>
      <div class="bottom">

        <div class="bottom_button">
            <button class="btn btn-pink btn-big"><span>Хочу татуировку</span></button>
        </div>

        <div class="menuBlock widthContainer">
            <ul class="menu">
                <li class="menu__item active">
                    <div class="menu__itemContainer">
                        <span class="menu__arrow left"></span>
                        <span @click="showIntro" class="menu__text">Главная</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
                <li class="menu__item">
                    <div class="menu__itemContainer" @click="showProfile">
                        <span class="menu__arrow left"></span>
                        <span @click="showProfile" class="menu__text">О мастере</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
                <li class="menu__item ">
                    <div class="menu__itemContainer">
                        <span class="menu__arrow left"></span>
                        <span @click="showGallery" class="menu__text">Галерея работ</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
                <li class="menu__item">
                    <div class="menu__itemContainer">
                        <span class="menu__arrow left"></span>
                        <span @click="showFaq" class="menu__text">Что надо знать</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
                <li class="menu__item">
                    <div class="menu__itemContainer">
                        <span class="menu__arrow left"></span>
                        <span @click="showReviews" class="menu__text">Отзывы</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
                <li class="menu__item ">
                    <div class="menu__itemContainer">
                        <span class="menu__arrow left"></span>
                        <span @click="showPrices" class="menu__text">Цены</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
                <li class="menu__item">
                    <div class="menu__itemContainer">
                        <span class="menu__arrow left"></span>
                        <span @click="showContacts" class="menu__text">Контакты</span>
                        <span class="menu__arrow right"></span>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        
</template>

<script>
export default {
    name: "v-menu",
    methods: {
        showProfile() {
            this.$emit('toggle', '1')
        },
        showIntro() {
            this.$emit('toggle', 0)
        },
        showGallery() {
            this.$emit('toggle', 3)
        },
        showFaq() {
            this.$emit('toggle', 4)
        },
        showPrices() {
            this.$emit('toggle', 5)
        },
        showReviews() {
            this.$emit('toggle', 6)
        },
        showContacts() {
            this.$emit('toggle', 7)
        },
    }

}
</script>

<style>
@import "../assets/css/style.css";

</style>