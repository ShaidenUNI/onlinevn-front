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
            <div class="content">
                <router-link :to="{ name: 'Novel info', params: { id: novel.id } }">
                    <button>Открыть</button>
                </router-link>
                id: {{ novel.id }}, Name: {{ novel.name }}, Desc: {{ novel.description }}, Views: {{ novel.viewCount}}
            </div>
            <button @click="deleteCurrent(novel.id)">Удалить</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

let API_URL = 'http://localhost:8081'
let genreAmount = 6

export default {
    name: 'AdminPanel',
    created () {
        this.getNovels()
    },
    data() {
        return {
            novels: [],
        }
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
                viewCount: Math.floor(Math.random() * 30000),
                rating: Math.random() * 5.0,
                status: Math.floor(Math.random() * 4),
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
        deleteCurrent(id) {
            axios.delete(API_URL + '/novel/' + id)
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

<style lang="scss" scoped>
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

    .novel-item {
        display: flex;
        gap: 5px;
        font-family: 'Roboto', sans-serif;
        background-color: #cecece;
        padding: 4px;
        justify-content: space-between;

        button {
            padding: 5px;
        }

        .content {
            align-self: center;
        }
    }
}

</style>
