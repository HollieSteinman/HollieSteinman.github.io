<template>
  <n-space class="horizontal" ref="leftBorder">
    <n-space class="vertical">
      <n-space class="vertical" v-for="n in noText" :key="n">
        <n-text style="padding-top: 50px">
          ▼ {{n}}
        </n-text>
        <n-text style="padding-top: 200px; padding-bottom: 50px">
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
      noText: 1
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
    this.$nextTick(() => {
      window.addEventListener('resize', this.getHeight());
    })
  }
})
</script>

<style scoped>
n-space .vertical {
  display: flex;
  flex-direction: column;
}

n-space .horizontal {
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
