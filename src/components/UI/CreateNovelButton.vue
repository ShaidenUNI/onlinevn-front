<template>
    <div class="create-novel">
        <button class="text">Создать новеллу</button>
        <button class="plus"><i class="fas fa-plus"></i></button>
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
.text {
    font-family: 'Roboto Condensed', sans-serif;
    padding: 12px;
    font-size: 18px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: 2px solid #70c56f;
    border-right: none;
    background-color: #8feb8d;
    color: #343434;
    cursor: pointer;
}

.text:hover {
    background-color: #70c56f;
}

.plus {
    height: 50px;
    width: 50px;

    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    background-color: #8feb8d;
    border: 2px solid #70c56f;
    color: #53903D;
    padding: 12px;
    font-size: 18px;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
}

.plus:hover {
    background-color: #70c56f;
}
</style>