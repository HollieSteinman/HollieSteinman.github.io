<template>
  <n-message-provider containerStyle="font-family: 'Space Mono', monospace;" max="2">
    <n-space class="background" />
    <main-header />
    <n-space class="app-layout">
      <left-border />
      <n-space class="content-layout">
        <n-space class="section">
          <n-text tag="h3" class="subtitle">
            Hi, I'm
          </n-text>
          <n-text tag="h1" class="name">
            Hollie
          </n-text>
          <n-text tag="p">
            I'm a final year software engineer, ready to build things. Specifically, I'm interested in full-stack
            development,
            cloud-based technologies as well as making technology better for the world.
            (I also like film photography if you can't tell)
          </n-text>
          <links-layout />
        </n-space>
        <n-space class="section" style="margin-bottom: 200px" ref="projects" id="projects">
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            What I've Worked On
          </n-text>
          <div style="padding-bottom: 40px">
            <project-card :img='require("@/assets/trendle.png")' :grainImg='require("@/assets/grain-overlay-1.jpg")'
              title="Trendle" description="A twitter game web-app, utilising cloud services." :tags="['Vue.js', 'AWS']"
              to="/projects/trendle" />
          </div>
          <div style="margin-bottom: 40px">
            <project-card :img='require("@/assets/ml.gif")' :grainImg="require('@/assets/grain-overlay-4.jpg')"
              title="ML Traffic Management" description="Machine learning intersection control for optimising traffic."
              :tags="['Python', 'OpenAI Gym']" mixBlendMode="exclusion" to="/projects/ML" />
          </div>
          <div>
            <project-card :img='require("@/assets/butter.png")' :grainImg="require('@/assets/grain-overlay-2.jpg')"
              title="Butter" description="An on-demand social planning app."
              :tags="['React Native', 'Typescript', 'Firebase']" to="/projects/butter" />
          </div>
        </n-space>
        <n-space class="section" style="margin-bottom: 200px" ref="skills" id="skills">
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            Skills
          </n-text>
          <skills-layout category="Languages"
            :skills="['Python', 'C/C++', 'C#', 'Java', 'js/ts', 'HTML', 'CSS', 'SQL', 'NoSQL']" />
          <skills-layout category="Frameworks / Libraries"
            :skills="['React', 'React Native', 'Vue.js', '.NET', '.NET Framework', 'Razor', 'Maven', 'Flask', 'OpenAI Gym']" />
          <skills-layout category="Cloud" :skills="['Azure DevOps', 'AWS', 'Firebase', 'Google Cloud Platform']" />
          <skills-layout category="Misc" :skills="['MongoDB', 'MySQL', 'MSSQL', 'GraphQL', 'Quick Learning', 'Open Mind']" />
        </n-space>
        <n-space class="section" style="margin-bottom: 200px" ref="experience" id="experience">
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            Experience
          </n-text>
          <n-text tag="h4" class="subtitle-2" style="margin-bottom: 5px">
            Brand Services Australia
          </n-text>
          <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="small"
            style="margin-right: 20px">
            Internship
          </n-tag>
          <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="small">
            Mar 2021 - Mar 2022
          </n-tag>
          <n-text tag="p" style="padding-bottom: 30px">
            I worked for Brand Services Australia between March of 2021 to March of 2022 for my university internship.
            Over the course of my time at Brand Services Australia, I worked on leaning & maintaining the business'
            legacy
            .NET site,
            whilst also developing & integrating new features.
            <br /><br />
            One project I worked on was an integration with Shopify's API, to connect client stores with the .NET site.
            I also helped work on an integration with Australia Post's API, to assist the business' warehouse create consignments.
            Towards the end of my internship, we began to design & develop an updated site for the company to replace the legacy system.
            In this process, I also set up DevOps pipelines for the sites.
          </n-text>
          <n-text tag="p" class="quote" italic>
            "Hollie has been working with Brand Services as an intern performing the role of Junior Developer.
            <br /><br />
            Hollie has worked on a number Technology functions such as:
            Production Support.
            Testing.
            Software Development.
            Design.
            Change Control.
            Deployment.
            Documentation.
            Training.
            Handover.
            Leadership.
            <br /><br />
            Also as a part of the Team Hollie has developed solutions for our:
            Warehouse system.
            eCommercie solution.
            Created new backend system.
            Onboarding new Customers.
            <br /><br />
            Hollie has also become the go to person when there is a need to reverse engineer a system problem in a short
            space of time. Hollie is an amazing asset to our team. It is an absolute pleasure to have Hollie as member
            of our Technology Team.
            Exceptional Work Hollie."
          </n-text>
          <div style="display: flex; justify-content: end;">
            <n-text tag="p" style="text-align: right; max-width: 350px;">
            - Robert Braxton (Technology Leader, Brand Services Australia)
          </n-text>
          </div>
        </n-space>
        <n-space class="section" ref="contact" id="contact">
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            Contact Me
          </n-text>
          <contact-form />
        </n-space>
      </n-space>
      <right-border />
    </n-space>
  </n-message-provider>
</template>

<script>
import LeftBorder from '@/components/border/LeftBorder.vue';
import RightBorder from '@/components/border/RightBorder.vue';
import MainHeader from '@/components/header/MainHeader.vue';
import ProjectCard from '@/components/card/ProjectCard.vue';
import SkillsLayout from '@/components/layout/SkillsLayout.vue';
import ContactForm from '@/components/form/ContactForm.vue';
import LinksLayout from '@/components/layout/LinksLayout.vue';
import { NText, NTag, NMessageProvider } from 'naive-ui';

export default {
  name: 'HomeView',
  components: {
    LeftBorder,
    RightBorder,
    MainHeader,
    ProjectCard,
    SkillsLayout,
    LinksLayout,
    ContactForm,
    NText,
    NTag,
    NMessageProvider
  },
  mounted() {
    document.title = 'Hollie Steinman';
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

html {
  background: #1e1e1e !important;
}

.n-alert {
  background-color: #1e1e1e !important;
}

.n-alert-body {
  border: none;
}

.n-alert-body__content {
  color: white !important;
}

/* .n-alert__icon {
  color: #f7c66e !important;
} */
</style>

<style scoped>
.app-layout {
  box-sizing: border-box;
  position: static;
  width: 100vw;
  min-height: 100vh;
  min-width: 300px;
  max-width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  overflow-wrap: break-word;
}

.background {
  animation: grain 5s steps(10) infinite;
  background-image: url(@/assets/grain-texture.jpg);
  content: "";
  height: 300%;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  top: -110%;
  width: 300%;
  mix-blend-mode: color-dodge;
  z-index: -99;
  overflow: hidden;
}

@keyframes grain {

  0%,
  100% {
    transform: translate(0, 0)
  }

  10% {
    transform: translate(-5%, -10%)
  }

  20% {
    transform: translate(-15%, 5%)
  }

  30% {
    transform: translate(7%, -25%)
  }

  40% {
    transform: translate(-5%, 25%)
  }

  50% {
    transform: translate(-15%, 10%)
  }

  60% {
    transform: translate(15%, 0%)
  }

  70% {
    transform: translate(0%, 15%)
  }

  80% {
    transform: translate(3%, 35%)
  }

  90% {
    transform: translate(-10%, 10%)
  }
}

.content-layout {
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 150px;
  max-width: 50vw;
}

.section {
  padding-top: 50px;
  min-height: calc(100vh - 200px);
}

.subtitle {
  font-family: 'Space Mono', monospace;
  margin: 0px;
  color: #f7c66e;
  font-size: 20px;
}

.n-tag {
  font-family: 'Space Mono', monospace;
  margin-bottom: 15px;
}

.name {
  font-family: 'Space Mono', monospace;
  margin: 0px;
  color: white;
  font-size: 50px;
}

.subtitle-2 {
  font-family: 'Space Mono', monospace;
  color: white;
  margin: 20px 0px 0px 0px;
}

p {
  font-family: 'Space Mono', monospace;
  color: white;
  letter-spacing: 0.25px;
}

.quote {
  opacity: 75%;
}

@media screen and (max-width: 400px) {
  .name {
    font-size: 40px;
  }
}

/* 
  film font col: #f7c66e 
  film bg: #010103
  #1e1e1e

*/
</style>
