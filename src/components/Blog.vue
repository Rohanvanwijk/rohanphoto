<template>
    <div class="blog container">
        <h1 class="blog__title">{{ $route.params.title }}</h1>
        <div class="blog__intro">{{ intro }} Vandaag wezen fotograferen in het bos genaam t Konings hof.</div>
        <div class="blog__photos">
            <img v-for="photo in images" v-bind:key="photo" :src="photo" alt="photo" />
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'Blog',
    props: {
        pageTitle: String,
        intro: String,
        images: [String]
    }
    
}
</script>
<style lang="scss" scoped>
.blog {
    &__title {
        margin: 4rem 0;
        font-size: 14rem;

    }
    &__intro {
        margin-bottom: 2rem;

    }
    &__photos {
        img {
            width: 100%;
        }
    }
}

</style>