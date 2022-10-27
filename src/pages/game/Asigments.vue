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
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-0">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 mt-5">                  
                                <h2 class="h2 font-weight-bold text-center">Iniciar nueva partida</h2>          
                                <base-input alternative
                                    placeholder="Buscar Asignatura"
                                    class="mt-4"
                                    v-model="search"
                                    @input="searchAsigments"
                                    addon-left-icon="fa fa-search">
                                    
                                </base-input>
                            </div>
                        </div>
                        <div class="my-1 py-2 border-top text-center">
                            <div class="row justify-content-center">
                                <base-button @click="sendAsigments" type="primary btn-sm" class="text-white btn-lg col-md-3 col-8" style="font-size:22px">SIGUIENTE</base-button>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <card class="col-sm-12 col-md-4 col-lg-2 m-1" v-for="asigment in [...asigmentsSelected,...asigmentsMatched]" v-bind:key="asigment.id">
                                 <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">{{getInitials(asigment.name)}}</p> 
                                        <p class="font-weight-bold text-center">{{asigment.name}}</p>
                                    </div>
                                        <base-button v-if="asigment.selected" type="primary btn-sm" :id="'asigment-'+asigment.id" @click="removeAsigment" >SELECCIONADA</base-button>
                                        <base-button v-else type="neutral btn-sm" :id="'asigment-'+asigment.id" @click="selectAsigment">SELECCIONAR</base-button>
                                </div>
                            </card>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import asigments from '../../data/asigments.js'
export default {
  name: 'Login',
  data () {
    return {
      asigments,
      allAsigments: [...asigments],
      search: '',
      asigmentsMatched: asigments,
      asigmentsSelected: []
    }
  },
  methods: {
    getInitials(name) {
      const names = name.split(' ')
      const initials = names.reduce( (letters, word) => letters + word[0], '')
      return initials.substr(0,2).toUpperCase()
    },

    searchAsigments(query) {
      let matched = this.asigments.filter( asigment => asigment.name.toLowerCase().includes(query.toLowerCase()))
      this.asigmentsMatched = matched
    },
    
    selectAsigment(e) {
      const asigmentId = e.target.id.split('-')[1]
      const asigmentSelectedIndex = this.asigments.findIndex(asigment => asigment.id == asigmentId)
      this.asigmentsSelected.push( { ...this.asigments[asigmentSelectedIndex], selected: true })
      this.asigments.splice(asigmentSelectedIndex, 1)
    },

    removeAsigment(e) {
      const asigmentId = e.target.id.split('-')[1]
      const asigmentRemovedIndex = this.asigmentsSelected.findIndex(asigment => asigment.id == asigmentId)
      this.asigments.unshift( { ...this.asigmentsSelected[asigmentRemovedIndex], selected: false })
      this.asigmentsSelected.splice(asigmentRemovedIndex, 1)
    },

    sendAsigments() {
      const ids = this.asigmentsSelected.map(asigment => asigment.id)
      this.$router.push({ path: 'difficulty', query: { asigments: ids } })
    }

  }
}
</script>
<style>
</style>
