<template>
    <div class="card">
        <img :src="cardImage" :alt="'img: ' + name">
        <div class="info">
            <div class="top">
                <div class="name"> {{ name }}</div>
                <div class="genre"> {{ genre }}</div>
            </div>
            <div class="bottom">
                <div
                class="status"
                :class="{
                    done: status == 'Завершен',
                    wip: status == 'В процессе',
                    frozen: status == 'Заморожен',
                    grave: status == 'Брошен'
                }">
                    {{ status }}
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
                    {{ views }}
                    <i class="fas fa-eye"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'Когда плачут цикады',
            genre: 'драма',
            status: 'Завершен',
            cardImage: 'https://via.placeholder.com/315x140',
            rating: 3.29,
            views: 11231
        }
    }
}
</script>

<style scoped>
.card {
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    width: 315px;
    height: 200px;
    color: white;
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
</style>