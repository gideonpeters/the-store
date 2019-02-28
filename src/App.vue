<template>
  <div >
    <Header />
    <transition name="fade">
      <modal />
    </transition>
      <my-mask />
    <transition name="fade">
    <router-view />
    </transition>
    
  </div>

</template>

<script>
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';
import myMask from './components/Mask.vue';

export default {
  components: {
    Header,
    Modal,
    myMask,
  }
}
</script>

<style lang="scss">
 @import "./assets/main.scss";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
  .appear-enter-active {
    animation: appear-animation .5s;
  }
  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }
  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>
