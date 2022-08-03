<template>
<div>
<v-intro />
<v-profile />
<v-gallery />
<v-faq />
<v-reviews />
<v-prices />
<v-contacts />
</div>
</template>

<script>
import vIntro from "./v-intro.vue"
import vProfile from "./v-profile.vue"
import vContacts from "./v-contacts.vue"
import vFaq from "./v-faq.vue"
import vPrices from "./v-prices.vue"
import vGallery from "./v-gallery.vue"
import vReviews from "./v-reviews.vue"
export default {
    name: 'v-main',
    components: {
        vIntro,
        vProfile,
        vContacts,
        vFaq,
        vPrices,
        vGallery,
        vReviews
    },


}
</script>

<style>

</style>