<template>
  <n-space class="horizontal-space">
    <div>
      <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
        Trendle
      </n-text>
      <n-space class="tags">
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Vue.js
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          AWS
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Node.JS
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Serverless
        </n-tag>
      </n-space>
    </div>
    <n-button
      text
      tag="a"
      href="https://github.com/HollieSteinman/Trendle"
      target="_blank"
      class="icon">
      <template #icon>
        <n-icon size="25">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </n-icon>
      </template>
    </n-button>
  </n-space>
  <n-text tag="p">
    Trendle is a Vue.js web game, powered through a serverless AWS backend.
    Users must guess which Twitter trends from a period in April 2022 originated from a handful of countries.
    The user gains points for each consecutive correct answer, with the game ending on an incorrect guess.
  </n-text>
  <image-card
    :img="require('@/assets/projects/trendle/game-round.gif')"
    description="A game round in Trendle."/>
  <n-text tag="p">
    The Vue.js frontend is hosted through AWS Elastic Beanstalk and retrieves game / leaderboard data through an
    API gateway powered by Node.JS Lambda functions. The Lambda functions access game data from the AWS RDS MySQL database.
    Images are served through CloudFront and stored in a S3 bucket.
    <br/><br/>
    All data was collected through Twitter's location, Trend & Tweet APIs in April 2022.
  </n-text>
</template>

<script>
import ImageCard from '@/components/card/ImageCard.vue';
import { NText, NTag, NButton, NIcon } from 'naive-ui';

export default {
  name: 'TrendleProject',
  components: {
    ImageCard,
    NText,
    NTag,
    NButton,
    NIcon
  }
}
</script>

<style scoped>

</style>