<template>
    <router-link
        :to="{ name: 'Novel info', params: { id: id } }"
        style="text-decoration: none; color: inherit;">
    <div class="card">
        <img :src="cardImage" :alt="'img: ' + name">
        <div class="info">
            <div class="top">
                <div class="name"> {{ name }}</div>
                <div class="genre"> {{ parseGenre(genre) }}</div>
            </div>
            <div class="bottom">
                <div
                class="status"
                :class="{
                    done: status == 0,
                    wip: status == 1,
                    frozen: status == 2,
                    grave: status == 3
                }">
                    {{ parseStatus(status) }}
                </div>
                <div
                class="stars"
                :style="{width: rating / 5 * 75 + 'px'}"
                >
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="views">
                    {{ Math.abs(viewCount) > 999 ? ((Math.abs(viewCount)/1000).toFixed(1)) + 'k' : Math.abs(viewCount) }}
                    <i class="fas fa-eye"></i>
                </div>
            </div>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: '?Name?'
        },
        description: {
            type: String,
            default: '?Description?'
        },
        genre: {
            type: Number,
            default: 0
        },
        status: {
            type: Number,
            default: 0
        },
        rating: {
            type: Number,
            default: 5
        },
        viewCount: {
            type: Number,
            default: 0
        },
        cardImage: {
            type: String,
            default: 'https://via.placeholder.com/315x140'
        }
    },
    data () {
        return {

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
.card {
    &:hover {
        cursor: pointer;
    }

    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    width: 315px;
    height: 200px;
    color: white;

    img:hover {
        filter: brightness(90%);
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 7px;
        background-color: #202020;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    .top {
        display: flex;
        gap: 5px;
        align-items: flex-end;
    }

    .name {
        font-weight: 700;
    }

    .genre {
        font-size: smaller;
        text-decoration: none;
    }

    .bottom {
        display: flex;
        gap: 5px;
        align-items: center;
    }

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

    .stars {
        display: flex;
        font-size: smaller;
        color: #FFF511;
        overflow: hidden;
        width: 75px;
    }

    .views {
        margin-left: auto;
        color: #707070;
    }
}

</style>