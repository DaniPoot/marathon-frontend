<template>
<section class="section section-shaped section-lg my-0" style="height: 100vh">
    <img
        class="absolute-bottom col-3 d-none d-lg-block"
        alt="..."
        src="@/assets/img/svg/undraw_finish_line_katerina_limpitsouni_xy20.svg"
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
    <div class="container pt-2">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <base-alert type="danger" icon="fa fa-exclamation-triangle" dismissible :class="{'d-none': !loginFailed }">
                  <span slot="text"><strong>Oops!</strong> Correo electrónico o contraseña incorrectos.</span>
                </base-alert>
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h2 class="font-weight-bold">Maratón de conocimientos</h2>
                            <small>Inicia sesión con tu correo electrónico</small>
                        </div>
                        <form role="form" class="d-flex flex-column">
                            <label for="email">Correo electrónico</label>
                            <base-input alternative
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="form.email"
                                        name="email"
                                        class="mb-0"
                                        :class="{'border border-danger': isEmailEmpty || isEmailInvalid}"
                                        >
                            </base-input>
                            <label class="text-danger" for="email" :class="{'d-none': !isEmailEmpty}"><small>El correo electrónico es obligatorio</small></label>
                            <label class="text-danger" for="email" :class="{'d-none': !isEmailInvalid}"><small>El correo electrónico es inválido</small></label>
                            <label for="password" class="mt-3">Contraseña</label>
                            <base-input alternative
                                        type="password"
                                        placeholder="Contraseña"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="form.password"
                                        name="password"
                                        class="mb-0"
                                        :class="{'border border-danger': isPasswordEmpty}"
                                        >
                            </base-input>
                            <label class="text-danger" for="password" :class="{'d-none': !isPasswordEmpty}"><small>La contraseña es obligatoria</small></label>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="onSubmit">Iniciar sesión</base-button>
                            </div>
                        </form>
                    </template>
                </card>
                <div class="row mt-3">
                  <div class="col-12">
                      <small>¿Aún no tienes una cuenta?</small>
                      <a href="/#/signup" class="text-light ml-2">
                          <small>Registrate aquí</small>
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
export default {
  name: 'Login',
  data () {
    return {
      form:{
        email: '',
        password: '',
        remember: false
      },
      isEmailEmpty: false,
      isPasswordEmpty: false,
      isEmailInvalid: false,
      loginFailed: false
    }
  },
  async mounted () {
    const user = await this.autoLogin()
 
    if (!user) return
    if (this.$route.params.to || this.$route.params.params) {
      const params = this.$route.params
      this.$router.push({ name: params.to, params: params.params })
    } else {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    ...mapActions('accounts', ['login', 'autoLogin']),
    async onSubmit () {
      try {
        const { password, email } = this.form
        this.isEmailEmpty = !email
        this.isPasswordEmpty = !password

        const validated = validEmail(email)
        this.isEmailInvalid = email && !validated
        
        if(email && password && validated){
          const user = await this.login({ email, password })
          if(user){
            this.$router.push({ name: 'home' })
          }else{
            this.loginFailed = true
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
