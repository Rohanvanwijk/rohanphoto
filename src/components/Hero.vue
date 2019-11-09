<template>
    <div class="hero">
        <h1>{{ HeroTitle }}</h1>
        <img :src="imageSource" alt="Image" />
    </div>
</template>
<script>
export default {
    name: 'Hero',
    props: {
        HeroTitle: String,
        imageSource: String,
    }
    
}
</script>
<style lang="scss" scoped>
.hero {
    padding: 0;
}

</style>