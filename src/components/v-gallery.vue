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

                       <div class="contentCols__item">
                            <img :src="this.sortedWorks[0].image" class="gallery__mainpic" alt="T1">
                        </div>
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
@import "../assets/css/style.css";
</style>