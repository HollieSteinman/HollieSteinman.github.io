<template>
  <n-card>
    <template #cover>
      <img v-bind:src="img" />
    </template>
  </n-card>
  <n-text tag="p" italic>
    {{description}}
  </n-text>
</template>

<script>
import { NCard, NText } from 'naive-ui';

export default {
  name: 'ImageCard',
  components: {
    NCard,
    NText
  },
  props: {
    img: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: false
    }
  }
}
</script>

<style scoped>
p {
  opacity: 75%;
}
</style>