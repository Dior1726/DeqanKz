<template>
  <form>

    <h2 class="mb-5 title text-green-light">Получить консультацию</h2>
    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, provident.</p>

    <div class="mb-5">
      <input
        v-model="userInfo.name"
        class="outline-none w-full md:w-1/2 px-6 py-3 border bg-transparent text-xl text-green-dark border-green-dark rounded-lg" 
        type="text" 
        placeholder="ФИО"
        :class="{'bg-red-200': $v.userInfo.name.$dirty && !$v.userInfo.name.required}"
      >
    </div>

    <div class="mb-5">
      <the-mask
        type="tel" 
        v-model="userInfo.phone"
        placeholder="+7 ("
        mask="+7 (###) ### ####"
        :masked="true"
        class="outline-none w-full md:w-1/2 px-6 py-3 border bg-transparent text-xl text-green-dark border-green-dark rounded-lg"
        :class="{'bg-red-200': $v.userInfo.phone.$dirty && !$v.userInfo.phone.required}"
      ></the-mask>
    </div>

    <div class="mb-5">
      <input
        v-model="userInfo.email"
        class="outline-none w-full md:w-1/2 px-6 py-3 border bg-transparent text-xl text-green-dark border-green-dark rounded-lg" 
        type="email" 
        placeholder="Почта"
        :class="{
          'bg-red-200': 
          ($v.userInfo.email.$dirty && !$v.userInfo.email.required) || ($v.userInfo.email.$dirty && !$v.userInfo.email.email)
        }"
      >
    </div>

    <div class="mt-10 text-xs">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, unde? 
      <a href="#" class="text-green-light">Lorem, ipsum.</a>
    </div>
    
    <div class="mt-3">
      <button @click.prevent="submitHandler" class="px-6 py-3 bg-green-dark text-white rounded-lg">
        Отправить заявку
      </button>
    </div>
  </form>
</template>

<script>
import {TheMask} from "vue-the-mask"
import { required, email } from "vuelidate/lib/validators"

export default {
  components: {TheMask},
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        phone: '',
      },

      token: process.env.VUE_APP_TOKEN,
      chatId: process.env.VUE_APP_CHATID
    }
  },
  methods: {
    submitHandler() {

      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      let message = 
        ` ФИО: ${this.userInfo.name} 
          %0AНомер: ${this.userInfo.phone}
          %0AПочта: ${this.userInfo.email}
        `
      
      this.$http.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`)
        .then(() => {
          alert('Успешно отправлено!')
          this.userInfo.name = ''
          this.userInfo.email = ''
          this.userInfo.phone = ''
        })

        .catch( e => alert('Ощибка повторите!'))
    }
  },
  validations: {
    userInfo: {
      name: {required},
      phone: {required},
      email: {email, required}
    }
  },
}
</script>

<style lang="scss" scoped>

</style>