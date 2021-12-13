<template>
    <div class="novel-cards">
        <div v-for="novel in novels" :key="novel.id">
            <novel-card v-bind="novel" />
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
                    console.log(this.novels)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.novel-cards {
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
}
</style>
