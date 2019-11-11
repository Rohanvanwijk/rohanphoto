<template>
    <div class="blogs container">
        <h1 @click="randomNumber(10)">My photographs</h1>
        <div class="blogs__container">
            <div v-for="blog in blogs" v-bind:key="blog" class="blogs__item">
                <img :src="blog.images[0].src[0]" alt="photo">
                <router-link :to="{ name: 'blog', params: { item: blog } }" class="blog-link" pageTitle="blog.title">{{ blog.title }}</router-link>
            </div>

        </div>
    </div>
    
</template>
<script>
export default {
    name: 'Blogs',
    data: function() {
        return {
            path: require('../assets/images/koningshof/tkoningshof-1.jpg'),
            blogs: [
                {
                    title: 't Koningshof',
                    intro: 'Vandaag naar het Koningshof (Overveen) geweest. Hieronder het resultaat. Prachtig die herfst kleuren! Het was bewolkt, maar gelukkig regende het niet!',
                    date: 'November 2019',
                    images: [
                        {
                            full: false,
                            src: [
                                require('../assets/images/koningshof/tkoningshof-3.jpg'),
                                require('../assets/images/koningshof/tkoningshof-13.jpg'),

                            ]
                        },
                        {
                            full: true,
                            src: [
                                require('../assets/images/koningshof/tkoningshof-1.jpg'),
                                require('../assets/images/koningshof/tkoningshof-11.jpg'),
                                require('../assets/images/koningshof/tkoningshof-20.jpg'),
                            ]
                        },
                        {
                            full: false,
                            src: [
                                require('../assets/images/koningshof/tkoningshof-7.jpg'),
                                require('../assets/images/koningshof/tkoningshof-18.jpg')
                            ]
                        },
                        {
                            full: true,
                            src: [
                                require('../assets/images/koningshof/tkoningshof-27.jpg'),
                                require('../assets/images/koningshof/tkoningshof-28.jpg'),
                                require('../assets/images/koningshof/tkoningshof-30.jpg'),
                            ]
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        randomNumber: function(lengthArray) {
            var max = lengthArray;
            const randomNum = Math.floor(Math.random() * max);
            alert(randomNum);
        }
    }
    
}
</script>
<style lang="scss" scoped>
.blogs {
    padding: 0 1rem;
    @media only screen and (min-width: 900px) {
        padding: 0;
    }
    &__container {
        margin: 0 -2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: column;
        @media only screen and (min-width: 900px) {
            flex-direction: row;
        }
    }
    &__item {
        flex-basis: 25%;
        margin: 0;
        position: relative;
        overflow: hidden;
        max-height: 20rem;
        @media only screen and (min-width: 900px) {
            flex-direction: row;
            margin: 0 2rem;
        }
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