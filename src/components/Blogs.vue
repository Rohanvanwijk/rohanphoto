<template>
    <div class="blogs container">
        <h1>My photographs</h1>
        <div class="blogs__container">
            <div v-for="blog in blogs" v-bind:key="blog" class="blogs__item">
                <img :src="blog.images[0]" alt="photo">
                <router-link :to="blog.path + '/' + blog.title" class="blog-link" pageTitle="blog.title">{{ blog.title }}</router-link>
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
                    path: '/blog',
                    title: 't Koningshof',
                    intro: 'Het was leuk met Blom',
                    images: [
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg',
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg',
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg'
                    ]
                },
                {
                    path: '/blog',
                    title: 'Parijs',
                    images: [
                        'http://lizzy.580626.infhaarlem.nl/images/l9l.jpg'
                    ]
                },
                {
                    path: '/blog',
                    title: 'Dolomieten',
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
    }
}
.blog-link {
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
</style>