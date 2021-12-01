<template>
    <div v-for="novel in novels" :key="novel.id">
        <novel-card v-bind="novel"/>
    </div>
</template>

<script>
import NovelCard from '../components/NovelCard.vue'
import axios from 'axios'
import { onMounted } from "vue"

let API_URL = 'http://localhost:8081'

export default {
    components: { NovelCard },
    data() {
        return {
            novels: [],
        }
    },
    setup() {
        onMounted (() => {
            this.getNovels()
        })
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

<style></style>
