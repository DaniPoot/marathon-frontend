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
                    <base-button @click="back" class="m-3" type="btn-light">regresar</base-button>
                    <div class="row d-flex justify-content-center mb-3">
                        <card shadow class="col-md-5 col-12 mx-4">
                            <p class="h4 text-primary font-weight-bold">Dificultad</p>
                            <div class="d-flex mt-3 mb-2 flex-wrap flex-column flex-md-row">
                                <base-checkbox class="mr-3 mt-1" v-for="difficulty of difficulties" v-model="difficulty.checked" :key="difficulty.id">
                                  {{ difficulty.name }}
                                </base-checkbox>
                            </div>
                        </card>
                        <card shadow class="col-md-5 col-12 mx-4 mt-4 mt-md-0">
                            <p class="h4 text-primary font-weight-bold">Ajuste de dificultad</p>
                            <div class="d-flex mt-3 mb-2 flex-wrap">
                                <base-radio  name="manual" class="mr-3 mt-1" v-model="difficultyAjustmen">
                                    Manual
                                </base-radio>
                                <base-radio name="automatic" class="mr-3 mt-1" v-model="difficultyAjustmen">
                                    Automática
                                </base-radio>
                                <base-radio name="inteligente" class="mr-3 mt-1" v-model="difficultyAjustmen">
                                    Inteligente
                                </base-radio>
                            </div>
                        </card>
                    </div>
                    <div class="asigments px-0 px-md-5 " id="accordionExample">
                        <div v-for="subject in subjectsWithTopics" :key="subject.id">
                            <div class="card-header d-flex align-items-center" :id="`heading${subject.id}`">
                                <p class="mb-0 bg-primary d-flex align-items-center justify-content-center font-weight-bold text-white rounded-circle" style="height:30px; width:30px">{{getInitials(subject.name)}}</p> 
                                <h2 class="mb-0">
                                    <p class="mb-0 btn btn-link text-default" type="button" data-toggle="collapse" :data-target="`#collapse${subject.id}`" aria-expanded="true" :aria-controls="`#collapse${subject.id}`">
                                        {{subject.name}}
                                    </p>
                                </h2>
                            </div>
                            <div :id="`collapse${subject.id}`" class="collapse show" :aria-labelledby="`heading${subject.id}`" data-parent="#accordionExample">
                                <div class="card-body">
                                    <base-checkbox v-for="topic in subject.topics" :key="topic.id" v-model="topic.checked"  class="ml-1 mb-2 font-weight-bold">{{ topic.name }}</base-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3 py-4 border-top text-center">
                        <div class="row justify-content-center">
                            <base-button type="btn btn-primary" @click="play" :disabled="!difficultyAjustmen || difficultiesSelected.length === 0 || topicsSelected.length === 0" class="text-white btn-lg col-md-3 col-8" style="font-size:22px">JUGAR</base-button>
                        </div>
                    </div>                    
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      difficulties: [],
      subjectsWithTopics: [],
      
      difficultyAjustmen: 'manual'
    }
  },
  async created () {
    await Promise.all([this.getDifficulties(), this.getTopics()])
    console.log(this.subjects)
  },
  computed: {
    ...mapState('subjects', ['subjects']),
    topicsSelected () {
      return this.subjectsWithTopics.reduce((prev, subject) => {
        const topicsSelected = subject.topics.filter(v => v.checked).map(v => v.id)
        return prev.concat(topicsSelected)
      }, [])
    },
    difficultiesSelected () {
      return this.difficulties.filter(v => v.checked)
    }
  },
  methods: {
    ...mapActions('topics', ['getTopicsBySubject']),
    ...mapActions('difficulties', ['getAllDifficulties']),
    ...mapMutations('game', ['setTopics', 'setDifficulties', 'setAjustmen']),
    back () {
      this.$router.push({ name: 'newgame' })
    },
    async getDifficulties () {
      const difficulties = await this.getAllDifficulties()
      this.difficulties = difficulties.map((dif, index) => index !== 0 ? { ...dif } : { ...dif, checked: true })
    },
    async getTopics () {
      const promisesSubjects = this.subjects.map(subject => this.getTopicsBySubject({ subject: subject.id }))
      const topics = await Promise.all(promisesSubjects)
      const topicsChecked = topics.map(topicsInSubject => 
        topicsInSubject.map(topic => ( { ...topic, checked: true } ))
      )
      this.subjectsWithTopics = this.subjects.map((subject, index)=> ({
        id: subject.id,
        name: subject.name,
        topics: topicsChecked[index] || []
      }))
    },
    getInitials(name) {
      const names = name.split(' ')
      const initials = names.reduce( (letters, word) => letters + word[0], '')
      return initials.substr(0,2).toUpperCase()
    },

    play() {
      console.log(this.subjectsWithTopics)
      this.setTopics(this.topicsSelected)
      this.setDifficulties(this.difficultiesSelected)
      this.setAjustmen(this.difficultyAjustmen)
      this.$router.push({ path: 'board' })
    }
  },
}
</script>
<style>
</style>
