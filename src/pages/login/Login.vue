<template>
<section class="section section-shaped section-lg my-0" style="height: 100vh">
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
    <div class="container pt-lg-md">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h2 class="font-weight-bold">Maratón de conocimientos</h2>
                            <small>Inicia sesión con tus credenciales</small>
                        </div>
                        <form role="form">
                            <base-input alternative
                                        class="mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="form.email"
                                        >
                            </base-input>
                            <base-input alternative
                                        type="password"
                                        placeholder="Password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="form.password"
                                        >
                            </base-input>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="onSubmit">Iniciar sesión</base-button>
                            </div>
                        </form>
                    </template>
                </card>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light">
                            <small>¿Olvidaste tu contraseña?</small>
                        </a>
                    </div>
                    <div class="col-6 text-right">
                        <a href="/signup" class="text-light">
                            <small>Registrarse</small>
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
export default {
  name: 'Login',
  data () {
    return {
      form:{
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    ...mapActions('accounts', ['login']),
    async onSubmit () {
      try {
        const { password, email, remember } = this.form
        const user = await this.login({ email, password, remember })
        if (user) {
          this.$router.push({ name: 'home' })
        }
      } catch (e) {
      }
    }
  }
}
</script>

<style>
</style>
