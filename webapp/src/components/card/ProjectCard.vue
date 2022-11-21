<template>
  <router-link :to="link">
    <n-card class="project" @mouseover="hover = true" @mouseleave="hover = false">
      <template #cover>
        <img v-bind:src=grainImg class="grain-overlay" :style="cssProps">
        <img v-bind:src=img />
        <transition>
          <div v-if="hover" class="overlay">
            <n-space class="title">
              <n-tag v-for="(tag, key) in tags" :key="key" :bordered="false"
                :color="{ color: '#f7c66e', textColor: 'white' }" size="small">
                {{ tag }}
              </n-tag>
              <n-text tag="h3">
                {{ title }}
              </n-text>
            </n-space>
            <n-text tag="p">
              {{ description }}
            </n-text>
          </div>
        </transition>
      </template>
    </n-card>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';
import { NCard, NText, NTag } from 'naive-ui';

export default {
  name: "ProjectCard",
  components: {
    NCard,
    NText,
    NTag,
    RouterLink
  },
  data() {
    return {
      hover: false,
      mix: this.mixBlendMode ? this.mixBlendMode : 'color-dodge'
    }
  },
  props: {
    img: {
      type: String,
      require: true
    },
    grainImg: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    tags: {
      type: Array,
      require: false,
      default: () => []
    },
    mixBlendMode: {
      type: String,
    },
    link: {
      type: String,
      require: true
    }
  },
  computed: {
    cssProps() {
      return {
        '--mode': this.mix
      }
    }
  }
}
</script>

<style scoped>
p {
  font-family: 'Space Mono', monospace;
  color: white;
  text-align: right;
}

h3 {
  font-family: 'Space Mono', monospace;
  margin: 0px 0px 0px 25px;
  color: #f7c66e;
  font-size: 15px;
}

.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  margin-right: 10px;
  align-items: end;
}

.n-tag {
  font-family: 'Space Mono', monospace;
  margin-left: 25px;
  margin-top: 10px;
}

.grain-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  mix-blend-mode: var(--mode);
}

.overlay {
  position: absolute;
  background-color: rgba(1, 1, 1, 0.5);
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 100%;
}

.overlay>h3,
p {
  margin-right: 10px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>