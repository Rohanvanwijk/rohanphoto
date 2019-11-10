<template>
    <div class="blogs container">
        <div class="banner">
            <img class="img" src="../assets/banner.jpg" alt="dd" />
        </div>
        <h1>Blogs</h1>
        <div class="blogs__container">
            <div v-for="blog in blogs" v-bind:key="blog" class="blogs__item">
                <img :src="blog.images[0]" alt="photo">
                <a :href="blog.path">{{ blog.title }}</a>
            </div>

        </div>
    </div>
    
</template>
<script>
export default {
    name: 'Blogs',
    data: function() {
        return {
            blogs: [
                {
                    path: '/blogs/blog/konginshof',
                    title: 't Koningshof',
                    intro: 'Het was leuk met Blom',
                    images: [
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg',
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg',
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg'
                    ]
                },
                {
                    path: '',
                    title: 'Rohan',
                    images: [
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg'
                    ]
                },
                {
                    path: '',
                    title: 'test',
                    images: [
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg'
                    ]
                }
            ]
        }
    }
    
}
</script>
<style lang="scss" scoped>
.blogs {
    &__container {
        margin: 0 -2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__item {
        flex-basis: 25%;
        margin: 0 2rem;
        position: relative;
        img {
            width: 100%;
        }
        a {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(white, 0.7);
            display: block;
            width: 100%;
            padding: 2rem;
            font-weight: bold;
            text-decoration: none;
            color: black;
        }

    }
}
.banner {
    width: 100%;
    height: 50vh;
    overflow: hidden;
    .img {
        width: 100%;
        object-fit: cover;
    }
}

</style>