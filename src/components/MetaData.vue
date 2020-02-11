<template>
 <div class="meta-data">
    <div v-for="(item, key) in metadata" v-bind:key="item" class="meta-data__line">
        <span class="label">{{ key }} </span><span class="value">{{ item }}</span>
    </div>


</div>

</template>
<script>
export default {
    name: 'MetaData',
    data: function() {
        return {
            metadata: {
                Location: 'Dolomites, Italy',
                Camera: 'DJI Mavick Pro'
            },
        }
    },
}
</script>
<style lang="scss" scoped>
.meta-data {
    font-size: 1rem;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: white;
    padding: 1rem;
    height: auto;
    transition: height 300ms ease;
    &__line {
        display: flex;
        justify-content: space-between;
    }
}
.label {
    font-weight: bold;
    margin-right: 1rem;
}
.expanded {
    height: 500px;
}
</style>
