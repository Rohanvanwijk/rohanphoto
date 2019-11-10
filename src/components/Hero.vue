<template>
    <div class="hero">
        <h1 class="page-title" @mouseenter="showSlogan">{{ HeroTitle }}</h1>
        <div class="coming" :class="{ comingUp: showedSlogan }">More coming soon...</div>
        <img src="../assets/banner.jpg" alt="Image" class="img"/>
        <MetaData />
    </div>
</template>
<script>
import MetaData from './MetaData.vue'

export default {
    name: 'Hero',
    components: {
        MetaData
    },
    props: {
        HeroTitle: String
    },
    data: function() {
        return {
            showedSlogan: false,
        }
    },
    methods: {
        showSlogan: function() {
            this.showedSlogan = true;
        },
    }
}
</script>
<style lang="scss" scoped>
.hero {
    width: 100vw;
    height: 100vh;
}
.img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.page-title {
    margin: 0;
    position: absolute;
    top: 0;
    font-size: 16rem;
    color: white;
    text-shadow: 4px 4px #00000045;
}
.coming {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 1s ease;
    left: 0;
    background-color: white;
    width: 100%;
    text-align: center;
    padding: .5rem 0;
    &Up {
        transform: translateY(0);
    }
}
</style>