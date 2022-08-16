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
                            <img src="img/photo2.png" class="gallery__mainpic" alt="T1">
                        </div>
                        <div class="contentCols__item gallery">
                            <div v-for="item in this.sortedWorks" v-bind:key="item.id">
                                    <span class="gallery__item"><img :src="item.image"></span>
                                    <span class="gallery__item active"><img :src="item.image"></span>
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
                // status: [
                //     {name: 'Свежие работы', value: 'new'},
                //     {name: 'Зажившие работы', value: 'old'},
                //     {name: 'Эскизы', value: 'sketch'},
                // ],
                sortedWorks: [],
                selected: 'new',
            }
        },
        computed: {
            ...mapGetters([
                'WORKS'
            ]),
        
            //         filteredWorks() {
            //     if (this.sortedWorks.length) {
            //         return this.sortedWorks
            //     } else {
            //         return this.WORKS
            //     }
            // }
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
                    return this.selected = 'new'
                },
                showNew(){
                    return this.selected = 'old'
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

</style>