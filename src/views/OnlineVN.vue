<template>
    <base-header/>
    <router-view/>
    <base-footer/>
</template>

<script>
import BaseFooter from '../components/BaseFooter.vue'
export default {
  components: { BaseFooter },

}
</script>

<style>

</style>