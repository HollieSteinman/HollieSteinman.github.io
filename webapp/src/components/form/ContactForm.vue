<template>
  <form @submit.prevent="submit">
    <div>
      <input type="text" placeholder="Name" v-model="contact.name" :class="{ error: contactErrors.name.error }"
        @blur="validate('name')" maxLength="60"/>
      <Transition name="slide-fade">
        <n-text tag="p" class="error-message" v-if="contactErrors.name.error">
          {{ contactErrors.name.message }}
        </n-text>
      </Transition>
    </div>
    <div>
      <input type="email" placeholder="Email" v-model="contact.email" :class="{ error: contactErrors.email.error }"
        @blur="validate('email')" maxLength="60"/>
      <Transition name="slide-fade">
        <n-text tag="p" class="error-message" v-if="contactErrors.email.error">
          {{ contactErrors.email.message }}
        </n-text>
      </Transition>
    </div>
    <div>
      <input type="text" placeholder="Subject" v-model="contact.subject" :class="{ error: contactErrors.subject.error }"
        @blur="validate('subject')" maxLength="60"/>
      <n-text tag="p" class="error-message" v-if="contactErrors.subject.error">
        {{ contactErrors.subject.message }}
      </n-text>
    </div>
    <div>
      <textarea placeholder="Message" style='resize: none' rows='4' v-model="contact.message"
        :class="{ error: contactErrors.message.error }" @blur="validate('message')" maxLength="275"/>
      <n-text tag="p" class="error-message" v-if="contactErrors.message.error">
        {{ contactErrors.message.message }}
      </n-text>
    </div>
    <div style="display: flex; justify-content: flex-end">
      <n-spin size='small' v-if="sending" stroke='#f7c66e' />
      <input type="submit" value="Send" v-else />
    </div>
  </form>
</template>

<script>
/* eslint-disable no-useless-escape */
import { ref, h } from 'vue';
import { NText, NSpin, NAlert, useMessage } from 'naive-ui';
import { functions } from "@/firebaseConfig";
import { httpsCallable } from "firebase/functions";

const renderMessage = (props) => {
  const { type } = props
  return h(
    NAlert,
    {
      type: type === 'loading' ? 'default' : type,
      style: {
        boxShadow: "var(--n-box-shadow)",
        maxWidth: "calc(100vw - 32px)",
        width: "480px",
      }
    },
    {
      default: () => props.content
    }
  )
}

export default {
  name: 'ContactForm',
  components: {
    NText,
    NSpin,
  },
  setup() {
    const msg = useMessage()
    return {
      success() {
        msg.success('Message sent!', {
              render: renderMessage,
              duration: 4000
            })
      },
      error() {
        msg.error('Could not send message. Please try again later.', {
            render: renderMessage,
            duration: 4000
          })
      }
    }
  },
  data() {
    return {
      contact: ref({
        name: '',
        email: '',
        subject: '',
        message: ''
      }),
      contactErrors: {
        name: {
          error: false,
          message: ''
        },
        email: {
          error: false,
          message: ''
        },
        subject: {
          error: false,
          message: ''
        },
        message: {
          error: false,
          message: ''
        }
      },
      sending: false
    }
  },
  methods: {
    submit() {
      this.validate('name')
      this.validate('email')
      this.validate('subject')
      this.validate('message')

      if (this.contact.name !== undefined && this.contact.email !== undefined
        && this.contact.subject !== undefined && this.contact.message !== undefined) {
          try {
        this.sending = true;
        const sendContact = httpsCallable(functions, 'sendContact')
        sendContact({
          name: this.contact.name,
          email: this.contact.email,
          subject: this.contact.subject,
          message: this.contact.message
        }).then((result) => {
          this.sending = false;
          const data = result.data;
          console.log(data)
          if (data.success) {
            this.success()
          } else {
            this.error()
          }
        }).catch((error) => {
          this.sending = false;
          console.log(error);
          this.error()
        })
      }
      catch (err) {
        this.sending = false;
        console.log(err)
        this.error()
      }
      }
      else {
        this.error()
      }
    },
    validate(field) {
      switch (field) {
        case 'name':
          if (this.contact.name.trim() === '') {
            this.contactErrors.name.error = true
            this.contactErrors.name.message = "Please enter a name"
          }
          else
            this.contactErrors.name.error = false
          break;
        case 'email':
          if (this.contact.email.trim() === '') {
            this.contactErrors.email.error = true
            this.contactErrors.email.message = "Please enter an email"
          }
          else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email)) {
            this.contactErrors.email.error = true
            this.contactErrors.email.message = "Please enter a valid email"
          }
          else
            this.contactErrors.email.error = false
          break;
        case 'subject':
          if (this.contact.subject.trim() === '') {
            this.contactErrors.subject.error = true
            this.contactErrors.subject.message = "Please enter an subject"
          }
          else
            this.contactErrors.subject.error = false
          break;
        case 'message':
          if (this.contact.message.trim() === '') {
            this.contactErrors.message.error = true
            this.contactErrors.message.message = "Please enter a message"
          }
          else
            this.contactErrors.message.error = false
          break;
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  font-family: 'Space Mono', monospace;
  color: #e94b35;
  margin: 0px 0px 10px 0px;
}

.error {
  border: 1px solid #e94b35 !important;
  outline: none;
}

input[type="text"],
input[type="email"],
textarea {
  box-sizing: border-box;
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  color: white;
  background-color: rgba(255, 255, 255, .05);
  border-width: 0px;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 10px;
  width: 100%
}

input[type="text"]:hover,
input[type="email"]:hover,
textarea:hover {
  outline: 1px solid rgba(255, 255, 255, .25);
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: 1px solid rgba(255, 255, 255, .75);
}

input[type="submit"] {
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  color: #f7c66e;
  padding-right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

input[type="submit"]:hover {
  color: #f7c76e79;
}

input[type="submit"]:focus {
  color: #f7c66e;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>