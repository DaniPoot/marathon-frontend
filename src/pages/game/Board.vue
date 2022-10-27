<template>
<section>
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
      <card shadow class="card-profile" style="width: 95vw; height: 85vh">
      <p class="font-weight-bold">Ajuste: <span>{{setting}}</span></p>
      <p class="font-weight-bold">Dificultad: <span>{{difficulty}}</span></p>
      </card>
    </div>
  </section>
</section>
</template>

<script>
export default {
  name: 'Home', 
  data() {
    return {
      difficulty: '',
      setting: '',
    }
  },
  mounted() {
    const labelSetting = ['Manual', 'Automática', 'Inteligente']
    const labelDifficulty = ['Fácil', 'Media', 'Dificil']

    const setting = this.$route.query.setting
    const difficulties = this.$route.query.difficulty
    let text = ''
    for(let i = 0; i<3; i++){

      if(difficulties[i] === 'true'){
        text +=`${labelDifficulty[i]} `
      }
    }
    console.log(text)
    this.setting = labelSetting[setting]
    this.difficulty = text

  },
}
</script>

<style>

</style>
