<template>
  <div>
    <h1>Admin Profesor</h1> 
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>
<template>
<section>
  <img
    class="absolute-start col-3 d-none d-md-block"
    alt="..."
    src="@/assets/img/svg/undraw_finish_line_katerina_limpitsouni_xy20.svg"
  />
  <img
    class="absolute-end col-3  d-none d-md-block"
    alt="..."
    src="@/assets/img/svg/undraw_runner_start_x-0-uu.svg"
  />
  <section class="section section-shaped m-0 p-0">
    <div class="shape shape-style-1 bg-gradient-primary">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <div class="container pt-2 pt-lg-7 d-flex flex-column justify-content-around align-items-center minh-100">
      <div class="row">
        <div class="col-md-6 mx-auto d-flex flex-column align-items-center">
            <p class="h1 font-weight-bold text-white">Bienvenido al</p>
            <p class="display-1 text-center text-white mt-5 font-weight-bolder" style="{'fontSize': '60px'}">Maratón de conocimientos</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <nav class="nav d-flex flex-column align-items-center mt-7">
             <a class="nav-link text-white font-weight-bold display-4" href="/#/subjects">Dashboard</a>
            <a class="nav-link text-white font-weight-bold display-4" href="/#/newgame">Iniciar nueva partida</a>
            <a class="nav-link text-white font-weight-bold display-4" href="/login" @click="onLogout">Cerrar sesión</a>
          </nav>
        </div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions('accounts', ['logout']),
    onLogout () {
      this.logout()
    }
  }
}
</script>

<style>

</style>
