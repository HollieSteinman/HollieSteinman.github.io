<template>
  <div class=page>
    <n-space vertical justify="space-between" class="page-layout">
      <div>
        <cursor-logo />
        <p>
          Try your best at guessing where Twitter trends have been trending in.
        </p>
        <router-link :to="{name: 'trendle.play'}">
          <play-button />
        </router-link>
      </div>
      <basic-footer />
    </n-space>
  </div>
</template>

<script>
import { NSpace } from 'naive-ui';
import BasicFooter from "../../components/trendle/footer/BasicFooter.vue";
import CursorLogo from "../../components/trendle/type/CursorLogo.vue";
import PlayButton from "../../components/trendle/button/PlayButton.vue";

export default {
  name: "HomeView",
  components: {
    NSpace,
    BasicFooter,
    CursorLogo,
    PlayButton
  }
};
</script>

<style scoped>
.page-layout {
  margin-top: 10vh;
  height: 75vh;
}
</style>