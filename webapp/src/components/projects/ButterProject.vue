<template>
  <n-space class="horizontal-space">
    <div>
      <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
        Butter
      </n-text>
      <n-space class="tags">
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          React Native
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Typescript
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Firebase
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Scrum
        </n-tag>
      </n-space>
    </div>
    <n-button text tag="a" href="https://www.butterapp.au/" target="_blank" class="icon">
      <template #icon>
        <n-icon size="25">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path
              d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
          </svg>
        </n-icon>
      </template>
    </n-button>
  </n-space>
  <n-text tag="p">
    In the second half of my final semester in 2022, I worked in a scrum team to build an Android & iOS MVP for a client, called Butter.
    Each week, 36% of Australians feel lonely, with COVID only accentuate this issue. Butter aims to address this issue through creating a
    personalised on-demand marketplace for socialising. It allows users to connect with each other through creating & joining social plans.
    <br/><br/>
    We developed the app in React Native & Typescript, using Firebase for authentication, data / media storage and serverless cloud functions.
  </n-text>
  <image-card :img="require('@/assets/butter.png')" description="The Butter app." />
  <n-text tag="p">
    Our team of 3 only had four 3-week sprints to create a MVP from provided mockups, with my role in the team being the Scrum Master. I was responsible with creating
    meeting documentation (agendas, minutes, etc.) for our weekly meetings with the client & university mentor, as well as guiding these.
    <br/><br/>
    For development, I primarily focused on the iOS-specific styling / functionality, Firebase Cloud Functions, as well as working on the plan page and recommendation ranking algorithm.
    <br/><br/>
    At the end of the project, we were able to deliver the following functionality to the client:
    <ul>
      <li>
        User login & registration
      </li>
      <li>
        Facebook login
      </li>
      <li>
        App navigation
      </li>
      <li>
        User profile & profile editing
      </li>
      <li>
        Plan page & creation
      </li>
      <li>
        Plan invites & join requests
      </li>
      <li>
        Viewing created & upcoming plans
      </li>
      <li>
        Explore page with personalised feed
      </li>
      <li>
        Friends
      </li>
      <li>
        Messaging
      </li>
      <li>
        Notifications
      </li>
    </ul>
  </n-text>
</template>

<script>
import ImageCard from '@/components/card/ImageCard.vue';
import { NText, NTag, NButton, NIcon } from 'naive-ui';

export default {
  name: 'ButterProject',
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