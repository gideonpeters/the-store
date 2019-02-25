<template>
  <div class="mask" v-if="showModal" @click="showOrHideModal"></div>
</template>

<script>
export default {
    computed: {
        showModal() {
         return this.$store.getters.getShowModal;
     },

    },
    methods: {
        showOrHideModal() {
            return this.$store.dispatch('showOrHideModal');
        }
    }
};
</script>

<style scoped>
  .mask {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 90;
  }
</style>