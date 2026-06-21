<script setup>
import { NConfigProvider } from "naive-ui";

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  Tag: {
    textColor: "#f7c66e",
    color: "transparent",
    border: "1px solid #f7c66e",
    borderRadius: "4px",
  },
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-space class="background" />
    <router-view> </router-view>
  </n-config-provider>
</template>

<style>
.background::after {
  animation: grain 3s steps(10) infinite;
  background-image: url(@/assets/grain-texture.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  content: "";
  height: 250%;
  left: -50%;
  opacity: 0.3;
  position: fixed;
  top: -100%;
  width: 250%;
  z-index: -1;
  opacity: 0.05;
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -10%);
  }
  40% {
    transform: translate(-5%, 10%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%, 0%);
  }
  70% {
    transform: translate(0%, 15%);
  }
  80% {
    transform: translate(3%, 10%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
}
</style>
