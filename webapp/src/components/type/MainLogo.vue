<template>
  <n-space>
    <n-h1>
      Hi,<br/>
      I'm
    </n-h1>
    <n-h1 class="cursive">
        Hollie
      </n-h1>
  </n-space>
</template>

<script>
import { defineComponent } from "vue";
import { NH1 } from "naive-ui";

export default defineComponent ({
    name: "MainLogo",
    components: {
      NH1
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

n-space {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

h1 {
  font-family: 'Space Mono', monospace;
  color: white;
  font-size: 75px;
}
.cursive {
  font-family: "Soubrette", Helvetica, Arial;
  font-size: 250px;
  font-weight: 200;
  color: #f7c66e;
  margin-bottom: -140px;
  padding-left: 30px;
}
</style>