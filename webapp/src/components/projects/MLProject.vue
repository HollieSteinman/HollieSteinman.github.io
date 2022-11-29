<template>
  <n-space class="horizontal-space">
    <div>
      <n-text tag="h3" class="subtitle" style="margin-bottom: 20px">
        ML Traffic Management
      </n-text>
      <n-space class="tags">
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          Python
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          OpenAI Gym
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          SUMO
        </n-tag>
        <n-tag :bordered="false" :color="{ color: '#f7c66e', textColor: 'white' }" size="medium">
          matplotlib
        </n-tag>
      </n-space>
    </div>
    <n-button text tag="a" href="https://github.com/HollieSteinman/ML-TrafficManagement" target="_blank" class="icon">
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
    This project aims to create a reinforcement learning model which improves traffic flow over a conventional static
    policy.
    OpenAI Gym is used to create the learning environment, and <a class="inline-a" href="https://www.eclipse.org/sumo/"
      target="_blank">Simulation of Urban MObility (SUMO)</a> for modelling the roads,
    lanes and traffic flow.
  </n-text>
  <image-card :img="require('@/assets/ml.gif')" description="ML model managing an intersection." />
  <n-text tag="p" class="subtitle">
    Environments
  </n-text>
  <n-text tag="p">
    Two intersections were created in SUMO, one for testing / training and the second for evaluating the policy.
    The testing intersection is a simple 4-way intersection, with the north-south road containing a right turn lane on
    each side of the intersection. The intersection contains 6 different light phases.
  </n-text>
  <image-card :img="require('@/assets/projects/ml/test-intersection.png')"
    description="Testing & training intersection." />
  <n-text tag="p">
    The second intersection, the evaluation intersection, is modelled after a real intersection in Melbourne.
    This intersection is a 3-way intersection, containing right turn lanes as well as left turn lanes.
    It also contains 6 different light phases. The traffic flow for this intersection was configured to
    emulate the observed flow for the real intersection.
  </n-text>
  <image-card :img="require('@/assets/projects/ml/eval-intersection.png')" description="Evaluation intersection." />
  <n-text tag="p" class="subtitle">
    Observation Space
  </n-text>
  <n-text tag="p">
    The observation space is an <n-text code>ndarray</n-text> of values between 0-1, which contain the
    current phase, if the phase can be changed and which lane contains the largest queue.
  </n-text>
  <n-text tag="p" class="subtitle">
    Action Space
  </n-text>
  <n-text tag="p">
    The action space is a discrete space of all possible green phases for the intersection.
    Considering that the aforementioned intersections contain 6 phases, this means there are
    3 actions (green phases).
  </n-text>
  <n-text tag="p" class="subtitle">
    Transition Dynamics
  </n-text>
  <n-text tag="p" style="margin-bottom: 15px">
    Given an action (green phase), the traffic light follows the following dynamic:
  </n-text>
  <n-text code class="code-block">
    if current phase == action or the current phase has not completed: <br />
    &emsp;set the light phase to the current phase <br />
    else: <br />
    &emsp;set the light phase to the transition from the current phase <br />
    &emsp;then set the light phase to the current phase after the transition has finished <br />
  </n-text>
  <n-text tag="p">
    Where the <n-text code>transition</n-text> is the current phase's green lights turning yellow.
    Each green-yellow-red order is ensured through the <n-text code>transition</n-text> (yellow) phase preceding
    any switch to a new green phase. This also ensured the agent isn't switching between phases before a vehicle can
    travel through the intersection.
  </n-text>
  <n-text tag="p" class="subtitle">
    Reward
  </n-text>
  <n-text tag="p">
    There are numerous rewards which I considered whilst setting up the environment. Ultimately,
    I decided to calculate the reward by the average speed of vehicles, as I believed this best
    described an efficient intersection. Through using an average speed, the agent is penalised
    by queued / waiting cars and rewarded when there is an increased throughput. <br /> <br />
    The reward is calculated as an average of all vehicle's speed divided by the vehicle's maximum speed.
  </n-text>
  <n-text tag="p" class="subtitle">
    Static Policy
  </n-text>
  <n-text tag="p">
    After some trial and error, I set the static policy for the test intersection to change the
    north and south lights after 18 steps, then the east-west light to change after 13 steps. <br /> <br />

    This resulted in:<br/>
    Average steps: <n-text code>2006</n-text><br/>
    Final average reward: <n-text code>156</n-text>
  </n-text>
  <n-text tag="p" class="subtitle">
    Model
  </n-text>
  <n-text tag="p">
    As this is a Model-Free problem, I used Q-Learning to train an optimal policy. Furthermore, the static
    policy will be used to evaluate the optimal policy, with the aim of achieving a reward average of 30,
    and less than 400 steps. Due to the non-deterministic nature of the simulation, I used Temporal Difference
    Learning with my Q-function. <br /> <br />

    The Q-Learning algorithm has 5 hyperparamaters:
    <ul>
      <li>
        <n-text code>learning</n-text>: The learning rate of the algorithm.
      </li>
      <li>
        <n-text code>discount</n-text>: The discount.
      </li>
      <li>
        <n-text code>epsilon</n-text>: The initial epsilon value.
      </li>
      <li>
        <n-text code>stop_decay_percent</n-text>: A value between 0-1 determining the
        percent of episodes to stop the decay at.
      </li>
      <li>
        <n-text code>episodes</n-text>: The number of episodes to run.
      </li>
    </ul>

    Due to the large size of the state space, I chose to include the <n-text code>stop_decay_percent</n-text>
    hyperparamater to give the algorithm more time to exploit what it knows. <br /> <br />

    The Q-function looks as follows:
    <div 
      v-katex:display="qLearning">
    </div>
  </n-text>
  <n-text tag="p" class="subtitle">
    Refinement
  </n-text>
  <n-text tag="p">
    As a baseline, I started with the following hyperparamaters:
    <ul>
      <li>
        <n-text code>learning = 0.1</n-text>
      </li>
      <li>
        <n-text code>discount = 0.99</n-text>
      </li>
      <li>
        <n-text code>epsilon = 1</n-text>
      </li>
      <li>
        <n-text code>stop_decay_percent = 0.5</n-text>
      </li>
      <li>
        <n-text code>episodes = 300</n-text>
      </li>
    </ul>
    The results of this baseline are as follows:<br/>
    Average steps: <n-text code>365.5</n-text><br/>
    Final average reward: <n-text code>23.057</n-text>
  </n-text>
  <image-card :img="require('@/assets/projects/ml/baseline.png')" description="Baseline results." />
  <n-text tag="p">
    After further refinement steps, I had ended up with the following hyperparamater changes:
    <ul>
      <li>
        <n-text code>discount = 0.95</n-text>
      </li>
      <li>
        <n-text code>stop_decay_percent = 0.75</n-text>
      </li>
      <li>
        <n-text code>episodes = 1000</n-text>
      </li>
    </ul>

    This resulted in:<br/>
    Average steps: <n-text code>359.3</n-text><br/>
    Final average reward: <n-text code>30.561</n-text>
  </n-text>
  <n-text tag="p" class="subtitle">
    Independent Evaluation
  </n-text>
  <n-text tag="p">
    The static policy for the evaluation intersection was set to estimations observed of the real policy.
    I ended up with a 60 seconds phase for east-west directions, 45 seconds for the south direction and 30 seconds for
    west-north / west-east directions.<br/><br/>

    This static policy achieved:<br/>
    Average steps: <n-text code>451</n-text><br/>
    Final average reward: <n-text code>33.189</n-text><br/><br/>

    The optimal policy performed slightly better, than the static policy, with a slight increase in average speed
    and a noticeable reduction in steps:<br/>
    Average steps: <n-text code>378.6</n-text><br/>
    Final average reward: <n-text code>33.631</n-text>
  </n-text>
  <n-text tag="p" class="subtitle">
    Conclusion
  </n-text>
  <n-text tag="p">
    Due to computing and time limitations I faced for this project, I don't believe I was able to achieve peak performance
    of the algorithm. However, I was still able to determine the policy generated through the Q-Learning algorithm resulted
    in a more optimal traffic throughput, due to its ability to predict future steps based on previous learning.
  </n-text>
