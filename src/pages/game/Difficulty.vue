<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0" style="height:350px">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container-fluid">
                <card shadow class="card-profile mt--300">
                    <div class="row d-flex justify-content-center mb-3">
                        <card shadow class="col-md-5 col-12 mx-4">
                            <p class="h4 text-primary font-weight-bold">Dificultad</p>
                            <div class="d-flex mt-3 mb-2 flex-wrap flex-column flex-md-row">
                                <base-checkbox checked class="mr-3 mt-1" v-model="checked[0]">
                                    Fácil
                                </base-checkbox>
                                <base-checkbox class="mr-3 mt-1" v-model="checked[1]">
                                    Media
                                </base-checkbox>
                                <base-checkbox class="mr-3 mt-1" v-model="checked[2]">
                                    Difícil
                                </base-checkbox>
                            </div>
                        </card>
                        <card shadow class="col-md-5 col-12 mx-4 mt-4 mt-md-0">
                            <p class="h4 text-primary font-weight-bold">Ajuste de dificultad</p>
                            <div class="d-flex mt-3 mb-2 flex-wrap">
                                <base-radio  name="radio-0" class="mr-3 mt-1" v-model="radio">
                                    Manual
                                </base-radio>
                                <base-radio name="radio-1" class="mr-3 mt-1" v-model="radio">
                                    Automática
                                </base-radio>
                                <base-radio name="radio-2" class="mr-3 mt-1" v-model="radio">
                                    Inteligente
                                </base-radio>
                            </div>
                        </card>
                    </div>
                    <div class="asigments px-0 px-md-5" id="accordionExample">
                        <div v-for="asigment in asigmentsSelected" :key="asigment.id">
                            <div class="card-header d-flex align-items-center" :id="`heading${asigment.id}`">
                                <p class="mb-0 bg-primary d-flex align-items-center justify-content-center font-weight-bold text-white rounded-circle" style="height:30px; width:30px">{{getInitials(asigment.name)}}</p> 
                                <h2 class="mb-0">
                                    <p class="mb-0 btn btn-link text-default" type="button" data-toggle="collapse" :data-target="`#collapse${asigment.id}`" aria-expanded="true" :aria-controls="`#collapse${asigment.id}`">
                                        {{asigment.name}}
                                    </p>
                                </h2>
                            </div>
                            <div :id="`collapse${asigment.id}`" class="collapse" :aria-labelledby="`heading${asigment.id}`" data-parent="#accordionExample">
                                <div class="card-body">
                                    <base-checkbox v-for="n in asigment.topics" :key="n" checked class="ml-1 mb-2 font-weight-bold">Tema {{n}}</base-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3 py-4 border-top text-center">
                        <div class="row justify-content-center">
                            <base-button type="btn btn-primary" @click="play" class="text-white btn-lg col-md-3 col-8" style="font-size:22px">JUGAR</base-button>
                        </div>
                    </div>                    
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import asigments from '../../data/asigments.js'

$('.asigments').collapse()

export default {
  data() {
    return {
      asigmentsSelected: [],
      asigments,
      radio:  'radio-1',
      checked: [ true, false, false],
    }
  },

  methods: {
    getInitials(name) {
      const names = name.split(' ')
      const initials = names.reduce( (letters, word) => letters + word[0], '')
      return initials.substr(0,2).toUpperCase()
    },

    play() {
      this.$router.push({ path: 'board', query: { setting: this.radio.split('-')[1], difficulty: this.checked } })
    }
  },

  mounted() {
    const ids = this.$route.query.asigments
    this.asigmentsSelected = asigments.filter(asigment => ids.includes(asigment.id.toString()))
    if(this.asigmentsSelected.length <= 0)  this.$router.go()
  },
}
</script>
<style>
</style>
