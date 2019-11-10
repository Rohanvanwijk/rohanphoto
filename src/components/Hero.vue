<template>
    <div class="hero">
        <h1 class="page-title" @mouseenter="showSlogan">{{ HeroTitle }}</h1>
        <router-link to="/blogs" class="enter-website">Enter website</router-link>
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