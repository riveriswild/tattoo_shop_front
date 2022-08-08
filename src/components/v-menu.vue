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
@import "../assets/css/width-media.css";

.btn {
    display: inline-block;
    display: inline-flex;
    transition: background-color 0.3s 0s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

/* aqua */

.btn-aqua {
    background-color: #75cfd0;
    color: #ffffff;
}

.btn-aqua:hover {
    background-color: #82e1e2;
    
}

.btn-aqua:active {
    background-color: #2cd0c8;
}

/* pink */

.btn-pink {
    background-color: #F7567C;
    color: #ffffff;
}

.btn-pink:hover {
    background-color: #ff8296;

}


.btn-pink:active {
    background-color: #f73e5a;
}

/* size */

.btn-mid {
    height: 64px;
    vertical-align: middle;
    width:100px;
    font-size: 18px;
}

.btn-big {
    height: 60px;
    font-size: 24px;
    font-weight: 600;
    padding-left:20px;
    padding-right: 20px;
}

.btn-withArrowLeft span {
    display: block;
    text-align: center;
}

.btn-withArrowLeft span:before {
    content: ' ';
    background: url('../assets/svg/tri.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 10px;
    height: 20px;
    display: block;
    position: absolute;
}

/* arrow left + mid */

.btn-mid.btn-withArrowLeft span {
    margin-left: 27px;
}

.btn-mid.btn-withArrowLeft span:before {
    left: 27px;
}
.menuBlock {
    margin: 0 auto;
}

.menu {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu__item {
    /*flex*/
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}

.menu__itemContainer {
    border-radius: 20px;
    color: #5D576B;
    margin: 0;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    position: relative;
    z-index: 1;
}
.menu__itemContainer:after {
    content: " ";
    position: absolute;
}

.menu__item.active .menu__itemContainer {
    z-index: 5;
}

.menu__item:hover {
    cursor: pointer;
}

.menu__item:hover  .menu__itemContainer {
    color: #5D576B;
}

.menu__item.active  .menu__itemContainer {
    background-color: #75CFD0;
    color: #ffffff;
}

.menu__item.active  .menu__itemContainer:after {

    background-color: #75CFD0;
    left: -15px;
    right: -15px;
    top:0;
    bottom:0;
    border-radius: 20px;
}

.menu__text, .menu__arrow {
    position: relative;
    z-index: 10;
}


.menu__arrow {
    width: 8px;
    height: 14px;
    background: url('../assets/svg/tri.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    visibility: hidden;
}

.menu__item.active .menu__arrow {
    visibility: visible;
}

.menu__arrow.right {
    transform: rotate(180deg);
}

/* footer*/

.footer {
    font-size: 16px;
    color: #5D576B;
    font-weight: 600;
    padding-bottom: 10px;
}

.footer__link {
    color: #5D576B;
}

.footer__container {
    display: flex;
    justify-content: space-between;
}

.bottom {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.bottom_button {
    text-align: center;
}


</style>