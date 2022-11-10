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
                                    addon-left-icon="fa fa-search">
                                </base-input>
                            </div>
                        </div>
                        <div class="my-1 py-2 border-top text-center">
                            <div class="row justify-content-center">
                                <base-button @click="sendSubjects" type="primary btn-sm" class="text-white btn-lg col-md-3 col-8" style="font-size:22px">SIGUIENTE</base-button>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <card class="col-sm-12 col-md-4 col-lg-2 m-1" v-for="subject in allSubjects" v-bind:key="subject.id">
                                 <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">{{getInitials(subject.name)}}</p> 
                                        <p class="font-weight-bold text-center">{{subject.name}}</p>
                                    </div>
                                        <base-button v-if="subject.selected" type="primary btn-sm" @click="deselectSubject(subject)" >SELECCIONADA</base-button>
                                        <base-button v-else type="neutral btn-sm" @click="selectSubject(subject)" >SELECCIONAR</base-button>
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
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      subjects: [],
      subjectByQuery: [],
      search: '',
    }
  },
  async created () {
    const subjects = await this.getAllSubjects()
    this.subjects = subjects.map(s => ({ ...s, selected: false }))
  },
  watch: {
    async search () {
      if (this.search) {
        const subjectsByQuery = await this.getAllSubjectsByQuery(this.search)
        this.subjectByQuery = subjectsByQuery.filter(sub => !this.subjectsId.includes(sub.id))
      }
    }
  },
  computed: {
    allSubjects () {
      const subjects = [...this.subjects, ...this.subjectByQuery]
      return subjects
    },
    subjectsId () {
      return this.subjects.map(v => v.id)
    }
  },
  methods: {
    ...mapActions('subjects', ['getAllSubjects', 'getAllSubjectsByQuery']),
    ...mapMutations('subjects',['setSubjects']),
    selectSubject (subject) {
      subject.selected = true
    },
    deselectSubject (subject) {
      subject.selected = false
    },
    getInitials(name) {
      const names = name.split(' ')
      const initials = names.reduce( (letters, word) => letters + word[0], '')
      return initials.substr(0,2).toUpperCase()
    },
    sendSubjects () {
      const subjects = this.allSubjects.filter(asigment => asigment.selected)
      this.setSubjects(subjects)
      this.$router.push({ path: 'difficulty' })
    }
  }
}
</script>
<style>
</style>
