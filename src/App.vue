<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo-1.png" width="125" height="125" />

    <div class="wrapper">

      <nav class="mellemrum">
        <RouterLink to="/">START    </RouterLink>
        <!-- <RouterLink to="/about">OM MIG    </RouterLink> -->
        <!-- <RouterLink to="/portfolio">PORTFOLIO    </RouterLink> -->
        <RouterLink to="/projects">PROJEKTER    </RouterLink>
        <RouterLink to="/MyCV">MIT CV</RouterLink>
      </nav>
    </div>
  </header>


  <RouterView v-slot="{ Component }">
<Transition mode="out-in" name="bounce">
  <component :is="Component" />

</Transition>
</RouterView >

</template>

<style scoped>
.bounce-enter-active {
  animation: pop-in 0.8s;
}

.bounce-leave-active {
  animation:  pop-out 0.8s;
}

.logo {
  
  margin: 0 auto;
  height: auto;
  width: 350px;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.mellemrum {
  justify-content: space-between;
}





@keyframes bounce-in {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0.9);
    opacity: 0;


  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-active, .slide-fade-leave-to {
  transform: translateY(20px);
  opacity:  0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style> 