</template>

<script>
import 'katex/dist/katex.min.css';
import asciimath2latex from 'asciimath-to-latex';
import ImageCard from '@/components/card/ImageCard.vue';
import { NText, NTag, NButton, NIcon } from 'naive-ui';

export default {
  name: 'MLProject',
  components: {
    ImageCard,
    NText,
    NTag,
    NButton,
    NIcon
  },
  data() {
    return {
      // eslint-disable-next-line
      qLearning: asciimath2latex(`Q(s,a) = (1 - epsilon)*Q(s,a)+"learning"*(R(s,a) + "discount"*max_(a')Q(s',a'))`)
    }
  }
}
</script>

<style>
.katex-display > .katex { white-space: normal }
/* Add space between broken lines: */
.katex-display > .base { margin: 0.25em 0 }
/* Compensate by reducing space around display math */
.katex-display { margin: 0.5em 0; }
</style>

<style scoped>
.inline-a {
  color: #f7c66e;
  text-decoration: none;
}

.inline-a:hover,
.inline-a:visited,
.inline-a:active {
  color: #f7c76e79
}

.subtitle {
  color: #f7c66e;
  font-weight: bold;
  margin: 0;
}

code {
  color: white !important;
  background-color: rgba(110, 118, 129, 0.4) !important;
  border: 1px solid rgba(110, 118, 129, 0.6) !important;
}

.code-block {
  padding: 10px;
  line-height: 20px;
}
</style>