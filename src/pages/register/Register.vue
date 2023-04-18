<template>
    <section class="section section-shaped section-lg my-0" style='min-height: 100vh'>
        <img
            class="absolute-end col-3 d-none d-lg-block"
            alt="..."
            src="@/assets/img/svg/undraw_runner_start_x-0-uu.svg"
        />
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-0">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                   
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h2 class="font-weight-bold">Maratón de conocimientos</h2>
                                <small>Registrate usando tu correo electrónico</small>
                            </div>
                            <form role="form">
                                <label for="name" class="d-block">Nombre completo</label>
                                <base-input alternative
                                            name="name"
                                            class="mb-0"
                                            placeholder="Nombre Completo"
                                            addon-left-icon="ni ni-single-02"
                                            :class="{'border border-danger': isNameEmpty}"
                                            v-model="form.name">
                                </base-input>
                                <label class="text-danger" for="email" :class="{'d-none': !isNameEmpty}"><small>El nombre es obligatorio</small></label>
                                
                                <label for="password" class="d-block mt-3">Correo electrónico</label>
                                <base-input alternative
                                            class="mb-0"
                                            type="email"
                                            name="email"
                                            placeholder="Correo electrónico"
                                            addon-left-icon="ni ni-email-83"
                                            :class="{'border border-danger': isEmailEmpty || isEmailInvalid || emailRegistered}"
                                            v-model="form.email">
                                </base-input>
                                <label class="text-danger" for="email" :class="{'d-none': !isEmailEmpty}"><small>El correo electrónico es obligatorio</small></label>
                                <label class="text-danger" for="email" :class="{'d-none': !isEmailInvalid}"><small>El correo electrónico es inválido</small></label>
                                <label class="text-danger" for="email" :class="{'d-none': !emailRegistered}"><small>El correo electrónico ya está registrado</small></label>
                    
                                <label for="password" class="mt-3 d-block">Contraseña</label>
                                <base-input alternative
                                            type="password"
                                            name="password"
                                            placeholder="Contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            class="mb-0"
                                            :class="{'border border-danger': isPasswordEmpty || passwordNotMatch || shortPassword}"
                                            v-model="form.password">
                                </base-input>
                                <label class="text-danger" for="email" :class="{'d-none': !shortPassword}"><small>La contraseña debe tener al menos 6 caracteres</small></label>
                                <label class="text-danger" for="email" :class="{'d-none': !isPasswordEmpty}"><small>La contraseña es obligatoria</small></label>
                                
                                <label for="password2" class="d-block mt-3">Repetir contraseña</label>
                                <base-input alternative
                                            type="password"
                                            name="password2"
                                            placeholder="Repetir contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            class="mb-0"
                                            :class="{'border border-danger': passwordNotMatch}"
                                            v-model="form.password2">
                                </base-input>
                                <label class="text-danger" for="email" :class="{'d-none': !passwordNotMatch}"><small>Las contraseñas no coinciden</small></label>
                                
                                <vue-recaptcha class="mt-4 d-flex justify-content-center" @verify="handleSuccess" @error="handleError" :sitekey="captchaKey"> </vue-recaptcha>
                                <div class="text-center">
                                    <base-button type="primary" class="mt-4" :disabled="!captchaVerified"  @click="onSubmit">REGISTRARSE</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                    <div class="col-12">
                        <small>¿Ya tienes una cuenta?</small>
                        <a href="/#/login" class="text-light ml-2">
                            <small>Inicia sesión aquí</small>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { mapActions } from 'vuex'
import { validEmail } from '@/utilities/formValidation.js'
import { VueRecaptcha } from 'vue-recaptcha'
export default {
  components: { VueRecaptcha },
  data () {
    return {
      form:{
        name: '',
        email: '',
        password: '',
        password2: '',
      },
      isNameEmpty:false,
      isEmailEmpty: false,
      isPasswordEmpty: false,
      isEmailInvalid: false,
      emailRegistered:false,
      passwordNotMatch:false,
      loginFailed: false,
      shortPassword: false,
      captchaVerified: false
    }
  },
  computed: {
    captchaKey () {
      return process.env.VUE_APP_CAPTCHA_KEY
    }
  },
  methods: {
    ...mapActions('accounts', ['signin']),
    handleSuccess () {
      this.captchaVerified = true
    },
    handleError () {
      this.captchaVerified = false
    },
    async onSubmit () {
      try {
        const { name, password, email, password2 } = this.form
        this.isNameEmpty = !name
        this.isEmailEmpty = !email
        this.isPasswordEmpty = !password
        this.passwordNotMatch = password !== password2
        this.shortPassword = password && password.length < 6

        const validated = validEmail(email)
        this.isEmailInvalid = email && !validated
        
        if(name && email && password && validated && password === password2){
          const { ok, message } = await this.signin({ name, email, password })
      
          if(ok){
            this.$router.push({ name: 'home' })
          }else{
            this.loginFailed = true 
            if(message === 'email registered')
              this.emailRegistered = true
          }
        }

      } catch (e) {
      
        console.error(e)
      }
    },
    
  }
}
</script>
<style>
</style>
