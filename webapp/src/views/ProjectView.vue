<template>
  <n-space class="background" />
  <main-header :redirect='true' />
  <n-space class="app-layout">
    <left-border />
    <n-space class="content-layout">
      <n-button 
        text
        tag="a"
        @click="$router.go(-1)"
        class="icon back">
        <template #icon>
          <n-icon size="20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </n-icon>
        </template>
      </n-button>
      <trendle-project v-if="project === 'trendle'" />
      <ml-project v-if="project === 'ml'" />
      <butter-project v-if="project === 'butter'" />
    </n-space>
    <right-border />
  </n-space>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue';
import LeftBorder from '@/components/border/LeftBorder.vue';
import RightBorder from '@/components/border/RightBorder.vue';
import TrendleProject from '@/components/projects/TrendleProject.vue';
import MlProject from '@/components/projects/MLProject.vue';
import ButterProject from '@/components/projects/ButterProject.vue';
import { NButton, NIcon } from 'naive-ui';

export default {
  name: 'ProjectView',
  components: {
    MainHeader,
    LeftBorder,
    RightBorder,
    TrendleProject,
    MlProject,
    ButterProject,
    NButton,
    NIcon
  },
  props: {
    project: {
      type: String,
      require: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

html {
  background: #1e1e1e !important;
}
</style>

<style scoped>
.app-layout {
  box-sizing: border-box;
  position: static;
  width: 100vw;
  min-height: 100vh;
  min-width: 300px;
  max-width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  overflow-wrap: break-word;
}

.background {
  animation: grain 5s steps(10) infinite;
  background-image: url(@/assets/grain-texture.jpg);
  content: "";
  height: 300%;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  top: -110%;
  width: 300%;
  mix-blend-mode: color-dodge;
  z-index: -99;
  overflow: hidden;
}

@keyframes grain {

  0%,
  100% {
    transform: translate(0, 0)
  }

  10% {
    transform: translate(-5%, -10%)
  }

  20% {
    transform: translate(-15%, 5%)
  }

  30% {
    transform: translate(7%, -25%)
  }

  40% {
    transform: translate(-5%, 25%)
  }

  50% {
    transform: translate(-15%, 10%)
  }

  60% {
    transform: translate(15%, 0%)
  }

  70% {
    transform: translate(0%, 15%)
  }

  80% {
    transform: translate(3%, 35%)
  }

  90% {
    transform: translate(-10%, 10%)
  }
}

.content-layout {
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 150px;
  max-width: 50vw;
  padding-bottom: 200px;
}

.back {
  margin-bottom: 20px;
  justify-content: start;
}

:deep(h3) {
  font-family: 'Space Mono', monospace;
  margin: 0px !important;
  color: #f7c66e;
  font-size: 20px;
}

:deep(.n-tag) {
  font-family: 'Space Mono', monospace;
  margin-top: 5px;
}

:deep(.tags) {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

:deep(.icon) {
  color: rgba(255, 255, 255, .5);
}

:deep(.icon:hover),
:deep(.icon:focus) {
  color: #f7c66e
}

:deep(.horizontal-space) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

:deep(p) {
  font-family: 'Space Mono', monospace;
  color: white;
  margin-bottom: 40px;
  letter-spacing: 0.25px;
}

:deep(ul) {
  list-style-type: none;
}

:deep(ul li:before) {
  content: '\2014';
  position: absolute;
  margin-left: -20px;
}
</style>