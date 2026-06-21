<template>
  <n-space class="horizontal" ref="leftBorder">
    <n-space class="vertical">
      <n-space class="vertical" v-for="n in noText" :key="n">
        <n-text style="padding-top: 50px">
          ▼ {{ n }}
        </n-text>
        <n-text style="padding-top: 200px; padding-bottom: 100px">
          ▼
        </n-text>
      </n-space>
    </n-space>
  </n-space>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LeftBorder',
  data() {
    return {
      height: 0,
      noText: 1,
      resizeObserver: null
    }
  },
  methods: {
    getHeight() {
      var heightString = this.$refs.leftBorder.clientHeight;
      this.height = heightString;

      var textWidth = this.$refs.leftBorder.children[0].children[0].clientHeight;
      this.noText = Math.floor(this.height / textWidth)
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.getHeight);
    this.resizeObserver.observe(document.body)
    this.getHeight();
  },
  beforeUnmount() {
    this.resizeObserver.unobserve(document.body)
  }
})
</script>

<style scoped>
n-space .vertical {
  display: flex;
  flex-direction: column;
}

n-space .horizontal {
  flex: 0 0 25px;
  display: flex;
  flex-direction: row;
}

n-text {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  writing-mode: vertical-lr;
  color: #f7c66e;
}
</style>
