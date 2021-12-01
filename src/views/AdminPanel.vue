<template>
    <div class="buttons">
        <button @click="createRandomNovel" class="adm-bt">
            Создать случайную новеллу
        </button>
        <button @click="deleteLastNovel" class="adm-bt">
            Удалить последнюю новеллу
        </button>

    </div>
    <div class="novel-list">
        <div v-for="novel in novels" :key="novel.id" class="novel-item">
            id: {{ novel.id }}, Name: {{ novel.name }}, Desc: {{ novel.description }}, Views: {{ novel.viewCount}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from "vue"

let API_URL = 'http://localhost:8081'
let genreAmount = 6

export default {
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
            axios.get(API_URL + '/novel')
                .then(response => {
                    this.novels = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        createRandomNovel() {
            let novel = {
                name: this.randomText(10),
                description: this.randomText(60),
                genre: Math.floor(Math.random() * genreAmount),
                viewCount: Math.floor(Math.random() * 30000)
            }
            axios.post(API_URL + '/novel', novel)
                .then(() => {
                    this.getNovels()
                })
                .catch(error => console.log(error))
        },
        deleteLastNovel() {
            axios.delete(API_URL + '/novel/' + this.novels[this.novels.length - 1].id)
                .then(() => {
                    this.getNovels()
                })
                .catch(error => console.log(error))
        },
        randomText(length) {
            let result = ''
            let characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let charactersLength = characters.length
            for (var i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                )
            }
            return result
        },
    },
}
</script>

<style scoped>
.buttons {
    display: flex;
    gap: 10px;
}
.adm-bt {
    font-family: 'Roboto', sans-serif;
    padding: 10px;
}
.novel-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.novel-item {
    font-family: 'Roboto', sans-serif;
    background-color: #cecece;
    padding: 4px;
}
</style>
