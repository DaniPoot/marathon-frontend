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
        <div class="container pt-2">
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
                                            class="mb-3"
                                            placeholder="Nombre Completo"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Correo electrónico"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Constraseña"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-input alternative
                                            type="Repetir contraseña"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <vue-recaptcha sitekey="6Lc-0WggAAAAACDCWg9AO333wjxXud9pOiDivfZw"> </vue-recaptcha>
                          
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">REGISTRARSE</base-button>
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
  components: { VueRecaptcha }
}
</script>
<style>
</style>
