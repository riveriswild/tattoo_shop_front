<template>

  <div class="viewContent__item">
    
                <!--bordered content-->
                <div class="content widthContainer">
                    <div class="contentTitle">Галерея работ</div>

                    <div class="contentCols contentCols--gallery">
                        <div class="contentCols__item">
                            <img src="img/photo2.png" class="gallery__mainpic" alt="T1">
                        </div>
                        <div class="contentCols__item gallery">

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
                status: [
                    {name: 'Свежие работы', value: 'new'},
                    {name: 'Зажившие работы', value: 'old'},
                    {name: 'Эскизы', value: 'sketch'},
                ],
                sortedWorks: [],
                selected: 'Свежие работы'
            }
        },
        computed: {
            ...mapGetters([
                'WORKS'
            ]),
        },

        methods: {
            ...mapActions([
                'GET_WORKS_FROM_API'
                ]),

                sortByStatus(status){
                let vm = this
                this.sortedWorks = [...this.WORKS]
                this.sortedWorks = this.sortedWorks.filter(function(item) {
                    vm.selected = status.name
                    return item.status === status.name
                })
                }

        },
    async created() {
        await this.GET_WORKS_FROM_API()
        this.sortByStatus()
    }
}
</script>

<style>

</style>