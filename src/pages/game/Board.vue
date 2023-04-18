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
    <div  id="board-container" class="container pt-2 pt-lg-7 d-flex flex-column justify-content-around align-items-center minh-100">
      <card shadow class="card-profile" style="width: 95vw; height: 85vh">
        <div class="column">
          <div class="row">
            <div class="col">
              <p class="font-weight-bold">Puntaje: <span>{{ (userPoints*100) }}</span></p> 
              <p class="font-weight-bold">Ajuste: <span>{{ }}</span></p> 
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="column">
                <p v-if="question" id="question" style="max-height: 142px; overflow: scroll;" class="display-3 text-center mt-5 font-weight-bolder text-center">
                    {{ question.description }}
                </p>
                <div class="column">
                  <template v-if="question">
                    <card 
                      :class="{ 'mb-sm text-center heading': true, 'bg-default text-white': answer.id === answerSelected} "
                      v-for="answer in question.answers"
                      :key="answer.id"
                      style="cursor:pointer"
                      @click.native="onSelectAnswer(answer.id)"
                    >
                      {{ answer.description }} 
                    </card>
                  </template>
                </div>
                <div class="text-center">
                  <base-button type="btn btn-primary" :disabled="!answerSelected" @click="validateAnswer" class="text-white" >
                    Siguiente Pregunta
                  </base-button>
                </div>
              </div>
            </div>
            <div class="col">
              <game-board :onPlayerMove="playerPosition" :onIgnoranceMove="ignorancePosition"></game-board>
            </div>
          </div>
        </div>
      </card>
    </div>
  </section>
</section>
</template>

<script>
import party from 'party-js'
import { mapActions, mapState, mapMutations } from 'vuex'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import GameBoard from '@/components/GameBoard'

export default {
  name: 'Board',
  components: {
    GameBoard
  },
  data () {
    return {
      questions: [],
      question: undefined,
      answerSelected: undefined,
      playerPosition: -1,
      ignorancePosition: -1,
      showModal: true,
      sndCorrect: new Audio('/sounds/correct.mp3'),
      sndFail: new Audio('/sounds/fail.mp3'),
      orderedDifficulties: [],
      currentDifficulty: 0,
    }
  },
  async created () {
    await this.getQuestion()
    this.orderDifficulties()
    this.selectQuestion()
    this.resetPoints()
  },
  computed: {
    ...mapState('game', ['ajustmen', 'topics', 'difficulties', 'userPoints', 'ignorancePoints']),
    difficulty () {
      if (this.difficulties.length === 1) return this.difficulties[0]
      return ''
    }
  },
  methods: {
    ...mapActions('questions', ['getQuestionByTopicsAndDifficulties']),
    ...mapActions('answers', ['verifyAnswer']),
    ...mapMutations('game', ['addPointToUser', 'addPointToIgnorance', 'resetPoints']),
    orderDifficulties() {
      console.log(this.difficulties)
      const dfficulties = [...this.difficulties].sort((a,b) => a.order - b.order)

      console.log(dfficulties)
    },
    addDifficulty() {
      this.currentDifficulty++
    },
    reduceDifficulty() {
      this.currentDifficulty--
    },
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
      if (this.answerSelected) {
        const isCorrect = await this.verifyAnswer({ question: this.question.id, answer: this.answerSelected })
        if(isCorrect){
          party.confetti(document.getElementById('question'))
          this.addPointToUser()
          this.playerPosition++
          this.sndCorrect.play()
        }else{
          this.addPointToIgnorance()
          this.ignorancePosition++
          this.sndFail.play()
        }
        this.getNewQuestion()
      }
    },
    getNewQuestion () {
      this.questions = this.questions.filter(question =>  question.id !== this.question.id)
      if(this.questions.length>0 && this.ignorancePosition <= 9  && this.playerPosition <= 9){
        this.selectQuestion()
        this.answerSelected = undefined
      }else{
        if(this.playerPosition> this.ignorancePosition){
          party.confetti(document.getElementById('board-container'), {
            count: 100,
          })
        }
        setTimeout(()=> {this.$router.push({ path: 'score' })}, 1000)
      }
      
    }
  },
}
</script>

<style>

</style>
