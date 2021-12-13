<template>
    <div class="front-page">
        <div class="novel-cards">
            <div v-for="novel in novels" :key="novel.id">
                <novel-card v-bind="novel" />
            </div>
        </div>
    </div>
</template>

<script>
import NovelCard from '../components/NovelCard.vue'
import axios from 'axios'

let API_URL = 'http://localhost:8081'

export default {
    name: 'FrontPage',
    components: { NovelCard },
    data() {
        return {
            novels: [],
        }
    },
    created() {
        this.getNovels()
    },
    methods: {
        getNovels() {
            axios
                .get(API_URL + '/novel')
                .then((response) => {
                    this.novels = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.front-page {
    width: 1024px;
    margin: 0 auto;
    display: flex;

    .novel-cards {
        display: flex;
        gap: 10px;
        flex-flow: row wrap;
    }
}
</style>
