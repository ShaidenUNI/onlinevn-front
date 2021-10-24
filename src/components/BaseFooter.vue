<template>
    <div class="footer">
        <div class="stats">
            Статистика
        </div>
        <div class="media">
            Медиа
        </div>
        <div class="extra">
            Условия пользования
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            novelCount: 37,
            assetCount: 451,
            frameCount: 1598,
        }
    },
}
</script>

<style scoped>
.footer {
    margin-top: auto;
    background-color: #232323;
    border-top: 2px solid #545454;
    padding: 70px 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    place-items: center;
}
</style>
