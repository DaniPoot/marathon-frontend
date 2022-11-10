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
        <div class="column">
          <div class="row">
            <div class="col">
              <p class="font-weight-bold">Ajuste: <span>{{ ajustmen }}</span></p>
              <p class="font-weight-bold">Dificultad: <span>{{ difficulty.name }}</span></p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="column">
                <p v-if="question" class="display-3 text-center mt-5 font-weight-bolder text-center">
                    {{ question.description }}
                </p>
                <div class="column">
                  <template v-if="question">
                    <card 
                      :class="{ 'mb-sm text-center heading': true, 'bg-default text-white': answer.id === answerSelected} "
                      v-for="answer in question.answers"
                      :key="answer.id"
                      @click.native="onSelectAnswer(answer.id)"
                    >
                      {{ answer.description }} 
                    </card>
                  </template>
                </div>
                <div class="text-center">
                  <base-button type="btn btn-primary" class="text-white" v-if="!next"  @click="validateAnswer">
                    Enviar Respuesta
                  </base-button>
                  <base-button type="btn btn-primary" class="text-white" v-if="next">
                    Siguiente Pregunta
                  </base-button>
                </div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </card>
    </div>
  </section>
</section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Card from '@/components/Card'

export default {
  name: 'Board', 
  data () {
    return {
      questions: [],
      question: undefined,
      answerSelected: undefined,
      next: false
    }
  },
  async created () {
    await this.getQuestion()
    this.selectQuestion()
  },
  computed: {
    ...mapState('game', ['ajustmen', 'topics', 'difficulties']),
    difficulty () {
      if (this.difficulties.length === 1) return this.difficulties[0]
      return ''
    }
  },
  methods: {
    ...mapActions('questions', ['getQuestionByTopicsAndDifficulties']),
    ...mapActions('answers', ['verifyAnswer']),
    ...mapMutations('game', ['addPointToUser', 'addPointToIgnorance']),
    async getQuestion () {
      try {
        this.questions = await this.getQuestionByTopicsAndDifficulties({
          topics: this.topics,
          difficulties: this.difficulties.map(d => d.id)
        })
      } catch (error) {
        console.log(error)
      }
    },
    selectQuestion () {
      const index = Math.floor(Math.random() * (this.questions.length - 2) + 1)
      this.question = this.questions[index]
    },
    onSelectAnswer (id) {
      this.answerSelected = id
    },
    async validateAnswer () {
      console.log('Valided')
      if (this.answerSelected) {
        const isCorrect = await this.verifyAnswer({ question: this.question.id, answer: this.answerSelected })
        console.log({ isCorrect }, this.answerSelected)
        isCorrect ? this.addPointToUser() : this.addPointToIgnorance()
        this.next = true
      } else {
        // TODO ALERT
      }
    },
    getNewQuestion () {
      this.next = false
      this.questions = this.questions.filter(v => v !== this.question.id)
      this.selectQuestion()
      this.answerSelected = undefined
    }
  },
}
</script>

<style>

</style>
