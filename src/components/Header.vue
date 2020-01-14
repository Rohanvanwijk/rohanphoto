<template>
    <header class="header">
        <div class="container header__container">
            <router-link to="/" class="header__title">Rohan Photo</router-link>
            <span 
            class="menu" 
            @click="showAbout"
            >
            {{ show ? 'Rohan' : 'About me' }}
            </span>
        </div>
        <div 
        :class="[
        'blok',
        show ? '' : 'blok--hide'
        ]"
        >
        <div class="container flex">
            <div class="aboutme">
                <div class="footer__profile">
                    <strong class="footer__title">Rohan</strong>
                    <img class="footer__pic" :src="picUrl" alt="rohan" />
                </div>
                <p>I love to take pictures and tel a story.</p>
            </div>
            <ul class="social">
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>Twitter</li>
            </ul>
        </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "Header",
    data: function() {
        return {
            show: false,
            picUrl: 'https://instagram.fams1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/43913466_546518409094677_5542201111286382592_n.jpg?_nc_ht=instagram.fams1-1.fna.fbcdn.net&_nc_ohc=_UskKtfBwD8AX8yb94S&oh=716efaca0e69102a95123cc14d5fcc09&oe=5E9D45AE',
        }
    },
    methods: {
        showAbout: function() {
            this.show = !this.show;
            this.$emit('childToParent');
        }
    }
}
</script>
<style scoped lang="scss">
@import '../theme/variables.scss';

.header {
    &__container {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
    }
    &__title {
        text-decoration: none;
        color: black;
    }
}
.menu {
    border-bottom: 1px solid black;
    &:hover {
        cursor: pointer;
    }
}

.blok {
    background-color: $color-primary;
    height: 20rem;
    position: absolute;
    padding: 1rem 0;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: transform .25s ease-in;
    &--hide {
        transform: translateY(30rem);
    }
}

.footer {
    &__title {
        display: block;
        font-size: 1.8rem;
    }
    &__pic {
        width: 8rem;
        border-radius: 50%;
    }
    &__profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 2rem;
    }
}
.aboutme {
    display: flex;
    align-items: center;
}
.flex {
    display: flex;
    justify-content: space-between;
}
.social {
    list-style: none;
}
</style>