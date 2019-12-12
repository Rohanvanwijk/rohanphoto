<template>
    <div class="hero">
        <h1 class="page-title">{{ HeroTitle }}</h1>
        <h2>{{ feature[0].title }}</h2>
        <router-link to="/blogs" class="enter-website">Enter website</router-link>
        <img src="../assets/images/showcase/forest.jpg" alt="Image" class="img"/>
        <MetaData />
    </div>
</template>
<script>
import MetaData from './MetaData.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'Hero',
    components: {
        MetaData
    },
    props: {
        HeroTitle: String
    },
    computed: mapGetters(['feature']),
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
    font-size: 10rem;
    color: white;
    text-shadow: 4px 4px #00000045;
    @media only screen and (min-width: 600px) {
        font-size: 16rem;
    }

}
.coming {
    display: none;
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: opacity 1s ease;
    left: 0;
    background-color: white;
    width: 100%;
    text-align: center;
    padding: .5rem 0;
    &Up {
        opacity: 1;
    }
    @media only screen and (min-width: 600px){
        display: block;
    }
}
.enter-website {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: black;
    padding: .5rem;
    color: white;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        box-shadow: 4px 0px 10px white;
    }

}
</style>