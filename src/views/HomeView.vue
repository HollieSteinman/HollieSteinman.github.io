<template>
  <n-message-provider
    containerStyle="font-family: 'Space Mono', monospace;"
    max="2"
  >
    <main-header />
    <n-space class="app-layout">
      <left-border />
      <n-space class="content-layout">
        <n-space class="section">
          <n-text tag="h3" class="subtitle"> Hi, I'm </n-text>
          <n-text tag="h1" class="name"> Hollie </n-text>
          <n-text tag="p">
            I am currently a software developer at accessIQ, working across the
            full stack to deliver software that makes a real difference in the
            world. I thrive at tackling complex problems, and untangling them
            into simple yet effective solutions. I love a chance to work with
            new technologies, and tend to pick them up quickly.
          </n-text>
          <n-text tag="p">
            (I also like film photography if you can't tell)
          </n-text>
          <links-layout />
        </n-space>
        <n-space
          class="section"
          style="margin-bottom: 200px"
          ref="projects"
          id="projects"
        >
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            Projects
          </n-text>
          <div style="padding-bottom: 40px">
            <project-card
              :img="require('@/assets/trendle.png')"
              :grainImg="require('@/assets/grain-overlay-1.jpg')"
              title="Trendle"
              description="A twitter game web-app, utilising cloud services."
              :tags="['Vue.js', 'AWS']"
              to="/projects/trendle"
            />
          </div>
          <div style="margin-bottom: 40px">
            <project-card
              :img="require('@/assets/ml.gif')"
              :grainImg="require('@/assets/grain-overlay-4.jpg')"
              title="ML Traffic Management"
              description="Machine learning intersection control for optimising traffic."
              :tags="['Python', 'OpenAI Gym']"
              mixBlendMode="exclusion"
              to="/projects/ML"
            />
          </div>
          <div>
            <project-card
              :img="require('@/assets/butter.png')"
              :grainImg="require('@/assets/grain-overlay-2.jpg')"
              title="Butter"
              description="An on-demand social planning app."
              :tags="['React Native', 'Typescript', 'Firebase']"
              to="/projects/butter"
            />
          </div>
        </n-space>
        <n-space
          class="section"
          style="margin-bottom: 200px"
          ref="skills"
          id="skills"
        >
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            Skills
          </n-text>
          <skills-layout
            category="Languages"
            :skills="[
              'Python',
              'JavaScript/TypeScript',
              'C#',
              'Java',
              'SQL',
              'NoSQL',
            ]"
          />
          <skills-layout
            category="Frameworks & Technologies"
            :skills="[
              'Django',
              'React',
              'React Native',
              'Vue.js',
              '.NET',
              '.NET Framework',
              'Razor',
              'Maven',
              'Flask',
              'HTML/CSS',
              'FastAPI',
            ]"
          />
          <skills-layout
            category="Cloud"
            :skills="[
              'Heroku',
              'Azure DevOps',
              'AWS',
              'Firebase',
              'Google Cloud Platform',
              'Vercel',
            ]"
          />
          <skills-layout
            category="Misc"
            :skills="['PostgreSQL', 'MongoDB', 'MySQL', 'MSSQL', 'GraphQL']"
          />
        </n-space>
        <n-space
          class="section"
          style="margin-bottom: 200px"
          ref="experience"
          id="experience"
        >
          <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
            Experience
          </n-text>
          <n-text tag="h4" class="subtitle-2" style="margin-bottom: 5px">
            accessIQ
          </n-text>
          <n-tag size="small"> Mar 2023 - Present </n-tag>
          <skills-layout
            :skills="[
              'Python',
              'Javascript',
              'Django',
              'React',
              'PostgreSQL',
              'FastAPI',
              'GitHub Actions',
            ]"
          />

          <n-text tag="h4" class="subtitle-2" style="margin-bottom: 5px">
            Brand Services Australia
          </n-text>
          <n-tag size="small" style="margin-right: 20px"> Internship </n-tag>
          <n-tag size="small"> Mar 2021 - Mar 2022 </n-tag>
          <skills-layout
            :skills="[
              'C#',
              '.NET Core',
              '.NET Framework',
              'Razor',
              'Azure DevOps',
            ]"
          />
        </n-space>
      </n-space>
      <right-border />
    </n-space>
  </n-message-provider>
</template>

<script>
import LeftBorder from "@/components/border/LeftBorder.vue";
import RightBorder from "@/components/border/RightBorder.vue";
import MainHeader from "@/components/header/MainHeader.vue";
import ProjectCard from "@/components/card/ProjectCard.vue";
import SkillsLayout from "@/components/layout/SkillsLayout.vue";
import LinksLayout from "@/components/layout/LinksLayout.vue";
import { NText, NTag, NMessageProvider } from "naive-ui";

export default {
  name: "HomeView",
  components: {
    LeftBorder,
    RightBorder,
    MainHeader,
    ProjectCard,
    SkillsLayout,
    LinksLayout,
    NText,
    NTag,
    NMessageProvider,
  },
  mounted() {
    document.title = "Hollie Steinman";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

html {
  background: #1e1e1e !important;
}

body {
  font-family: "Space Mono", monospace;
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
  margin: 0px;
  color: #f7c66e;
  font-size: 20px;
}

.n-tag {
  margin-bottom: 15px;
}

.name {
  margin: 0px;
  color: white;
  font-size: 50px;
}

.subtitle-2 {
  font-family: "Space Mono", monospace;
  color: white;
  margin: 20px 0px 0px 0px;
}

p {
  font-family: "Space Mono", monospace;
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
</style>
