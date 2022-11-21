<template>
  <div class="header-container" :class="{ 'hidden': !showNav }">
    <div class="width-container">
      <n-space>
        <n-button text class="h1" @click="scrollTop">
          Hollie
        </n-button>
      </n-space>
      <n-space v-if="!mobile">
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
      <n-button text @click="toggleDropdown" v-if="mobile">
        <template #icon>
          <n-icon size="25" :class="{ 'icon-active': mobileDropdown }">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                fill-rule="nonzero" />
            </svg>
          </n-icon>
        </template>
      </n-button>
      <transition name="mobile-nav">
        <n-space vertical v-show="mobileDropdown" class="dropdown">
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
      </transition>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { NSpace, NButton, NIcon } from 'naive-ui'

export default {
  name: "MainHeader",
  components: {
    NSpace,
    NButton,
    NIcon
  },
  props: {
    redirect: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data() {
    return {
      showNav: true,
      lastScrollPos: 0,
      mobile: false,
      mobileDropdown: false,
      width: null
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
      if (this.mobile && this.mobileDropdown && !this.showNav)
        this.mobileDropdown = false
      this.lastScrollPos = scrollPos
    },
    scrollTop() {
      if (this.redirect) {
        router.push({ path: '/' })
      }
      else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    },
    scrollTo(section) {
      if (this.redirect) {
        router.push({ path: '/', hash: `#${section}`})
      }
      else {

        const topPos = this.$parent.$parent.$refs[(section)].offsetTop;
        const headerDif = (window.pageYOffset || document.documentElement.scrollTop) > topPos
        window.scrollTo({
          top: headerDif ? topPos - 60 : topPos,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
    toggleDropdown() {
      this.mobileDropdown = !this.mobileDropdown;
    },
    checkMobile() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
      }
      else {
        this.mobile = false;
        this.mobileDropdown = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.checkMobile)
    this.checkMobile()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.checkMobile)
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
  left: 0;
  display: flex;
  justify-content: center;
}

.width-container {
  flex: 1;
  padding: 7.5px 0px 7.5px 0px;
  max-width: 90vw;
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

.n-button {
  color: white;
}

.n-button:hover,
.n-button:focus {
  color: #f7c66e;
}

.n-icon {
  transition: transform 0.8s ease;
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 200vh;
  background-color: #1e1e1e;
  outline: 1px solid white;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 30px 10px 10px 10px;
  gap: 20px;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-255px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>