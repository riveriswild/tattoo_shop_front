<template>

  <div class="viewContent__item">
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">Галерея работ</div>

                    <div class="contentCols contentCols--gallery">

                        <div class="rbButtons">
                            <div @click="showNew" class="rbButtons__item active"><a href="#" class="btn btn-aqua btn-mid">Свежие работы</a></div>
                            <div @click="showOld" class="rbButtons__item"><a href="#" class="btn btn-aqua btn-mid">Зажившие</a></div>
                            <div @click="showSketch" class="rbButtons__item"><a href="#" class="btn btn-aqua btn-mid">Эскизы</a></div>
                        </div>

                      <!--  <div class="contentCols__item">
                            <img :src="this.sortedWorks[0].image" class="gallery__mainpic" alt="T1">
                        </div>-->
                        <div class="contentCols__item gallery">
                            <div v-for="item in this.sortedWorks" v-bind:key="item.id">
                                    <span class="gallery__item"><img :src="item.image"></span>
                            </div>


                        </div>

                    </div>


                </div>
                <!--bordered content-->

            </div>
</template>


<script>
import { mapActions, mapGetters} from 'vuex';

export default {
    name: 'v-template',
    components: {},
        props: {},
        data() {
            return {
                sortedWorks: [],
                selected: 'new',
            }
        },
        computed: {
            ...mapGetters([
                'WORKS'
            ]),

        },
        watch: {
            selected: {
                handler: "sortByStatus"
            }
        },

        methods: {
            ...mapActions([
                'GET_WORKS_FROM_API'
                ]),

                sortByStatus(){
                let vm = this
                this.sortedWorks = [...this.WORKS]
                this.sortedWorks = this.sortedWorks.filter(function(item) {
                    console.log(item)
                    console.log(vm)
                   
                    return item.image_status === vm.selected
                })
                console.log('sorted', this.sortedWorks)
                },
                
                showOld(){
                    return this.selected = 'old'
                },
                showNew(){
                    return this.selected = 'new'
                },
                showSketch(){
                    return this.selected = 'sketch'
                }
        },
    async created() {
        await this.GET_WORKS_FROM_API()
        this.sortByStatus()
    }
}
</script>

<style>
.widthContainer {
    margin: 0 auto;
}

.widthContainer {
    max-width: 1452px;
}

@media only screen  and (max-width: 1000px) {
    .widthContainer {
        max-width: 1000px;
    }
}

.contentTitle {
    font-size: 32px;
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 20px;

}

.contentCols {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentCols--gallery {
    align-items: stretch;
}

.contentCols.top {
    align-items: flex-start;
}

.contentCols__item + .contentCols__item {
    padding-left: 20px;
}

.contentCols--gallery .contentCols__item {
    flex-basis: 50%;
}

.contentCols--gallery .contentCols__item:first-child {
    text-align: right;
    padding: 5px 0;
}

.gallery__mainpic {
    height: 100%;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
}

.gallery__item {
    flex-basis: 100px;
    height: 100px;
    overflow: hidden;
    margin: 5px;
    cursor: pointer;
}

.gallery__item.active, .gallery__item:hover {
    opacity: 0.50;
}

.gallery__item img {
    width: 120%;
}
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
.rbButtons {
    position: absolute;
    left:0;
    width: 275px;
}

.rbButtons.right {
    left: auto;
    right: 0;
    text-align: right;
}

.rbButtons__item {
    margin-bottom: 20px;
}

.rbButtons__item .btn {
    transition: all 0.3s 0s ease-in-out;
}

.rbButtons .btn-mid {
    width: 239px;
    white-space: nowrap;
}

.rbButtons__item.active .btn-mid {
    width: 275px;
}
</style>