<template>
    <div class="footer">
        <div class="stats">
            <div class="numbers">
                <p> {{ novelCount }}</p>
                <p> {{ assetCount }}</p>
                <p> {{ frameCount }}</p>
            </div>
            <div class="words">
                <p>визуальных новелл</p>
                <p>уникальных ассетов</p>
                <p>фреймов</p>
            </div>
        </div>
        <div class="media">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-vk"></i>
            <a href="https://github.com/ShaidenUNI/onlinevn-front"><i class="fab fa-github"></i></a>
        </div>
        <div class="extra">
            Условия пользования
        </div>
    </div>
</template>

<script>
import '../../node_modules/@fortawesome/fontawesome-free/js/all.min.js'

export default {
    data() {
        return {
            novelCount: 37, // get dynamically later
            assetCount: 451,
            frameCount: 1598,
        }
    },
}
</script>

<style scoped>
.footer {
    font-family: 'Roboto Condensed', serif;
    font-size: 18px;
    color: #cacaca;

    margin-top: auto;
    background-color: #232323;
    border-top: 2px solid #545454;
    padding: 70px 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    place-items: center;
}
.stats {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5px;
    line-height: 1.5rem;
}
.numbers {
    text-align: end;
    color: #ffffff;
    font-weight: 700;
}
.media {
    display: flex;
    font-size: 26px;
    gap: 10px;
    color: inherit;
}
a:visited {
    color: inherit;
}
</style>
