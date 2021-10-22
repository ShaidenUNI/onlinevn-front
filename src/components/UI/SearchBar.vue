<template>
    <div class="search">
        <form action="#" method="get">
            <input type="text" placeholder="Поиск...">
            <button type="submit"><i class="fas fa-search"></i></button>
        </form>
    </div>
</template>

<script>
import '../../../node_modules/@fortawesome/fontawesome-free/js/all.min.js'

export default {
    data () {
        return {

        }
    }
}
</script>

<style scoped>

input {
    font-family: 'Roboto Condensed', sans-serif;
    padding: 12px;
    font-size: 18px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 2px solid #343434;
    background-color: #434343;
    color: #ffffff;
}

button {
    height: 50px;
    width: 50px;

    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    background-color: #343434;
    border: none;
    color: #ffffff;
    font-size: 18px;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
}
</style>