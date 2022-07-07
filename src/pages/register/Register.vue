<template>
    <section class="section section-shaped section-lg my-0" style='height: 100vh'>
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
                <div class="col-lg-5">
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
                                <base-input alternative
                                            name="name"
                                            class="mb-3"
                                            placeholder="Nombre Completo"
                                            addon-left-icon="ni ni-single-02"
                                            v-model="form.name">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            type="email"
                                            name="email"
                                            placeholder="Correo electrónico"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="form.email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            name="password"
                                            placeholder="Constraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="form.password">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            name="password2"
                                            placeholder="Repetir contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="form.password2">
                                </base-input>
                                <vue-recaptcha sitekey="6Lc-0WggAAAAACDCWg9AO333wjxXud9pOiDivfZw"> </vue-recaptcha>
                                <div class="text-center">
                                    <base-button type="primary" class="mt-4">REGISTRARSE</base-button>
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
      }
    }
  },
}
</script>
<style>
</style>
