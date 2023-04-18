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
        <div class=" mx-auto d-flex flex-column align-items-center">
            <p class="h1 font-weight-bold text-white text-center">¡Juego Terminado!</p>
            <p class="display-1 text-center text-white mt-5 font-weight-bolder" style="{'fontSize': '60px'}">Puntaje: {{userPoints*100}}</p>
            <div class="mt-5">
                <img v-if="userPoints>ignorancePoints" src="/img/brand/brain.png " width='150px'/>
                <img v-if="userPoints<=ignorancePoints" src="/img/brand/squirrel.png " width='150px'/>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <base-button type="btn btn-secondary" tag="a" href="/#/" class="text-primary btn-lg" style="font-size:22px">INICIO</base-button>
        </div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Score',
  computed: {
    ...mapState('game', ['userPoints', 'ignorancePoints']),
  }
}
</script>

<style>

</style>
