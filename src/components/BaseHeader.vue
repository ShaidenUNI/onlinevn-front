<template>
    <div class="nav">
        <div class="left">
            <router-link :to="{ name: 'Front page' }">
                <logo/>
            </router-link>
            <router-link :to="{ name: 'Novel library' }">
                <header-button msg="Библиотека"/>
            </router-link>
            <router-link :to="{ name: 'About' }">
                <header-button msg="О нас"/>
            </router-link>
            <search-bar/>
        </div>
        <div class="right">
            <create-novel-button/>
            <profile-button/>
        </div>
    </div>
</template>

<script>
import HeaderButton from './UI/HeaderButton.vue'
import Logo from './Logo.vue'
import SearchBar from './UI/SearchBar.vue'
import CreateNovelButton from './UI/CreateNovelButton.vue'
import ProfileButton from './UI/ProfileButton.vue'
export default {
    components: { HeaderButton, Logo, SearchBar, CreateNovelButton, ProfileButton },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.nav {
    background-color: #434343;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #545454;
}

.left, .right {
    display: flex;
    align-items: center;
    gap: 20px;
}

a {
    text-decoration: none;
}

</style>