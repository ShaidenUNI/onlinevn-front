<template>
    <div class="errors" v-if="errors">
        <div v-for="error in errors" :key="error.id" class="error">
            {{ error }}
        </div>
    </div>
    <div class="novel-content" v-if="errors.length == 0">
        <div class="left">
            <img src="https://via.placeholder.com/300x450" alt="Novel cover">
            <button>Читать онлайн</button>
        </div>
        <div class="right">
            <div class="header">
                <div class="top">
                    <div class="name"> {{ novel.name }}</div>
                    <div
                    class="stars"
                    :style="{width: novel.rating / 5 * 90 + 'px'}"
                    >
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="bottom">
                    <div class="bl">
                        <div
                        class="status"
                        :class="{
                            done: novel.status == 0,
                            wip: novel.status == 1,
                            frozen: novel.status == 2,
                            grave: novel.status == 3
                        }">
                            {{ parseStatus(novel.status) }}
                        </div>
                        <div class="genre"> {{ parseGenre(novel.genre) }}</div>
                    </div>
                    <div class="views">
                        {{ novel.viewCount }}
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
            </div>
            <div class="description">
                {{ novel.description }}
            </div>
            <div class="screenshots">
                <div class="label">
                    Скриншоты
                </div>
                <div class="images">
                    <img src="https://via.placeholder.com/225x120" alt="Screenshot 1">
                    <img src="https://via.placeholder.com/225x120" alt="Screenshot 2">
                    <img src="https://via.placeholder.com/225x120" alt="Screenshot 3">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

let API_URL = 'http://localhost:8081'

export default {
    name: 'NovelInfo',
    created () {
        axios.get(API_URL + '/novel/' + this.$route.params.id)
            .then(response => {
                this.novel = response.data
            })
            .catch(error => {
                if (error.response.status == 404) {
                    this.errors.push('404: Novel not found')
                }
            })
    },
    data () {
        return {
            novel: {

            },
            errors: []
        }
    },
    methods: {
        parseGenre(genreNumber) {
            let genre = Number.toString(genreNumber)
            switch (genreNumber) {
                case 0:
                    genre = 'Приключения'
                    break
                case 1:
                    genre = 'Романтика'
                    break
                case 2:
                    genre = 'Драма'
                    break
                case 3:
                    genre = 'Повседневность'
                    break
                case 4:
                    genre = 'Исекай'
                    break
                case 5:
                    genre = 'Эроге'
                    break
                default:
                    break
            }

            return genre
        },
        parseStatus(statusNumber) {
            let status = Number.toString(statusNumber)
            switch (statusNumber) {
                case 0:
                    status = 'Завершен'
                    break
                case 1:
                    status = 'В процессе'
                    break
                case 2:
                    status = 'Заморожен'
                    break
                case 3:
                    status = 'Брошено'
                    break
                default:
                    status = 'В процессе'
                    break
            }
            return status
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    font-family: 'Roboto', sans-serif;
}

.errors {
    display: flex;
    justify-content: center;

    .error {
        padding: 10px;
        background-color: #a04e4e;
        border: 1px solid #d85f5f;
        border-radius: 3px;
    }
}

.novel-content {
    width: 1024px;
    margin: 0 auto;
    display: flex;
    gap: 20px;

    .left {
        display: flex;
        flex-direction: column;
        gap: 10px;

        button {
            padding: 10px;
            font-size: larger;
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: stretch;

        .header {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 2px solid #545454;

            .top {
                display: flex;
                align-items: center;
                gap: 5px;

                .name {
                    color: #ffffff;
                    font-size: 36px;
                    font-weight: 700;
                }

                .stars {
                    display: flex;
                    color: #FFF511;
                    overflow: hidden;
                    width: 90px;
                }
            }

            .bottom {
                display: flex;
                align-items: center;
                gap: 5px;

                .bl {
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    .status {
                        background-color: aquamarine;
                        color: black;
                        border-radius: 10px;
                        padding: 0 8px;
                    }

                    .done { background-color: #4BCE1D; }
                    .wip { background-color: #1DA4CE; }
                    .frozen { background-color: #cacaca; }
                    .grave { background-color: #C5451D; }

                    .genre {
                        color: #cacaca;
                        font-size: smaller;
                    }
                }
                .views {
                    margin-left: auto;
                    color: #707070;
                }
            }
        }

        .description {
            color: #ffffff;
        }

        .screenshots {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-top: auto;

            .label {
                margin-bottom: 10px;
            }

            .images {
                display: flex;
                justify-content: space-between;

                img:hover {
                    filter: brightness(90%);
                    transition: all 0.1s;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>