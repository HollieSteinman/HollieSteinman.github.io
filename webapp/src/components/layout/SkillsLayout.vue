<template>
  <n-tag :bordered="false" :color="{color: '#f7c66e', textColor: 'white'}" size="small">
    {{category}}
  </n-tag>
  <n-space class="container">
    <n-space v-for="(skill, key) in skills" :key="key" class="skill">
      <n-text tag="h3" class="arrow">
        ►
      </n-text>
      <n-text tag="h3" style="padding-left: 10px">
        {{skill}}
      </n-text>
    </n-space>
  </n-space>
</template>

<script>
import { NText, NTag } from 'naive-ui';


export default {
  name: "SkillsLayout",
  components: {
    NText,
    NTag
  },
  props: {
    category: {
      type: String,
      require: true
    },
    skills: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped>
.n-tag {
  font-family: 'Space Mono', monospace;
  margin-bottom: 15px;
}

h3 {
  font-family: 'Space Mono', monospace;
  margin: 0px;
  color: white;
  font-size: 15px;
}

.arrow {
  color: #f7c66e;
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;
}

.skill {
  flex-basis: 30%;
  display: flex;
  justify-content: start;
  margin-right: 50px;
  padding-bottom: 5px;
}
</style>