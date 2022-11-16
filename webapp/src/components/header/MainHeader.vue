<template>
  <div 
    class="header-container"
    :class="{ 'hidden': !showNav }">
      <n-space>
        <n-button text class="h1" @click="scrollTop">
            Hollie
        </n-button>
    </n-space>
    <n-space>
      <n-button text class="h2" @click="scrollTo('projects')">
          What I've Worked On
      </n-button>
      <n-button text class="h2" @click="scrollTo('skills')">
          Skills
      </n-button>
      <n-button text class="h2" @click="scrollTo('experience')">
          Experience
      </n-button>
      <n-button text class="h2" @click="scrollTo('contact')">
          Contact Me
      </n-button>
    </n-space>
  </div>
</template>

<script>
import { NSpace, NButton } from 'naive-ui'

export default {
  name: "MainHeader",
  components: {
    NSpace,
    NButton
  },
  data() {
    return {
      showNav: true,
      lastScrollPos: 0
    }
  },
  methods: {
    onScroll() {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPos < 0) {
        return
      }

      if (Math.abs(scrollPos - this.lastScrollPos) < 60) {
        return
      }

      this.showNav = scrollPos < this.lastScrollPos
      this.lastScrollPos = scrollPos
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    scrollTo(section) {
      const topPos = this.$parent.$refs[(section)].offsetTop;
      const headerDif = (window.pageYOffset || document.documentElement.scrollTop) > topPos
      console.log(headerDif)
      window.scrollTo({
        top: headerDif ? topPos - 60 : topPos,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.header-container {
  z-index: 1;
  box-sizing: border-box;
  height: 60px;
  width: 100vw;
  position: fixed;
  transform: translate3d(0, 0, 0);
  background-color: #1e1e1e;
  transition: 0.5s all ease-out;
  padding: 7.5px 100px 7.5px 100px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.n-space {
  padding: 0;
  margin: 0;
}

.h1 {
  font-family: 'Space Mono', monospace;
  margin: 0px;
  color: white;
  font-size: 20px;
  font-weight: bold !important;
}

.h2 {
  font-family: 'Space Mono', monospace;
  color: white;
  padding-left: 20px;
  margin: 0;
}

.n-button:hover, .n-button:focus {
  color: #f7c66e;
}
</style>